import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami siap melayani Anda. Hubungi kami melalui berbagai channel
            komunikasi berikut
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Alamat</h3>
                <p className="text-gray-600">
                  Jl. Contoh No. 123, Kota, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Telepon</h3>
                <p className="text-gray-600">+62 123 4567 890</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                <p className="text-gray-600">info@medica.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Sosial Media
            </h3>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition duration-300"
            >
              <FaWhatsapp className="w-8 h-8" />
              <span>Chat WhatsApp</span>
            </a>

            <a
              href="https://instagram.com/medica"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-pink-600 transition duration-300"
            >
              <FaInstagram className="w-8 h-8" />
              <span>Follow Instagram</span>
            </a>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">
                Jam Operasional
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>Senin - Jumat: 08:00 - 21:00</p>
                <p>Sabtu: 09:00 - 20:00</p>
                <p>Minggu: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
