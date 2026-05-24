"use client";

import { useRef, useState, type FormEvent } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { services } from "@/content/services";
import { SuccessModal, type SuccessModalHandle } from "./SuccessModal";

const TIMESLOTS = [
  { id: "morning", label: "Morning", range: "9a – 12p" },
  { id: "afternoon", label: "Afternoon", range: "12p – 4p" },
  { id: "evening", label: "Evening", range: "4p – 7:30p" },
] as const;

type Slot = (typeof TIMESLOTS)[number]["id"];

export function BookForm() {
  const [slot, setSlot] = useState<Slot>("afternoon");
  const modalRef = useRef<SuccessModalHandle>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire to email/CRM backend (Resend/HubSpot) when client provides creds.
    modalRef.current?.open();
  }

  return (
    <>
      <form className="book-form" onSubmit={onSubmit} noValidate>
        <div className="book-form__head">
          <h3>Appointment request</h3>
          <span className="book-form__step">Step 1 of 1 · &lt; 2 min</span>
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="bf-name">Name<span className="req">*</span></label>
            <input id="bf-name" name="name" type="text" required placeholder="First & last name" autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="bf-phone">Phone<span className="req">*</span></label>
            <input id="bf-phone" name="phone" type="tel" required placeholder="(770) 555 — 0100" autoComplete="tel" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="bf-email">Email<span className="req">*</span></label>
          <input id="bf-email" name="email" type="email" required placeholder="you@email.com" autoComplete="email" />
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="bf-date">Preferred date</label>
            <input id="bf-date" name="date" type="date" />
          </div>
          <div className="field">
            <label htmlFor="bf-service">Service interest</label>
            <select id="bf-service" name="service" defaultValue="">
              <option value="">I&apos;m not sure — recommend</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>{s.title}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <label>Preferred time</label>
          <div className="timeslots" role="radiogroup" aria-label="Preferred time">
            {TIMESLOTS.map((t) => (
              <button
                key={t.id}
                type="button"
                className="timeslot"
                role="radio"
                aria-checked={slot === t.id}
                aria-pressed={slot === t.id}
                onClick={() => setSlot(t.id)}
              >
                <span className="timeslot__label">{t.label}</span>
                {t.range}
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <label htmlFor="bf-message">Anything we should know?</label>
          <textarea id="bf-message" name="message" placeholder="Goals, concerns, previous treatments, scheduling notes…" />
        </div>

        <div className="privacy">
          <strong>Privacy:</strong> Please do not share personal health information in this form. Appointments are confirmed by phone within one business day. By submitting you agree to be contacted at the number above.
        </div>

        <div className="submit-row">
          <span className="req-note">
            Required fields marked with <span>*</span>
          </span>
          <button className="btn btn--primary" type="submit">
            Send request
            <Arrow size={14} />
          </button>
        </div>
      </form>
      <SuccessModal ref={modalRef} />
    </>
  );
}
