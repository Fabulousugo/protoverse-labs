'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import AlternatingVideoBackground from '@/components/AlternatingVideoBackground';

type ModalType = 'individual' | 'school' | null;

interface IndividualForm {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  country: string;
  program: string;
}
interface SchoolForm {
  schoolName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  studentCount: string;
  program: string;
}

const INDIVIDUAL_PROGRAMS = [
  'AI-Enhanced Learning (8–12 yrs)',
  'Junior Space Explorers (8–12 yrs)',
  'Model Rocketry Academy (13–17 yrs)',
  'CubeSat Program (13–17 yrs)',
];

const SCHOOL_PROGRAMS = [
  'Curriculum Development',
  'School Partnership Program',
  'Teacher Training',
  'Full STEM Integration',
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
  'Other',
];

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

const C = {
  cyan: '#5DF0DE',
  cyanDim: 'rgba(93,240,222,0.15)',
  cyanBorder: 'rgba(93,240,222,0.25)',
  cyanGlow: 'rgba(93,240,222,0.08)',
  purple: '#7B5EA7',
  purpleDim: 'rgba(123,94,167,0.2)',
  blue: '#1B2A6B',
  white: '#F0F4FF',
  whiteDim: 'rgba(240,244,255,0.55)',
  whiteFaint: 'rgba(240,244,255,0.06)',
  surface: 'rgba(8,14,48,0.96)',
  surfaceCard: 'rgba(14,22,62,0.7)',
  red: '#FF6B6B',
  overlay: 'rgba(0,2,18,0.88)',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  background: 'rgba(93,240,222,0.04)',
  border: `1.5px solid ${C.cyanBorder}`,
  borderRadius: 10,
  color: C.white,
  fontSize: 14,
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: C.cyan,
  marginBottom: 6,
  opacity: 0.85,
};

const errorStyle: React.CSSProperties = {
  fontSize: 11,
  color: C.red,
  marginTop: 4,
};

function useFocusStyle() {
  const [focused, setFocused] = useState(false);

  return {
    focused,
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    style: (base: React.CSSProperties, hasError?: boolean): React.CSSProperties => ({
      ...base,
      borderColor: hasError ? C.red : focused ? C.cyan : C.cyanBorder,
      background: focused ? 'rgba(93,240,222,0.08)' : base.background,
      boxShadow: focused ? `0 0 0 3px rgba(93,240,222,0.1)` : 'none',
    }),
  };
}

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

function SInput({
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  const { focusProps, style } = useFocusStyle();

  return <input {...props} {...focusProps} style={style(inputStyle, error)} />;
}

interface DropdownProps {
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  error?: boolean;
}

function Dropdown({
  value,
  onChange,
  options,
  placeholder = 'Select…',
  error,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const triggerStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 40px 12px 16px',
    background: open ? 'rgba(93,240,222,0.08)' : 'rgba(8,18,60,0.85)',
    border: `1.5px solid ${error ? C.red : open ? C.cyan : C.cyanBorder}`,
    borderRadius: open ? '10px 10px 0 0' : 10,
    color: selected ? C.white : 'rgba(240,244,255,0.35)',
    fontSize: 14,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    userSelect: 'none',
    boxShadow: open ? `0 0 0 3px rgba(93,240,222,0.1)` : 'none',
    transition: 'all 0.15s',
    boxSizing: 'border-box',
  };

  const menuStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(6,12,44,0.98)',
    border: `1.5px solid ${C.cyan}`,
    borderTop: 'none',
    borderRadius: '0 0 10px 10px',
    overflow: 'hidden',
    zIndex: 50,
    maxHeight: 220,
    overflowY: 'auto',
    backdropFilter: 'blur(16px)',
    boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
  };

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <div style={triggerStyle} onClick={() => setOpen((o) => !o)}>
        <span>{selected ? selected.label : placeholder}</span>
        <span
          style={{
            fontSize: 10,
            color: C.cyan,
            opacity: 0.7,
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s',
            flexShrink: 0,
          }}
        >
          ▼
        </span>
      </div>

      {open && (
        <div style={menuStyle}>
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              style={{
                padding: '11px 16px',
                fontSize: 14,
                color: opt.value === value ? C.cyan : C.white,
                background:
                  opt.value === value ? 'rgba(93,240,222,0.1)' : 'transparent',
                cursor: 'pointer',
                borderBottom: `1px solid rgba(93,240,222,0.06)`,
                transition: 'background 0.1s',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(93,240,222,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  opt.value === value ? 'rgba(93,240,222,0.1)' : 'transparent';
              }}
            >
              {opt.value === value && (
                <span style={{ color: C.cyan, fontSize: 12 }}>✓</span>
              )}
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0' }}>
      <div style={{ flex: 1, height: 1, background: C.cyanBorder }} />
      <span
        style={{
          fontSize: 10,
          color: C.cyan,
          opacity: 0.5,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: C.cyanBorder }} />
    </div>
  );
}

function SubmitBtn({
  loading,
  label,
  gradient,
}: {
  loading: boolean;
  label: string;
  gradient: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="submit"
      disabled={loading}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%',
        padding: '15px 24px',
        background: gradient,
        border: 'none',
        borderRadius: 12,
        color: C.white,
        fontSize: 15,
        fontWeight: 700,
        fontFamily: 'inherit',
        cursor: loading ? 'not-allowed' : 'pointer',
        opacity: loading ? 0.7 : 1,
        transform: hovered && !loading ? 'translateY(-2px)' : 'none',
        boxShadow: hovered && !loading
          ? '0 8px 30px rgba(93,240,222,0.2)'
          : '0 4px 16px rgba(0,0,0,0.3)',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop: 8,
      }}
    >
      {loading ? (
        <>
          <span
            style={{
              width: 16,
              height: 16,
              borderRadius: '50%',
              border: `2px solid rgba(240,244,255,0.3)`,
              borderTopColor: C.white,
              display: 'inline-block',
              animation: 'sky-spin 0.8s linear infinite',
            }}
          />
          Processing…
        </>
      ) : (
        label
      )}
    </button>
  );
}

function Success({ type, onClose }: { type: ModalType; onClose: () => void }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ position: 'relative', width: 100, height: 100, margin: '0 auto 32px' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1B2A6B, #5DF0DE)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 40,
            boxShadow: '0 0 40px rgba(93,240,222,0.3)',
          }}
        >
          🚀
        </div>
        <div
          style={{
            position: 'absolute',
            inset: -12,
            borderRadius: '50%',
            border: `1px solid ${C.cyanBorder}`,
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
              background: C.cyan,
              boxShadow: `0 0 8px ${C.cyan}`,
            }}
          />
        </div>
      </div>

      <h3 style={{ fontSize: 22, fontWeight: 800, color: C.white, marginBottom: 8 }}>
        {type === 'individual' ? 'Application Received!' : 'Partnership Request Sent!'}
      </h3>
      <p
        style={{
          fontSize: 13,
          color: C.cyan,
          fontWeight: 600,
          letterSpacing: '0.08em',
          marginBottom: 12,
        }}
      >
        {type === 'individual'
          ? 'Welcome to the AfroSpace family ✦'
          : 'Your school is on the launchpad ✦'}
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
        Our team will review your {type === 'individual' ? 'application' : 'request'} and
        reach out within <strong style={{ color: C.cyan }}>2–3 business days</strong>. Get
        ready for liftoff!
      </p>
      <button
        onClick={onClose}
        style={{
          padding: '12px 36px',
          background: 'linear-gradient(135deg, #1B2A6B, rgba(93,240,222,0.7))',
          border: 'none',
          borderRadius: 10,
          color: C.white,
          fontSize: 14,
          fontWeight: 700,
          fontFamily: 'inherit',
          cursor: 'pointer',
        }}
      >
        Close
      </button>
    </div>
  );
}

function IndividualForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<IndividualForm>({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    country: '',
    program: '',
  });

  const [errors, setErrors] = useState<Partial<IndividualForm>>({});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const set =
    (k: keyof IndividualForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const e: Partial<IndividualForm> = {};
    if (!form.fullName.trim()) e.fullName = 'Please enter your full name';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      e.email = 'Enter a valid email address';
    }
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.dob) e.dob = 'Date of birth is required';
    if (!form.country) e.country = 'Please select a country';
    if (!form.program) e.program = 'Please select a program';

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

  if (done) return <Success type="individual" onClose={onClose} />;

  return (
    <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            flexShrink: 0,
            background: 'linear-gradient(135deg, #1B2A6B, #5DF0DE)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            boxShadow: '0 4px 16px rgba(93,240,222,0.2)',
          }}
        >
          👨‍🚀
        </div>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: C.white, marginBottom: 2 }}>
            Individual Registration
          </h2>
          <p style={{ fontSize: 11, color: C.cyan, letterSpacing: '0.12em', opacity: 0.8 }}>
            SKY ACADEMY — STUDENT ENROLMENT
          </p>
        </div>
      </div>

      <Divider label="Personal Details" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
        <Field label="Full Name" error={errors.fullName}>
          <SInput
            placeholder="e.g. Amara Okafor"
            value={form.fullName}
            onChange={set('fullName')}
            error={!!errors.fullName}
          />
        </Field>
        <Field label="Date of Birth" error={errors.dob}>
          <SInput
            type="date"
            value={form.dob}
            onChange={set('dob')}
            error={!!errors.dob}
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
        <Divider label="Your Program" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
        <Field label="Country" error={errors.country}>
          <Dropdown
            value={form.country}
            onChange={(v) => setForm((f) => ({ ...f, country: v }))}
            placeholder="Select country…"
            error={!!errors.country}
            options={COUNTRIES.map((c) => ({ label: c, value: c }))}
          />
        </Field>
        <Field label="Program of Interest" error={errors.program}>
          <Dropdown
            value={form.program}
            onChange={(v) => setForm((f) => ({ ...f, program: v }))}
            placeholder="Select program…"
            error={!!errors.program}
            options={INDIVIDUAL_PROGRAMS.map((p) => ({ label: p, value: p }))}
          />
        </Field>
      </div>

      <div style={{ marginTop: 24 }}>
        <SubmitBtn
          loading={loading}
          label="🚀 Submit Application"
          gradient="linear-gradient(135deg, #1B2A6B 0%, #2a4a9a 50%, rgba(93,240,222,0.6) 100%)"
        />
      </div>
    </form>
  );
}

function SchoolForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<SchoolForm>({
    schoolName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    studentCount: '',
    program: '',
  });

  const [errors, setErrors] = useState<Partial<SchoolForm>>({});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const set =
    (k: keyof SchoolForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const e: Partial<SchoolForm> = {};
    if (!form.schoolName.trim()) e.schoolName = 'School name is required';
    if (!form.contactName.trim()) e.contactName = 'Contact name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      e.email = 'Enter a valid email address';
    }
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.country) e.country = 'Please select a country';
    if (!form.studentCount) e.studentCount = 'Please select a range';
    if (!form.program) e.program = 'Please select a program';

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

  if (done) return <Success type="school" onClose={onClose} />;

  return (
    <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            flexShrink: 0,
            background: 'linear-gradient(135deg, #7B5EA7, #1B2A6B)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            boxShadow: '0 4px 16px rgba(123,94,167,0.3)',
          }}
        >
          🏫
        </div>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: C.white, marginBottom: 2 }}>
            School Registration
          </h2>
          <p style={{ fontSize: 11, color: C.cyan, letterSpacing: '0.12em', opacity: 0.8 }}>
            SKY ACADEMY — INSTITUTIONAL PARTNERSHIP
          </p>
        </div>
      </div>

      <Divider label="School Details" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
        <Field label="School Name" error={errors.schoolName}>
          <SInput
            placeholder="e.g. Greenfield Academy"
            value={form.schoolName}
            onChange={set('schoolName')}
            error={!!errors.schoolName}
          />
        </Field>
        <Field label="Contact Person" error={errors.contactName}>
          <SInput
            placeholder="Principal / STEM Coordinator"
            value={form.contactName}
            onChange={set('contactName')}
            error={!!errors.contactName}
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
            placeholder="school@example.com"
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
        <Divider label="Program Details" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
        <Field label="Country" error={errors.country}>
          <Dropdown
            value={form.country}
            onChange={(v) => setForm((f) => ({ ...f, country: v }))}
            placeholder="Select country…"
            error={!!errors.country}
            options={COUNTRIES.map((c) => ({ label: c, value: c }))}
          />
        </Field>
        <Field label="No. of Students" error={errors.studentCount}>
          <Dropdown
            value={form.studentCount}
            onChange={(v) => setForm((f) => ({ ...f, studentCount: v }))}
            placeholder="Select range…"
            error={!!errors.studentCount}
            options={['1–30', '31–100', '101–300', '301–500', '500+'].map((r) => ({
              label: r,
              value: r,
            }))}
          />
        </Field>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, marginTop: 16 }}>
        <Field label="Program of Interest" error={errors.program}>
          <Dropdown
            value={form.program}
            onChange={(v) => setForm((f) => ({ ...f, program: v }))}
            placeholder="Select program…"
            error={!!errors.program}
            options={SCHOOL_PROGRAMS.map((p) => ({ label: p, value: p }))}
          />
        </Field>
      </div>

      <div style={{ marginTop: 24 }}>
        <SubmitBtn
          loading={loading}
          label="🤝 Register Our School"
          gradient="linear-gradient(135deg, #7B5EA7 0%, #3a2a7a 50%, #1B2A6B 100%)"
        />
      </div>
    </form>
  );
}

function Modal({ type, onClose }: { type: ModalType; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <>
      <style>{`
        @keyframes sky-spin { to { transform: rotate(360deg); } }
        @keyframes sky-orbit { to { transform: rotate(360deg); } }
        @keyframes sky-fadein {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
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
            maxWidth: 680,
            maxHeight: 'none',
            borderRadius: 20,
            border: `1px solid ${C.cyanBorder}`,
            padding: '36px 36px 56px',
            boxShadow: `0 0 80px ${C.cyanGlow}, 0 30px 80px rgba(0,0,0,0.7)`,
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
                  'linear-gradient(135deg, rgba(4,8,32,0.88) 0%, rgba(8,14,48,0.82) 100%)',
                backdropFilter: 'blur(1px)',
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
              background: `linear-gradient(90deg, transparent, ${C.cyan}, transparent)`,
              opacity: 0.6,
              zIndex: 2,
            }}
          />

          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'rgba(93,240,222,0.12)',
              border: `1px solid ${C.cyanBorder}`,
              color: C.cyan,
              fontSize: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s',
              zIndex: 3,
            }}
          >
            ✕
          </button>

          <div style={{ position: 'relative', zIndex: 2 }}>
            {type === 'individual' && <IndividualForm onClose={onClose} />}
            {type === 'school' && <SchoolForm onClose={onClose} />}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

export default function RegistrationCTA() {
  const [modal, setModal] = useState<ModalType>(null);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => setModal('individual')}
          className="inline-block bg-protoverse-white text-nebula-blue font-bold py-4 px-10 rounded-lg hover:scale-105 transition-transform"
        >
          Register for Individual
        </button>

        <button
          onClick={() => setModal('school')}
          className="inline-block glass-effect border-2 border-protoverse-white font-bold py-4 px-10 rounded-lg hover:bg-protoverse-white hover:text-nebula-blue transition-all"
        >
          Register for School
        </button>
      </div>

      {modal && <Modal type={modal} onClose={() => setModal(null)} />}
    </>
  );
}