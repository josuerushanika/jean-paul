"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/use-translation";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, MapPin, Phone } from "lucide-react";

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold }
    );
    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [elementRef, isVisible] as const;
};

// Contact Info Item Component
const ContactItem = ({ icon: Icon, color, title, content, visible, delay }: any) => (
  <div
    className={`flex items-start gap-4 transition-all duration-700 hover:scale-105 hover:translate-x-2 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div
      className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:rotate-12 hover:scale-110`}
    >
      <Icon className={`w-6 h-6 text-${color}-600`} />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  </div>
);

export default function Contact() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mblayydz");
  const formRef = useRef<HTMLFormElement | null>(null);

  const [heroRef, heroVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  // Reset form after submit
  useEffect(() => {
    if (state.succeeded && formRef.current) formRef.current.reset();
  }, [state.succeeded]);

  const contactItems = [
    {
      icon: MapPin,
      color: "green",
      title: t("contact.office.title"),
      content: (
        <>
          {t("line1")} <br />
          {t("line2")} <br />
          {t("line3")} <br />
          {t("line4")}
        </>
      ),
    },
    {
      icon: Phone,
      color: "blue",
      title: t("contact.phone.title"),
      content: (
        <span>
          <a href="tel:+243842565659" className="hover:text-blue-600 transition-colors">
            +243 842 565 659
          </a>
          <br />
          <a href="tel:+243811496487" className="hover:text-blue-600 transition-colors">
            +243 811 496 487
          </a>
          <br />
          <a href="tel:+243974512343" className="hover:text-blue-600 transition-colors">
            +243 974 512 343
          </a>
        </span>
      ),
    },
    {
      icon: Mail,
      color: "purple",
      title: t("contact.email.title"),
      content: (
        <a
          href="https://wa.me/243811496487"
          className="hover:text-purple-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          +243 811 496 487
        </a>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/images/affe17.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <h1
            className={`text-5xl font-bold text-white mb-6 transition-all duration-1200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            {t("contact.title")}
          </h1>
          <p
            className={`text-xl text-gray-200 leading-relaxed transition-all duration-1000 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div
            className={`transition-all duration-1000 ${contactVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
          >
            <h2
              className={`text-3xl font-bold text-gray-900 mb-8 transition-all duration-800 delay-200 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              {t("contact.getInTouch")}
            </h2>

            <div className="space-y-8">
              {contactItems.map((item, i) => (
                <ContactItem key={i} {...item} visible={contactVisible} delay={i * 200 + 400} />
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className={`bg-gray-50 p-8 rounded-xl shadow-lg transition-all duration-1000 ${contactVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
              }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("contact.form.title")}
            </h2>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/mblayydz"
              method="POST"
              className="space-y-6"
            >
              {/* Name fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                {["firstName", "lastName"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      {t(`contact.form.${field}`)}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type="text"
                      placeholder={t(`contact.form.${field}.placeholder`)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <ValidationError prefix={field} field={field} errors={state.errors} />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("contact.form.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("contact.form.email.placeholder")}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("contact.form.phone")}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t("contact.form.phone.placeholder")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("contact.form.subject")}
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">{t("contact.form.subject.placeholder")}</option>
                  {["partnership", "biochar", "consulting", "projects", "investment", "other"].map(
                    (opt) => (
                      <option key={opt} value={opt}>
                        {t(`contact.form.subject.${opt}`)}
                      </option>
                    )
                  )}
                </select>
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder={t("contact.form.message.placeholder")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-105 disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : t("contact.form.send")}
              </button>

              {/* Success/Error */}
              {state.succeeded && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg animate-fade-in">
                  <p className="font-medium">{t("thank_you_title")}</p>
                  <p className="text-sm">{t("thank_you_subtitle")}</p>
                </div>

              )}
              {state.errors && Object.keys(state.errors).length > 0 && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">Please check the form and try again.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
