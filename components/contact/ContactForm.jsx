"use client";

import { useState } from "react";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";

export default function ContactForm({ orderDetails }) {
  const language = useAppStore((state) => state.language);
  const t = (key) => languageTranslate(language, key);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const defaultSubject = orderDetails?.product ? `${t("orderNow")} — ${orderDetails.product}` : "";

  function handleSubmit(e) {
    e.preventDefault();
    // No backend yet — front-end only, per spec. Wire this up to your
    // API route / email service when ready.
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="manifest-card p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center mx-auto mb-5">
          <i className="fa-solid fa-check text-xl"></i>
        </div>
        <h3 className="font-display text-2xl text-navy-950 mb-2">{t("formSuccessTitle")}</h3>
        <p className="text-sm text-[--ink-soft]">{t("formSuccessBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="manifest-card p-8">
      <h2 className="font-display text-2xl text-navy-950 mb-6">{t("sendInquiry")}</h2>

      {/* Hidden fields carrying order context — read these in your submit handler */}
      <input type="hidden" name="product" value={orderDetails?.product || ""} />
      <input type="hidden" name="product_code" value={orderDetails?.code || ""} />
      <input type="hidden" name="price" value={orderDetails?.price || ""} />
      <input type="hidden" name="discount" value={orderDetails?.discount || ""} />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={t("formFullName")} name="full_name" required />
        <Field label={t("formCompany")} name="company" />
        <Field label={t("formCountry")} name="country" required />
        <Field label={t("formEmail")} name="email" type="email" required />
        <Field label={t("formPhone")} name="phone" type="tel" />
        <Field label={t("formSubject")} name="subject" defaultValue={defaultSubject} />
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="block text-xs font-medium mb-2 uppercase tracking-wide text-[--ink-soft]"
        >
          {t("formMessage")}
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          placeholder={t("formMessagePlaceholder")}
          className="w-full px-4 py-3 rounded-lg border border-beige-200 bg-white text-sm focus:outline-none focus:border-gold-500"
        />
      </div>

      <button type="submit" className="btn btn-dark mt-7 w-full sm:w-auto justify-center">
        {t("sendInquiry")} <i className="fa-solid fa-paper-plane text-xs"></i>
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required = false, defaultValue }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium mb-2 uppercase tracking-wide text-[--ink-soft]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="w-full px-4 py-3 rounded-lg border border-beige-200 bg-white text-sm focus:outline-none focus:border-gold-500"
      />
    </div>
  );
}
