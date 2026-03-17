'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import AlternatingVideoBackground from '@/components/AlternatingVideoBackground';

// ── SHARED TOKENS ─────────────────────────────────────────────────────────────
const C = {
  cyan: '#5DF0DE',
  cyanBorder: 'rgba(93,240,222,0.25)',
  purple: '#A78BFA',
  purpleBorder: 'rgba(167,139,250,0.3)',
  purpleGlow: 'rgba(167,139,250,0.08)',
  blue: '#1B2A6B',
  white: '#F0F4FF',
  whiteDim: 'rgba(240,244,255,0.55)',
  red: '#FF6B6B',
  overlay: 'rgba(0,2,18,0.9)',
};

const MODAL_VIDEOS = [
  '/video3.mp4',
  '/video4.mp4',
  '/video5.mp4',
  '/video6.mp4',
  '/video8.mp4',
  '/video9.mp4',
  '/video10.mp4',
  '/video11.mp4',
  '/video12.mp4',
  '/video13.mp4',
  '/video14.mp4',
  '/video15.mp4',
  '/video16.mp4',
  '/video_homepage.mp4',
  '/Futuristic_African_Child_Astronaut_Video.mp4',
  '/bg2.mp4',
];

const EVENT_TYPES = [
  { value: 'school', label: '🏫 School Visit', desc: 'Interactive workshops & demos' },
  { value: 'birthday', label: '🎉 Birthday Party', desc: 'Space-themed celebrations' },
  { value: 'corporate', label: '🏢 Corporate Event', desc: 'Team building & innovation' },
  { value: 'community', label: '🌍 Community Event', desc: 'Public outreach programs' },
  { value: 'other', label: '✦ Other', desc: 'Tell us more below' },
];

// ── FORM STATE ────────────────────────────────────────────────────────────────
interface BookingFormState {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  eventType: string;
  preferredDate: string;
  city: string;
  attendees: string;
  message: string;
}

// ── INPUT STYLES ──────────────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  background: 'rgba(167,139,250,0.04)',
  border: `1.5px solid ${C.cyanBorder}`,
  borderRadius: 10,
  color: C.white,
  fontSize: 14,
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s, background 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: C.purple,
  marginBottom: 6,
  opacity: 0.9,
};

const errorStyle: React.CSSProperties = {
  fontSize: 11,
  color: C.red,
  marginTop: 4,
};

// ── FOCUS HOOK ────────────────────────────────────────────────────────────────
function useFocusStyle() {
  const [focused, setFocused] = useState(false);

  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    style: (base: React.CSSProperties, hasError?: boolean): React.CSSProperties => ({
      ...base,
      borderColor: hasError ? C.red : focused ? C.purple : C.cyanBorder,
      background: focused ? 'rgba(167,139,250,0.07)' : base.background,
      boxShadow: focused ? '0 0 0 3px rgba(167,139,250,0.1)' : 'none',
    }),
  };
}

// ── FIELD ─────────────────────────────────────────────────────────────────────
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label style={labelStyle}>{label}</label>
      {children}
      {error && <span style={errorStyle}>⚠ {error}</span>}
    </div>
  );
}

// ── SMART INPUT ───────────────────────────────────────────────────────────────
function SInput({
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  const { focusProps, style } = useFocusStyle();
  return <input {...props} {...focusProps} style={style(inputStyle, error)} />;
}

// ── SMART TEXTAREA ────────────────────────────────────────────────────────────
function STextarea({
  error,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean }) {
  const { focusProps, style } = useFocusStyle();

  return (
    <textarea
      {...props}
      {...focusProps}
      rows={4}
      style={{
        ...style(inputStyle, error),
        resize: 'vertical',
        minHeight: 90,
      }}
    />
  );
}

// ── CUSTOM DROPDOWN ───────────────────────────────────────────────────────────
function Dropdown({
  value,
  onChange,
  options,
  placeholder = 'Select…',
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  error?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          padding: '12px 40px 12px 16px',
          boxSizing: 'border-box',
          background: open ? 'rgba(167,139,250,0.07)' : 'rgba(8,18,60,0.85)',
          border: `1.5px solid ${error ? C.red : open ? C.purple : C.cyanBorder}`,
          borderRadius: open ? '10px 10px 0 0' : 10,
          color: selected ? C.white : 'rgba(240,244,255,0.35)',
          fontSize: 14,
          cursor: 'pointer',
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: open ? '0 0 0 3px rgba(167,139,250,0.1)' : 'none',
          transition: 'all 0.15s',
        }}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <span
          style={{
            fontSize: 10,
            color: C.purple,
            opacity: 0.7,
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s',
          }}
        >
          ▼
        </span>
      </div>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 50,
            background: 'rgba(6,12,44,0.98)',
            border: `1.5px solid ${C.purple}`,
            borderTop: 'none',
            borderRadius: '0 0 10px 10px',
            maxHeight: 240,
            overflowY: 'auto',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
          }}
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(167,139,250,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  opt.value === value ? 'rgba(167,139,250,0.1)' : 'transparent';
              }}
              style={{
                padding: '11px 16px',
                fontSize: 14,
                cursor: 'pointer',
                color: opt.value === value ? C.purple : C.white,
                background:
                  opt.value === value ? 'rgba(167,139,250,0.1)' : 'transparent',
                borderBottom: '1px solid rgba(93,240,222,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'background 0.1s',
              }}
            >
              {opt.value === value && (
                <span style={{ color: C.purple, fontSize: 12 }}>✓</span>
              )}
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── EVENT TYPE CARDS ──────────────────────────────────────────────────────────
function EventTypeSelector({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  error?: boolean;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 8,
      }}
    >
      {EVENT_TYPES.map((t) => {
        const selected = value === t.value;

        return (
          <div
            key={t.value}
            onClick={() => onChange(t.value)}
            style={{
              padding: '12px 8px',
              borderRadius: 10,
              cursor: 'pointer',
              textAlign: 'center',
              border: `1.5px solid ${
                error && !value ? C.red : selected ? C.purple : C.cyanBorder
              }`,
              background: selected ? 'rgba(167,139,250,0.12)' : 'rgba(8,18,60,0.6)',
              transition: 'all 0.15s',
              boxShadow: selected ? '0 0 0 3px rgba(167,139,250,0.1)' : 'none',
            }}
          >
            <div style={{ fontSize: 18, marginBottom: 4 }}>{t.label.split(' ')[0]}</div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: selected ? C.purple : C.white,
                marginBottom: 2,
              }}
            >
              {t.label.split(' ').slice(1).join(' ')}
            </div>
            <div style={{ fontSize: 10, color: C.whiteDim, lineHeight: 1.3 }}>
              {t.desc}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── DIVIDER ───────────────────────────────────────────────────────────────────
function Divider({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0' }}>
      <div style={{ flex: 1, height: 1, background: C.purpleBorder }} />
      <span
        style={{
          fontSize: 10,
          color: C.purple,
          opacity: 0.6,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: C.purpleBorder }} />
    </div>
  );
}

// ── SUCCESS ───────────────────────────────────────────────────────────────────
function Success({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ position: 'relative', width: 100, height: 100, margin: '0 auto 32px' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4C1D95, #A78BFA)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 40,
            boxShadow: '0 0 40px rgba(167,139,250,0.4)',
          }}
        >
          🚀
        </div>
        <div
          style={{
            position: 'absolute',
            inset: -12,
            borderRadius: '50%',
            border: `1px solid ${C.purpleBorder}`,
            animation: 'sky-orbit 4s linear infinite',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -4,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: C.purple,
              boxShadow: `0 0 8px ${C.purple}`,
            }}
          />
        </div>
      </div>

      <h3 style={{ fontSize: 22, fontWeight: 800, color: C.white, marginBottom: 8 }}>
        Booking Request Received!
      </h3>
      <p
        style={{
          fontSize: 13,
          color: C.purple,
          fontWeight: 600,
          letterSpacing: '0.08em',
          marginBottom: 12,
        }}
      >
        We&apos;re ready to launch your event ✦
      </p>
      <p
        style={{
          fontSize: 13,
          color: C.whiteDim,
          lineHeight: 1.7,
          maxWidth: 300,
          margin: '0 auto 28px',
        }}
      >
        Our events team will review your request and get back to you within{' '}
        <strong style={{ color: C.purple }}>48 hours</strong> with availability and pricing.
      </p>
      <button
        onClick={onClose}
        style={{
          padding: '12px 36px',
          border: 'none',
          borderRadius: 10,
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #4C1D95, #A78BFA)',
          color: C.white,
          fontSize: 14,
          fontWeight: 700,
          fontFamily: 'inherit',
        }}
      >
        Close
      </button>
    </div>
  );
}

// ── BOOKING FORM ──────────────────────────────────────────────────────────────
function BookingForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<BookingFormState>({
    fullName: '',
    email: '',
    phone: '',
    organisation: '',
    eventType: '',
    preferredDate: '',
    city: '',
    attendees: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<BookingFormState>>({});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false);

  const set =
    (k: keyof BookingFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const e: Partial<BookingFormState> = {};

    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.eventType) e.eventType = 'Please select an event type';
    if (!form.preferredDate) e.preferredDate = 'Preferred date is required';
    if (!form.city.trim()) e.city = 'Location / city is required';
    if (!form.attendees) e.attendees = 'Please select a range';

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 1500);
  }

  if (done) return <Success onClose={onClose} />;

  return (
    <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            flexShrink: 0,
            background: 'linear-gradient(135deg, #4C1D95, #A78BFA)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            boxShadow: '0 4px 20px rgba(167,139,250,0.35)',
          }}
        >
          🚀
        </div>
        <div>
          <p
            style={{
              fontSize: 11,
              color: C.purple,
              letterSpacing: '0.15em',
              fontWeight: 700,
              marginBottom: 3,
            }}
          >
            PROTOVERSE LABS
          </p>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: C.white,
              lineHeight: 1.1,
              marginBottom: 2,
            }}
          >
            Request a Booking
          </h2>
          <p style={{ fontSize: 11, color: C.whiteDim, letterSpacing: '0.08em' }}>
            Bring space science & AI to your school, event, or organisation
          </p>
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Event Type</label>
        <EventTypeSelector
          value={form.eventType}
          onChange={(v) => setForm((f) => ({ ...f, eventType: v }))}
          error={!!errors.eventType}
        />
        {errors.eventType && <span style={errorStyle}>⚠ {errors.eventType}</span>}
      </div>

      <Divider label="Your Details" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
        <Field label="Full Name" error={errors.fullName}>
          <SInput
            placeholder="e.g. Dr. Amara Okafor"
            value={form.fullName}
            onChange={set('fullName')}
            error={!!errors.fullName}
          />
        </Field>
        <Field label="Organisation Name">
          <SInput
            placeholder="School / Company (optional)"
            value={form.organisation}
            onChange={set('organisation')}
          />
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Divider label="Contact Info" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
        <Field label="Email Address" error={errors.email}>
          <SInput
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={set('email')}
            error={!!errors.email}
          />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <SInput
            type="tel"
            placeholder="+234 800 000 0000"
            value={form.phone}
            onChange={set('phone')}
            error={!!errors.phone}
          />
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Divider label="Event Details" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
        <Field label="Preferred Date" error={errors.preferredDate}>
          <SInput
            type="date"
            value={form.preferredDate}
            onChange={set('preferredDate')}
            error={!!errors.preferredDate}
          />
        </Field>
        <Field label="Location / City" error={errors.city}>
          <SInput
            placeholder="e.g. Lagos, Nigeria"
            value={form.city}
            onChange={set('city')}
            error={!!errors.city}
          />
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Field label="Number of Attendees" error={errors.attendees}>
          <Dropdown
            value={form.attendees}
            onChange={(v) => setForm((f) => ({ ...f, attendees: v }))}
            placeholder="Select expected attendance…"
            error={!!errors.attendees}
            options={['1–30', '31–100', '101–300', '301–500', '500+'].map((r) => ({
              label: r,
              value: r,
            }))}
          />
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Divider label="Additional Info" />
      </div>

      <div style={{ marginTop: 16 }}>
        <Field label="Message / Special Requests">
          <STextarea
            placeholder="Tell us more about your event, theme, specific requirements, or any questions…"
            value={form.message}
            onChange={set('message')}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={loading}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          marginTop: 24,
          width: '100%',
          padding: '15px 24px',
          border: 'none',
          borderRadius: 12,
          fontFamily: 'inherit',
          fontSize: 15,
          fontWeight: 800,
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1,
          background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #A78BFA 100%)',
          color: C.white,
          transform: hovered && !loading ? 'translateY(-2px)' : 'none',
          boxShadow: hovered && !loading
            ? '0 8px 30px rgba(167,139,250,0.35)'
            : '0 4px 16px rgba(0,0,0,0.3)',
          transition: 'all 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        {loading ? (
          <>
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                border: '2px solid rgba(240,244,255,0.3)',
                borderTopColor: C.white,
                display: 'inline-block',
                animation: 'sky-spin 0.8s linear infinite',
              }}
            />
            Sending your request…
          </>
        ) : (
          '🚀 Request Booking'
        )}
      </button>
    </form>
  );
}

// ── MODAL SHELL ───────────────────────────────────────────────────────────────
function Modal({ onClose }: { onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', h);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <>
      <style>{`
        @keyframes sky-spin  { to { transform: rotate(360deg); } }
        @keyframes sky-orbit { to { transform: rotate(360deg); } }
        @keyframes sky-fadein {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <div
        ref={overlayRef}
        onClick={(e) => {
          if (e.target === overlayRef.current) onClose();
        }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '40px 16px',
          overflowY: 'auto',
          background: C.overlay,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 720,
            maxHeight: 'none',
            borderRadius: 20,
            border: `1px solid ${C.purpleBorder}`,
            padding: '36px 36px 56px',
            boxShadow: `0 0 80px ${C.purpleGlow}, 0 30px 80px rgba(0,0,0,0.7)`,
            animation: 'sky-fadein 0.3s ease both',
            overflow: 'visible',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 20,
              overflow: 'hidden',
              zIndex: 0,
            }}
          >
            <AlternatingVideoBackground videos={MODAL_VIDEOS} interval={6000} />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(135deg, rgba(12,4,32,0.92) 0%, rgba(8,14,48,0.88) 100%)',
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 40,
              right: 40,
              height: 1,
              zIndex: 2,
              background: `linear-gradient(90deg, transparent, ${C.purple}, transparent)`,
              opacity: 0.6,
            }}
          />

          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 3,
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'rgba(167,139,250,0.1)',
              border: `1px solid ${C.purpleBorder}`,
              color: C.purple,
              fontSize: 14,
              cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            ✕
          </button>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <BookingForm onClose={onClose} />
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

// ── EXPORT ────────────────────────────────────────────────────────────────────
export default function RequestBookingButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-block bg-horizon-gradient text-protoverse-white font-bold py-4 px-10 rounded-lg hover:scale-105 transition-transform"
      >
        Request Booking
      </button>

      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  );
}