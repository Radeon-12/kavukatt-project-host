"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type InterventionType = "testimonials" | "prayer" | "intentions";

const interventionOptions: {
  id: InterventionType;
  label: string;
  description: string;
  selectedBorder: string;
  selectedBg: string;
  idleBorder: string;
}[] = [
  {
    id: "testimonials",
    label: "Testimonials",
    description: "Share your faith journey",
    selectedBorder: "border-blue-400",
    selectedBg: "bg-blue-50/80",
    idleBorder: "border-stone-200",
  },
  {
    id: "prayer",
    label: "Prayer Requests",
    description: "Request prayers from our community",
    selectedBorder: "border-stone-300",
    selectedBg: "bg-stone-50/80",
    idleBorder: "border-stone-200",
  },
  {
    id: "intentions",
    label: "Intentions",
    description: "Share your spiritual intentions",
    selectedBorder: "border-pink-300",
    selectedBg: "bg-pink-50/60",
    idleBorder: "border-stone-200",
  },
];

const MAX_MESSAGE_LENGTH = 1000;

type PublicInterventionsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: InterventionType;
};

export function PublicInterventionsModal({
  isOpen,
  onClose,
  defaultType = "prayer",
}: PublicInterventionsModalProps) {
  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <PublicInterventionsModalPanel
      defaultType={defaultType}
      onClose={onClose}
    />,
    document.body
  );
}

function PublicInterventionsModalPanel({
  onClose,
  defaultType,
}: {
  onClose: () => void;
  defaultType: InterventionType;
}) {
  const [type, setType] = useState<InterventionType>(defaultType);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const resetForm = () => {
    setType(defaultType);
    setName("");
    setAddress("");
    setMessage("");
    setSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="public-interventions-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/55"
        onClick={handleClose}
      >
          <motion.div
            initial={{ scale: 0.96, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[min(90vh,720px)] overflow-y-auto relative my-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="public-interventions-title"
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-600 transition-colors cursor-pointer z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="px-6 sm:px-8 pt-8 pb-6 sm:pb-8">
              <header className="text-center mb-6 sm:mb-8 pr-6">
                <h2
                  id="public-interventions-title"
                  className="font-playfair font-bold text-xl sm:text-2xl text-[#1A1A1A]"
                >
                  Public Interventions
                </h2>
                <p className="font-inter text-sm text-stone-500 mt-2 leading-relaxed">
                  Share your testimonials, prayer requests, or intentions with
                  our faith community.
                </p>
              </header>

              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <p className="font-playfair font-bold text-lg text-[#6D1414]">
                    Thank you for sharing
                  </p>
                  <p className="font-inter text-sm text-stone-500">
                    Your submission has been received.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <fieldset className="space-y-3 border-0 p-0 m-0">
                    <legend className="font-inter font-semibold text-sm text-[#1A1A1A] mb-1 block w-full">
                      Choose Intervention Type
                    </legend>
                    {interventionOptions.map((option) => {
                      const selected = type === option.id;
                      return (
                        <label
                          key={option.id}
                          className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                            selected
                              ? `${option.selectedBorder} ${option.selectedBg}`
                              : `${option.idleBorder} bg-white hover:border-stone-300`
                          }`}
                        >
                          <input
                            type="radio"
                            name="intervention-type"
                            value={option.id}
                            checked={selected}
                            onChange={() => setType(option.id)}
                            className="mt-0.5 w-4 h-4 accent-[#6D1414] shrink-0"
                          />
                          <span>
                            <span className="font-inter font-semibold text-sm text-[#1A1A1A] block">
                              {option.label}
                            </span>
                            <span className="font-inter text-xs text-stone-500 mt-0.5 block">
                              {option.description}
                            </span>
                          </span>
                        </label>
                      );
                    })}
                  </fieldset>

                  <div>
                    <label
                      htmlFor="intervention-name"
                      className="font-inter font-semibold text-sm text-[#1A1A1A] block mb-2"
                    >
                      Your Name{" "}
                      <span className="text-red-500" aria-hidden>
                        *
                      </span>
                    </label>
                    <input
                      id="intervention-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-stone-400 outline-none focus:border-[#6D1414] focus:ring-1 focus:ring-[#6D1414]/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="intervention-address"
                      className="font-inter font-semibold text-sm text-[#1A1A1A] block mb-2"
                    >
                      Address{" "}
                      <span className="font-normal text-stone-400">
                        (Optional)
                      </span>
                    </label>
                    <input
                      id="intervention-address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your address"
                      className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-stone-400 outline-none focus:border-[#6D1414] focus:ring-1 focus:ring-[#6D1414]/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="intervention-message"
                      className="font-inter font-semibold text-sm text-[#1A1A1A] block mb-2"
                    >
                      Your Message{" "}
                      <span className="text-red-500" aria-hidden>
                        *
                      </span>
                    </label>
                    <textarea
                      id="intervention-message"
                      required
                      rows={5}
                      value={message}
                      maxLength={MAX_MESSAGE_LENGTH}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your thoughts, prayers, or intentions..."
                      className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-stone-400 outline-none focus:border-[#6D1414] focus:ring-1 focus:ring-[#6D1414]/30 resize-none"
                    />
                    <p className="font-inter text-xs text-stone-400 mt-1.5">
                      {message.length}/{MAX_MESSAGE_LENGTH} characters
                    </p>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="flex-1 py-3 rounded-xl border border-stone-200 bg-white text-[#1A1A1A] font-inter font-semibold text-sm hover:bg-stone-50 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-[#6D1414] text-white font-inter font-semibold text-sm hover:bg-[#5A1010] transition-colors cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
    </AnimatePresence>
  );
}
