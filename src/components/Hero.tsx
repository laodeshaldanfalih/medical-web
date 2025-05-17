import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex items-center">
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
            Solusi Kesehatan Terpercaya
          </h1>
          <p className="text-xl mb-8">
            MedicA hadir sebagai one-stop solution untuk kebutuhan farmasi dan
            layanan terapi Anda. Dengan tenaga profesional dan produk
            berkualitas, kami berkomitmen untuk kesehatan Anda.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Hubungi Kami
            </Link>
            <Link
              href="#services"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
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
