import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/medical-bg.jpg"
          alt="Medical Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Apotek & Praktek Dokter Terpercaya
          </h1>
          <p className="text-xl mb-8">
            Kami menyediakan layanan apotek lengkap, konsultasi medis dengan
            dokter umum maupun spesialis THT, serta berbagai layanan terapi yang
            ditangani oleh terapis profesional. Dapatkan obat-obatan
            berkualitas, penanganan kesehatan yang komprehensif, serta terapi
            pendukung seperti terapi bicara, okupasi, dan lainnya. Semuanya
            tersedia dalam satu tempat untuk menunjang pemulihan dan
            kesejahteraan Anda dan keluarga.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#contact"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition duration-300"
            >
              Hubungi Kami
            </Link>
            <Link
              href="#services"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-accent hover:border-accent transition duration-300"
            >
              Layanan Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
