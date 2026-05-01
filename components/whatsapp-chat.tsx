"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface MessageOption {
  key: string;
  translationKey: string;
  message: string;
}

export default function WhatsAppChat() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const PHONE_NUMBER = "243811496487";

  const messageOptions: MessageOption[] = [
    { key: "learnMore", translationKey: "learnMore", message: "I want to learn more about your projects." },
    { key: "scheduleMeeting", translationKey: "scheduleMeeting", message: "I want to schedule a meeting with your team." },
    { key: "support", translationKey: "support", message: "I want to support your initiatives." }
  ];

  // Close dialog when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Close dialog on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const toggleDialog = () => setIsOpen(prev => !prev);

  return (
    <div className="fixed bottom-6 left-6 z-50 sm:bottom-6 sm:left-6">
      {/* Chat Dialog */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10" />
          <div
            ref={dialogRef}
            className="
              absolute bottom-16 left-0 
              w-[90vw] sm:w-80
              max-w-[calc(100vw-1.5rem)]
              bg-white rounded-2xl shadow-2xl border border-gray-100
              animate-in slide-in-from-bottom-2 duration-200
              overflow-hidden
            "
            role="dialog"
            aria-labelledby="chat-dialog-title"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-green-50 border-b border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 id="chat-dialog-title" className="font-semibold text-gray-900">
                    {t("whatsapp.startChat") || "Start a conversation"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t("whatsapp.chooseOption") || "Choose a quick message"}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleDialog}
                className="p-1 rounded-full hover:bg-green-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Message Options */}
            <div className="p-4 space-y-3">
              {messageOptions.map(option => (
                <button
                  key={option.key}
                  onClick={() => openWhatsApp(t(option.translationKey) || option.message)}
                  className="w-full p-3 text-left rounded-xl bg-gray-50 hover:bg-green-50 border border-transparent hover:border-green-200 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 group-hover:text-green-800">
                      {t(option.translationKey) || option.message}
                    </span>
                    <Send className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 pb-4">
              <p className="text-xs text-gray-500 text-center">
                {t("whatsapp.poweredBy") || "Powered by WhatsApp"}
              </p>
            </div>
          </div>
        </>
      )}

      {/* Floating Action Button */}
      <button
        onClick={toggleDialog}
        className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/30 active:scale-95"
        aria-label={isOpen ? "Close chat options" : "Open WhatsApp chat"}
        aria-expanded={isOpen}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <MessageCircle
            className={`w-6 h-6 transition-transform duration-200 ${isOpen ? "rotate-12 scale-90" : "rotate-0 scale-100"}`}
          />
        </div>

        {!isOpen && <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />}

        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          {t("whatsapp.chat") || "Chat with us"}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </div>
      </button>
    </div>
  );
}
