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
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Hubungi Kami
          </h2>
          <p className="text-primary max-w-2xl mx-auto">
            Kami siap melayani Anda. Hubungi kami melalui berbagai channel
            komunikasi berikut
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-secondary mb-1">Alamat</h3>
                <p className="text-primary">
                  Jl. Pandugo Timur XIII No.B-2, Penjaringan Sari, Kec. Rungkut,
                  Surabaya, Jawa Timur 60297
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-secondary mb-1">Telepon</h3>
                <p className="text-primary">+62 815 5100 081</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-secondary mb-1">Email</h3>
                <p className="text-primary">hearspeechcare@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Sosial Media
            </h3>

            <a
              href="https://wa.me/628155100081"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-primary hover:text-accent transition duration-300"
            >
              <FaWhatsapp className="w-8 h-8" />
              <span>Chat WhatsApp</span>
            </a>

            <a
              href="https://www.instagram.com/hearspeechcare_surabaya?igsh=Z2phb3R2YzlpdHpn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-primary hover:text-accent transition duration-300"
            >
              <FaInstagram className="w-8 h-8" />
              <span>Follow Instagram</span>
            </a>

            <div className="mt-8 p-6 bg-white rounded-lg border border-primary/10">
              <h4 className="font-semibold text-secondary mb-2">
                Jam Operasional
              </h4>
              <div className="space-y-2 text-primary">
                <p>Senin - Jumat: 03:00 - 22:00</p>
                <p>Sabtu: 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
