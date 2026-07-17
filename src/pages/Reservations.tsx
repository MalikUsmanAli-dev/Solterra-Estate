import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Reveal, { HorizonLine } from '../components/Reveal';
import { reservationSchema, INTERESTS, type ReservationFormValues } from '../lib/reservationSchema';
import estateImg from '../assets/images/story-villa-dusk.png';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Reservations() {
  const [status, setStatus] = useState<Status>('idle');
  const [accordionOpen, setAccordionOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: { interests: [], guests: 2 },
  });

  const selectedInterests = watch('interests') || [];

  function toggleInterest(value: (typeof INTERESTS)[number]) {
    const next = selectedInterests.includes(value)
      ? selectedInterests.filter((v) => v !== value)
      : [...selectedInterests, value];
    setValue('interests', next, { shouldValidate: true });
  }

  async function onSubmit(data: ReservationFormValues) {
    setStatus('loading');
    try {
      // Configure with your own EmailJS service/template/public keys,
      // or swap this block for a Formspree POST request.
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, { ...data, interests: data.interests.join(', ') }, publicKey);
      } else {
        // No email service configured — simulate the round trip for demo purposes.
        await new Promise((res) => setTimeout(res, 1100));
      }
      setStatus('success');
      reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className="pt-24 md:pt-28">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-0 lg:grid-cols-2">
        {/* Left — image */}
        <div className="relative hidden min-h-[70vh] lg:block">
          <img src={estateImg} alt="Solterra Estate at dusk" className="sticky top-0 h-screen w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/60 via-transparent to-transparent" />
          <div className="absolute bottom-14 left-12 right-12">
            <span className="eyebrow text-[var(--color-gold-light)]">Solterra Estate</span>
            <p className="mt-4 max-w-sm font-serif-display text-2xl italic leading-relaxed text-[var(--color-ivory)]">
              "Every reservation begins with a conversation, not a form."
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="px-6 py-16 md:px-16 md:py-24">
          <Reveal>
            <span className="eyebrow">Reservations</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-3xl leading-tight md:text-5xl">Reserve Your Experience</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-[var(--color-charcoal)]/65">
              Allow us to create a memorable stay uniquely tailored to your preferences. A member of our
              concierge team will respond within one business day.
            </p>
          </Reveal>

          <HorizonLine className="my-10 max-w-[220px]" />

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-sm border border-[var(--color-gold)]/40 bg-[var(--color-champagne)]/25 p-8"
              >
                <h3 className="font-display text-2xl text-[var(--color-charcoal)]">Request received.</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[var(--color-charcoal)]/70">
                  Thank you for reaching out to Solterra Estate. Our concierge team will be in touch shortly
                  to confirm availability and finalize the details of your stay.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-[0.72rem] tracking-[0.2em] uppercase text-[var(--color-terra)]"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-7"
                noValidate
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="First Name *" error={errors.firstName?.message}>
                    <input {...register('firstName')} className={inputClass} />
                  </Field>
                  <Field label="Last Name *" error={errors.lastName?.message}>
                    <input {...register('lastName')} className={inputClass} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Email *" error={errors.email?.message}>
                    <input type="email" {...register('email')} className={inputClass} />
                  </Field>
                  <Field label="Phone (Optional)">
                    <input type="tel" {...register('phone')} className={inputClass} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <Field label="Arrival Date *" error={errors.arrivalDate?.message}>
                    <input type="date" {...register('arrivalDate')} className={inputClass} />
                  </Field>
                  <Field label="Departure Date *" error={errors.departureDate?.message}>
                    <input type="date" {...register('departureDate')} className={inputClass} />
                  </Field>
                  <Field label="Guests *" error={errors.guests?.message}>
                    <input type="number" min={1} max={20} {...register('guests', { valueAsNumber: true })} className={inputClass} />
                  </Field>
                </div>

                <div>
                  <span className="mb-3 block text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-charcoal)]/70">
                    Interested In *
                  </span>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {INTERESTS.map((interest) => (
                      <label key={interest} className="flex cursor-pointer items-center gap-3 text-sm font-light text-[var(--color-charcoal)]/80">
                        <input
                          type="checkbox"
                          checked={selectedInterests.includes(interest)}
                          onChange={() => toggleInterest(interest)}
                          className="h-4 w-4 accent-[var(--color-terra)]"
                        />
                        {interest}
                      </label>
                    ))}
                  </div>
                  {errors.interests && <p className="mt-2 text-xs text-[var(--color-terra)]">{errors.interests.message as string}</p>}
                </div>

                <Field label="Special Requests">
                  <textarea rows={4} {...register('specialRequests')} className={inputClass} />
                </Field>

                {/* Optional preferences accordion */}
                <div className="border-t border-[var(--color-charcoal)]/15 pt-6">
                  <button
                    type="button"
                    onClick={() => setAccordionOpen((o) => !o)}
                    className="flex w-full items-center justify-between text-left"
                    data-cursor-hover
                  >
                    <span className="text-[0.72rem] tracking-[0.2em] uppercase text-[var(--color-charcoal)]/70">
                      Additional Preferences
                    </span>
                    <motion.span animate={{ rotate: accordionOpen ? 45 : 0 }} className="text-xl text-[var(--color-terra)]">
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {accordionOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2">
                          <Field label="Budget Range">
                            <input {...register('budgetRange')} placeholder="e.g. €2,000–4,000 / night" className={inputClass} />
                          </Field>
                          <Field label="Preferred Accommodation">
                            <input {...register('preferredAccommodation')} placeholder="e.g. Cliffside Villa" className={inputClass} />
                          </Field>
                          <Field label="Celebration Occasion">
                            <input {...register('occasion')} placeholder="e.g. Anniversary" className={inputClass} />
                          </Field>
                          <Field label="Dietary Preferences">
                            <input {...register('dietary')} placeholder="e.g. Vegetarian" className={inputClass} />
                          </Field>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-700">Something went wrong sending your request. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  data-cursor-hover
                  className="inline-flex items-center gap-3 bg-[var(--color-charcoal)] px-9 py-4 text-[0.72rem] tracking-[0.24em] uppercase text-[var(--color-ivory)] transition-colors duration-500 hover:bg-[var(--color-terra)] disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending…' : 'Request Availability →'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const inputClass =
  'w-full border-b border-[var(--color-charcoal)]/25 bg-transparent py-2.5 text-sm font-light text-[var(--color-charcoal)] focus:border-[var(--color-terra)] focus:outline-none';

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-charcoal)]/70">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-[var(--color-terra)]">{error}</span>}
    </label>
  );
}
