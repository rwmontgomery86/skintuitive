"use client";

import { useState, type FormEvent } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire to client's email provider (Resend / Mailchimp / etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="newsletter">
        <p className="newsletter__note">Thanks — we&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <form className="newsletter" onSubmit={onSubmit}>
      <div className="newsletter__row">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@email.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </div>
      <p className="newsletter__note">Occasional notes from Marley. No spam.</p>
    </form>
  );
}
