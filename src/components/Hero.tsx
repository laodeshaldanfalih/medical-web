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
          <h1 className="text-4xl font-bold mb-6 animate-fadein">
            Layanan Kesehatan THT dan Terapi Komprehensif di Hear Speech Care
          </h1>
          <p className="text-lg mb-8 animate-fadein">
            Selamat datang di{" "}
            <span className="font-bold">Hear Speech Care</span>, klinik
            terpercaya yang mengutamakan kesehatan Anda! Kami menyediakan
            layanan lengkap mulai dari pemeriksaan spesialis THT (Telinga,
            Hidung, Tenggorokan), hingga terapi wicara, terapi okupasi, dan
            terapi perilaku yang disesuaikan dengan kebutuhan Anda. Dengan
            apotek yang tersedia di tempat, kami memastikan Anda mendapatkan
            kemudahan akses untuk semua kebutuhan perawatan dan obat. Di{" "}
            <span className="font-bold">Hear Speech Care</span>, kesehatan dan
            kenyamanan Anda adalah prioritas utama kami!
          </p>
          <div className="flex space-x-4 animate-fadein">
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
