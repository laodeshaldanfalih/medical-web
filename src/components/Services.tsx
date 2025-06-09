"use client";

import {
  FaPills,
  FaUserMd,
  FaClinicMedical,
  FaStethoscope,
  FaNotesMedical,
  FaAssistiveListeningSystems,
  FaComments,
  FaBrain,
  FaTruck,
  FaFirstAid,
  FaHome,
  FaUserNurse,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const clinicServices = [
  {
    icon: <FaUserMd className="w-10 h-10" />,
    title: "Dokter Spesialis THT-BKL",
    description:
      "Konsultasi dan penanganan masalah Telinga, Hidung, dan Tenggorokan.",
  },
  {
    icon: <FaAssistiveListeningSystems className="w-10 h-10" />,
    title: "Tes Pendengaran (Audiometri, Tympanometri, OAE)",
    description: "Pemeriksaan pendengaran lengkap untuk segala usia.",
  },
  {
    icon: <FaComments className="w-10 h-10" />,
    title: "Terapi Bicara",
    description:
      "Layanan terapi untuk membantu individu mengatasi masalah komunikasi, bicara, dan bahasa pada anak-anak.",
  },
  {
    icon: <FaBrain className="w-10 h-10" />,
    title: "Terapi Okupasi",
    description:
      "Membantu anak dengan masalah fisik, sensorik, atau kognitif untuk mencapai kemandirian dalam aktivitas sehari-hari.",
  },
  {
    icon: <FaUserNurse className="w-10 h-10" />,
    title: "Terapi Perilaku",
    description: "Pendampingan dan terapi untuk perbaikan perilaku anak.",
  },
];

const generalServices = [
  {
    icon: <FaPills className="w-10 h-10" />,
    title: "Apotek Lengkap",
    description:
      "Obat bebas & resep, vitamin, alat kesehatan, dan konsultasi apoteker.",
  },
  {
    icon: <FaStethoscope className="w-10 h-10" />,
    title: "Praktek Dokter Umum",
    description:
      "Konsultasi kesehatan umum, pemeriksaan, dan pengobatan ringan.",
  },
  {
    icon: <FaNotesMedical className="w-10 h-10" />,
    title: "Pengisian Resep Dokter",
    description: "Layanan pengisian resep dari dokter dengan cepat dan akurat.",
  },
  {
    icon: <FaClinicMedical className="w-10 h-10" />,
    title: "Konsultasi Kesehatan Umum",
    description:
      "Konsultasi kesehatan untuk segala usia bersama dokter dan apoteker.",
  },
  {
    icon: <FaTruck className="w-10 h-10" />,
    title: "Jasa Antar Obat",
    description:
      "Layanan pengantaran obat ke rumah Anda dengan cepat dan aman.",
  },
  {
    icon: <FaFirstAid className="w-10 h-10" />,
    title: "Wound Care",
    description:
      "Perawatan luka profesional dengan peralatan steril dan tenaga medis terlatih.",
  },
  {
    icon: <FaHome className="w-10 h-10" />,
    title: "Home Visit",
    description:
      "Layanan kunjungan ke rumah untuk pemeriksaan kesehatan dan perawatan medis.",
  },
];

const therapySessions = [
  {
    image: "/images/terapi_session_1.jpeg",
    title: "Sesi Terapi 1",
  },
  {
    image: "/images/terapi_session_2.jpeg",
    title: "Sesi Terapi 2",
  },
  {
    image: "/images/terapi_session_3.jpeg",
    title: "Sesi Terapi 3",
  },
  {
    image: "/images/terpai_session_4.jpeg",
    title: "Sesi Terapi 4",
  },
  {
    image: "/images/terapi_session_5.jpeg",
    title: "Sesi Terapi 5",
  },
  {
    image: "/images/terapi_session_6.jpeg",
    title: "Sesi Terapi 6",
  },
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % therapySessions.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + therapySessions.length) % therapySessions.length
    );
  };

  // Autoscroll effect
  useEffect(() => {
    if (autoScrollRef.current) clearTimeout(autoScrollRef.current);
    autoScrollRef.current = setTimeout(() => {
      nextSlide();
    }, 10000);
    return () => {
      if (autoScrollRef.current) clearTimeout(autoScrollRef.current);
    };
  }, [currentSlide]);

  return (
    <section id="services" className="pb-20">
      {/* Therapy Session Carousel with Title Overlay - Full Width */}
      <div className="mb-20">
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative h-[600px] overflow-hidden">
            {therapySessions.map((session, idx) => (
              <div
                key={idx}
                className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${
                  idx === currentSlide
                    ? "opacity-100 translate-x-0"
                    : idx < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={session.image}
                    alt={session.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  {/* Title and Description Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70">
                    <div className="absolute top-1/4 left-0 right-0 text-center px-4">
                      <h2 className="text-5xl font-bold text-white mb-6 animate-fadein">
                        Layanan Kami
                      </h2>
                      <p className="text-white/90 text-xl max-w-2xl mx-auto animate-fadein">
                        Kami menyediakan layanan klinik spesialis, terapi
                        komprehensif, dan apotek untuk memenuhi kebutuhan
                        kesehatan Anda. Kami siap melayani Anda secara
                        profesional.
                      </p>
                    </div>
                  </div>
                  {/* Navigation Buttons - inside image, transparent by default */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/0 hover:bg-white/80 text-secondary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-white/30"
                    aria-label="Previous slide"
                    style={{ zIndex: 10 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/0 hover:bg-white/80 text-secondary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-white/30"
                    aria-label="Next slide"
                    style={{ zIndex: 10 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                  {/* Dots Indicator - inside image, bottom center */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                    {therapySessions.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none border-0 ${
                          idx === currentSlide
                            ? "bg-accent/20"
                            : "bg-primary/30"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                        style={{
                          boxShadow:
                            idx === currentSlide ? "0 0 0 2px #fff" : undefined,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Services Sections with Container */}
      <div className="container mx-auto px-4">
        {/* Clinic Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary mb-6 text-left">
            Layanan Klinik
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-primary/10 hover:border-accent"
              >
                <div className="text-accent mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  {service.title}
                </h4>
                <p className="text-primary mb-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* General Services */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-6 text-left">
            Layanan Apotek & Umum
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-primary/10 hover:border-accent"
              >
                <div className="text-accent mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  {service.title}
                </h4>
                <p className="text-primary mb-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
