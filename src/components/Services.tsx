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
} from "react-icons/fa";

const clinicServices = [
  {
    icon: <FaUserMd className="w-10 h-10" />,
    title: "Dokter Spesialis THT-BKL",
    description:
      "Konsultasi dan penanganan masalah Telinga, Hidung, Tenggorokan, Bedah Kepala & Leher.",
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
      "Layanan terapi untuk membantu perkembangan bicara dan bahasa.",
  },
  {
    icon: <FaBrain className="w-10 h-10" />,
    title: "Terapi Okupasi",
    description: "Membantu meningkatkan kemampuan aktivitas sehari-hari.",
  },
  {
    icon: <FaClinicMedical className="w-10 h-10" />,
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
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Layanan Kami
          </h2>
          <p className="text-primary max-w-2xl mx-auto">
            Kami menyediakan layanan klinik spesialis, terapi, serta apotek dan
            praktek dokter umum untuk memenuhi kebutuhan kesehatan Anda.
          </p>
        </div>

        <div className="mb-12">
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
