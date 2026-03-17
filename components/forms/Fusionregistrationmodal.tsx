'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import AlternatingVideoBackground from '@/components/AlternatingVideoBackground';

// ── SHARED TOKENS ─────────────────────────────────────────────────────────────
const C = {
  cyan: '#5DF0DE',
  cyanBorder: 'rgba(93,240,222,0.25)',
  cyanGlow: 'rgba(93,240,222,0.08)',
  gold: '#F0C040',
  goldBorder: 'rgba(240,192,64,0.3)',
  goldGlow: 'rgba(240,192,64,0.08)',
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

const COUNTRIES = [
  'Nigeria',
  'Ghana',
  'Kenya',
  'South Africa',
  'Ethiopia',
  'Tanzania',
  'Uganda',
  'Rwanda',
  'Senegal',
  "Côte d'Ivoire",
  'Cameroon',
  'Egypt',
  'Morocco',
  'Zambia',
  'Zimbabwe',
  'Other',
];

const TICKET_TYPES = [
  { value: 'individual', label: 'Individual — Personal attendance' },
  { value: 'group', label: 'Group — 5–20 people' },
  { value: 'school', label: 'School — Institutional group' },
];

// ── FORM STATE ────────────────────────────────────────────────────────────────
interface FusionFormState {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  organisation: string;
  ticketType: string;
  dietary: string;
}

// ── SHARED INPUT STYLES ───────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  background: 'rgba(240,192,64,0.04)',
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
  color: C.gold,
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
      borderColor: hasError ? C.red : focused ? C.gold : C.cyanBorder,
      background: focused ? 'rgba(240,192,64,0.07)' : base.background,
      boxShadow: focused ? '0 0 0 3px rgba(240,192,64,0.1)' : 'none',
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
      rows={3}
      style={{
        ...style(inputStyle, error),
        resize: 'vertical',
        minHeight: 80,
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
          background: open ? 'rgba(240,192,64,0.07)' : 'rgba(8,18,60,0.85)',
          border: `1.5px solid ${error ? C.red : open ? C.gold : C.cyanBorder}`,
          borderRadius: open ? '10px 10px 0 0' : 10,
          color: selected ? C.white : 'rgba(240,244,255,0.35)',
          fontSize: 14,
          cursor: 'pointer',
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: open ? '0 0 0 3px rgba(240,192,64,0.1)' : 'none',
          transition: 'all 0.15s',
        }}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <span
          style={{
            fontSize: 10,
            color: C.gold,
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
            border: `1.5px solid ${C.gold}`,
            borderTop: 'none',
            borderRadius: '0 0 10px 10px',
            maxHeight: 220,
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
                e.currentTarget.style.background = 'rgba(240,192,64,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  opt.value === value ? 'rgba(240,192,64,0.1)' : 'transparent';
              }}
              style={{
                padding: '11px 16px',
                fontSize: 14,
                cursor: 'pointer',
                color: opt.value === value ? C.gold : C.white,
                background:
                  opt.value === value ? 'rgba(240,192,64,0.1)' : 'transparent',
                borderBottom: '1px solid rgba(93,240,222,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'background 0.1s',
              }}
            >
              {opt.value === value && (
                <span style={{ color: C.gold, fontSize: 12 }}>✓</span>
              )}
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── TICKET CARD SELECTOR ──────────────────────────────────────────────────────
function TicketSelector({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  error?: boolean;
}) {
  const icons = { individual: '🚀', group: '👥', school: '🏫' };
  const prices = {
    individual: '₦15,000',
    group: '₦12,000/pp',
    school: '₦10,000/pp',
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 10,
      }}
    >
      {TICKET_TYPES.map((t) => {
        const selected = value === t.value;

        return (
          <div
            key={t.value}
            onClick={() => onChange(t.value)}
            style={{
              padding: '14px 10px',
              borderRadius: 10,
              cursor: 'pointer',
              textAlign: 'center',
              border: `1.5px solid ${
                error && !value ? C.red : selected ? C.gold : C.cyanBorder
              }`,
              background: selected ? 'rgba(240,192,64,0.1)' : 'rgba(8,18,60,0.6)',
              transition: 'all 0.15s',
              boxShadow: selected ? '0 0 0 3px rgba(240,192,64,0.1)' : 'none',
            }}
          >
            <div style={{ fontSize: 22, marginBottom: 6 }}>
              {icons[t.value as keyof typeof icons]}
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: selected ? C.gold : C.white,
                marginBottom: 4,
              }}
            >
              {t.value.charAt(0).toUpperCase() + t.value.slice(1)}
            </div>
            <div
              style={{
                fontSize: 11,
                color: selected ? C.gold : C.whiteDim,
                opacity: 0.85,
              }}
            >
              {prices[t.value as keyof typeof prices]}
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
      <div style={{ flex: 1, height: 1, background: C.goldBorder }} />
      <span
        style={{
          fontSize: 10,
          color: C.gold,
          opacity: 0.6,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: C.goldBorder }} />
    </div>
  );
}

// ── SUCCESS ───────────────────────────────────────────────────────────────────
function Success({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div
        style={{
          position: 'relative',
          width: 100,
          height: 100,
          margin: '0 auto 32px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8B6914, #F0C040)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 40,
            boxShadow: '0 0 40px rgba(240,192,64,0.4)',
          }}
        >
          🌍
        </div>
        <div
          style={{
            position: 'absolute',
            inset: -12,
            borderRadius: '50%',
            border: `1px solid ${C.goldBorder}`,
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
              background: C.gold,
              boxShadow: `0 0 8px ${C.gold}`,
            }}
          />
        </div>
      </div>

      <h3 style={{ fontSize: 22, fontWeight: 800, color: C.white, marginBottom: 8 }}>
        You&apos;re on the List!
      </h3>
      <p
        style={{
          fontSize: 13,
          color: C.gold,
          fontWeight: 600,
          letterSpacing: '0.08em',
          marginBottom: 12,
        }}
      >
        FUSION 2026 — See you in Lagos ✦
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
        Your spot is reserved. A confirmation email with event details will be sent to
        you within <strong style={{ color: C.gold }}>24 hours</strong>.
      </p>
      <button
        onClick={onClose}
        style={{
          padding: '12px 36px',
          border: 'none',
          borderRadius: 10,
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #8B6914, #F0C040)',
          color: '#0A0800',
          fontSize: 14,
          fontWeight: 800,
          fontFamily: 'inherit',
        }}
      >
        Close
      </button>
    </div>
  );
}

// ── FORM ──────────────────────────────────────────────────────────────────────
function FusionForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FusionFormState>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    organisation: '',
    ticketType: '',
    dietary: '',
  });

  const [errors, setErrors] = useState<Partial<FusionFormState>>({});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false);

  const set =
    (k: keyof FusionFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const e: Partial<FusionFormState> = {};

    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.country) e.country = 'Please select a country';
    if (!form.ticketType) e.ticketType = 'Please select a ticket type';

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
            background: 'linear-gradient(135deg, #8B6914, #F0C040)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            boxShadow: '0 4px 20px rgba(240,192,64,0.35)',
          }}
        >
          🌍
        </div>
        <div>
          <p
            style={{
              fontSize: 11,
              color: C.gold,
              letterSpacing: '0.15em',
              fontWeight: 700,
              marginBottom: 3,
            }}
          >
            PROTOVERSE LABS PRESENTS
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
            FUSION 2026
          </h2>
          <p style={{ fontSize: 11, color: C.whiteDim, letterSpacing: '0.1em' }}>
            JAN 1 · LAGOS, NIGERIA · AFRICA&apos;S PREMIER SPACE-TECH CONFERENCE
          </p>
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Select Ticket Type</label>
        <TicketSelector
          value={form.ticketType}
          onChange={(v) => setForm((f) => ({ ...f, ticketType: v }))}
          error={!!errors.ticketType}
        />
        {errors.ticketType && <span style={errorStyle}>⚠ {errors.ticketType}</span>}
      </div>

      <Divider label="Your Details" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
        <Field label="Full Name" error={errors.fullName}>
          <SInput
            placeholder="e.g. Amara Okafor"
            value={form.fullName}
            onChange={set('fullName')}
            error={!!errors.fullName}
          />
        </Field>

        <Field label="Organisation / School" error={errors.organisation}>
          <SInput
            placeholder="Optional"
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, marginTop: 16 }}>
        <Field label="Country" error={errors.country}>
          <Dropdown
            value={form.country}
            onChange={(v) => setForm((f) => ({ ...f, country: v }))}
            placeholder="Select your country…"
            error={!!errors.country}
            options={COUNTRIES.map((c) => ({ label: c, value: c }))}
          />
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Divider label="Accessibility" />
      </div>

      <div style={{ marginTop: 16 }}>
        <Field label="Dietary / Accessibility Needs">
          <STextarea
            placeholder="e.g. Vegetarian, wheelchair access, hearing assistance… (optional)"
            value={form.dietary}
            onChange={set('dietary')}
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
          background: 'linear-gradient(135deg, #8B6914 0%, #D4A820 50%, #F0C040 100%)',
          color: '#0A0800',
          transform: hovered && !loading ? 'translateY(-2px)' : 'none',
          boxShadow: hovered && !loading
            ? '0 8px 30px rgba(240,192,64,0.35)'
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
                border: '2px solid rgba(10,8,0,0.3)',
                borderTopColor: '#0A0800',
                display: 'inline-block',
                animation: 'sky-spin 0.8s linear infinite',
              }}
            />
            Reserving your spot…
          </>
        ) : (
          '🌍 Register for FUSION 2026'
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
            maxWidth: 700,
            maxHeight: 'none',
            borderRadius: 20,
            border: `1px solid ${C.goldBorder}`,
            padding: '36px 36px 56px',
            boxShadow: `0 0 80px ${C.goldGlow}, 0 30px 80px rgba(0,0,0,0.7)`,
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
                  'linear-gradient(135deg, rgba(20,12,0,0.92) 0%, rgba(8,14,48,0.88) 100%)',
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
              background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
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
              background: 'rgba(240,192,64,0.1)',
              border: `1px solid ${C.goldBorder}`,
              color: C.gold,
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
            <FusionForm onClose={onClose} />
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

// ── EXPORT ────────────────────────────────────────────────────────────────────
export default function FusionRegistrationButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-block rounded-lg bg-protoverse-white px-10 py-4 font-bold text-nebula-blue transition-transform hover:scale-105"
      >
        Register for FUSION 2026
      </button>

      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  );
}