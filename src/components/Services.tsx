import { FaPills, FaUserMd, FaClinicMedical, FaTruck } from "react-icons/fa";

const services = [
  {
    icon: <FaPills className="w-12 h-12" />,
    title: "Apotek Lengkap",
    description:
      "Menyediakan berbagai macam obat berkualitas dengan harga terjangkau dan berlisensi resmi.",
  },
  {
    icon: <FaUserMd className="w-12 h-12" />,
    title: "Layanan Terapi",
    description:
      "Tim terapis profesional kami siap memberikan pelayanan terapi sesuai kebutuhan Anda.",
  },
  {
    icon: <FaClinicMedical className="w-12 h-12" />,
    title: "Konsultasi Kesehatan",
    description:
      "Konsultasi dengan apoteker dan terapis berpengalaman untuk solusi kesehatan terbaik.",
  },
  {
    icon: <FaTruck className="w-12 h-12" />,
    title: "Pengantaran Obat",
    description: "Layanan pengantaran obat cepat dan aman ke lokasi Anda.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MedicA menyediakan berbagai layanan kesehatan terpadu untuk memenuhi
            kebutuhan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
