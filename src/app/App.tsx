"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LifeLegacySection } from "./components/LifeLegacySection";
import { GallerySection } from "./components/GallerySection";
import { VideosSection } from "./components/VideosSection";
import { PrayerForCanonizationSection } from "./components/PrayerForCanonizationSection";
import { VisitMuseum } from "./components/VisitMuseum";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// Modal Content Components
import { LifeTimeline } from "./components/LifeTimeline";
import { Leadership } from "./components/Leadership";
import { ScrollToTop } from "./components/ScrollToTop";
import { PublicInterventionsModal } from "./components/PublicInterventionsModal";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#2B1606]/95 z-[200] flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ duration: 0.35 }}
            className="bg-[#FFF4D2] border border-[#D99A20]/40 rounded-[16px] shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-10 relative group"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Design inner border */}
            <div className="absolute inset-2.5 border border-[#D99A20]/15 rounded-[12px] pointer-events-none" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full border border-[#D99A20]/40 flex items-center justify-center text-[#B87910] hover:bg-[#6D1414] hover:text-white hover:border-[#6D1414] transition-all cursor-pointer z-50"
            >
              <X size={16} />
            </button>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8 space-y-2">
                <span className="text-[#B87910] text-xs font-cinzel font-bold tracking-[0.25em] uppercase block">
                  Archive / Details
                </span>
                <h2 className="text-[#6D1414] font-cinzel font-bold text-2xl md:text-3xl uppercase tracking-wider">
                  {title}
                </h2>
                <div className="h-[0.5px] w-20 bg-[#D99A20]/40 mx-auto" />
              </div>

              {/* Main Content */}
              <div className="mt-4">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [biographyOpen, setBiographyOpen] = useState(false);
  const [leadershipOpen, setLeadershipOpen] = useState(false);
  const [prayerModalOpen, setPrayerModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    requestAnimationFrame(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    });
  }, []);

  return (
    <div className="min-h-screen text-[#2A1608] font-sans relative">
      {/* Header Navigation */}
      <Navbar
        onOpenTimeline={() => setTimelineOpen(true)}
        onOpenBiography={() => setBiographyOpen(true)}
        onOpenLeadership={() => setLeadershipOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <LifeLegacySection />
        <GallerySection />
        <VideosSection />
        <PrayerForCanonizationSection />
        <VisitMuseum />
        <Contact onOpenPrayerRequest={() => setPrayerModalOpen(true)} />
      </main>

      {/* Footer Details */}
      <Footer
        onOpenTimeline={() => setTimelineOpen(true)}
        onOpenBiography={() => setBiographyOpen(true)}
        onOpenLeadership={() => setLeadershipOpen(true)}
      />

      <ScrollToTop />

      {/* 1. Life Journey Timeline Modal (from Hero discovery button) */}
      <Modal
        isOpen={timelineOpen}
        onClose={() => setTimelineOpen(false)}
        title="Journey Through Time"
      >
        <div className="py-2">
          <p className="font-lora text-stone-600 text-center text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Follow the historic path and milestones that marked the holy life, ecclesiastical leadership, and lasting legacy of Mar Mathew Kavukatt.
          </p>
          <LifeTimeline />
        </div>
      </Modal>

      {/* 2. Archbishop Biography Modal */}
      <Modal
        isOpen={biographyOpen}
        onClose={() => setBiographyOpen(false)}
        title="Archbishop Biography"
      >
        <div className="space-y-8 font-lora text-[#2A1608] leading-relaxed text-base sm:text-lg">
          <p className="text-center font-cormorant italic text-stone-500 max-w-xl mx-auto border-b border-[#D99A20]/20 pb-4">
            &ldquo;Caritate Servire&rdquo; — To Serve With Love. The complete history of the first Archbishop of Changanacherry.
          </p>

          <div className="space-y-6">
            <div>
              <span className="text-[#B87910] font-cinzel text-[0.7rem] uppercase tracking-[0.25em] font-bold block mb-1">
                Part I
              </span>
              <h4 className="font-cinzel text-lg font-bold text-[#6D1414] uppercase tracking-wider">
                Early Life & Vocation
              </h4>
              <p className="mt-2 text-justify">
                <span className="float-left text-5xl font-cinzel font-bold text-[#6D1414] mr-3 mt-1 leading-[0.8] select-none">M</span>
                ar Mathew Kavukatt (1904–1969) was a pioneering leader of the Syro-Malabar Church and the first Archbishop of Changanacherry. Born on 17 July 1904 in Pravithanam, near Palai, he was the son of Chummar and Tresa of the Kavukatt family.
              </p>
              <p className="mt-3 text-justify">
                He responded to his call to priesthood, entering St. Thomas Minor Seminary, Kottayam, in 1928 and completing his formation at the Major Seminary in Aluva. He was ordained a priest on 21 December 1935 by Bishop Kalacherry. Over the next fifteen years, he served as a pastor, educator, and administrator.
              </p>
            </div>

            <div>
              <span className="text-[#B87910] font-cinzel text-[0.7rem] uppercase tracking-[0.25em] font-bold block mb-1">
                Part II
              </span>
              <h4 className="font-cinzel text-lg font-bold text-[#6D1414] uppercase tracking-wider">
                Episcopal Leadership & Ministry
              </h4>
              <p className="mt-2 text-justify">
                On 9 November 1950, he was consecrated as a bishop in Rome. He assumed leadership of the Diocese of Changanacherry on 3 January 1951, choosing the motto &ldquo;Caritate Servire&rdquo; (&ldquo;To serve with love&rdquo;). When the diocese was elevated to an archdiocese in 1956, he became its first Archbishop.
              </p>
              <p className="mt-3 text-justify">
                Archbishop Kavukatt played a significant role during a crucial period in Kerala&apos;s history, guiding the faithful during socio-political challenges and contributing to movements that protected the rights of minority communities.
              </p>
            </div>

            <div className="my-6 pl-5 border-l-2 border-[#D99A20] py-1 bg-[#FFFDF7] italic">
              &ldquo;Choosing the motto &lsquo;Caritate Servire&rsquo;—to serve with love—his leadership was defined by a profound concern for the marginalized, ensuring no one in need was left unattended.&rdquo;
            </div>

            <div>
              <span className="text-[#B87910] font-cinzel text-[0.7rem] uppercase tracking-[0.25em] font-bold block mb-1">
                Part III
              </span>
              <h4 className="font-cinzel text-lg font-bold text-[#6D1414] uppercase tracking-wider">
                Social Impact & Global Outreach
              </h4>
              <p className="mt-2 text-justify">
                Marking the silver jubilee of his priesthood, he encouraged initiatives for social welfare, especially housing projects for the poor. He also took active part in major events of the universal Church, including the Second Vatican Council and the Eucharistic Congress held in Bombay.
              </p>
            </div>

            <div>
              <span className="text-[#B87910] font-cinzel text-[0.7rem] uppercase tracking-[0.25em] font-bold block mb-1">
                Part IV
              </span>
              <h4 className="font-cinzel text-lg font-bold text-[#6D1414] uppercase tracking-wider">
                Eternal Legacy & Canonization
              </h4>
              <p className="mt-2 text-justify">
                He passed away on 9 October 1969. In recognition of his holy life and service, he was declared Servant of God on 25 September 1994, and his cause for canonization has been active since.
              </p>
            </div>
          </div>
        </div>
      </Modal>

      {/* 3. Leadership Modal */}
      <Modal
        isOpen={leadershipOpen}
        onClose={() => setLeadershipOpen(false)}
        title="Archdiocese Clergy Directory"
      >
        <Leadership />
      </Modal>

      <PublicInterventionsModal
        isOpen={prayerModalOpen}
        onClose={() => setPrayerModalOpen(false)}
        defaultType="prayer"
      />
    </div>
  );
}
