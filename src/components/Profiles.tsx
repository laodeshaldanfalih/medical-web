"use client";

import { FaUserMd, FaComments, FaBrain, FaClinicMedical } from "react-icons/fa";
import Image from "next/image";

const profiles = [
  {
    name: "Prof. Dr. Nyilo Purnami dr. SpTHTKL(K)",
    specialization: "Dokter Spesialis THT-BKL",
    image: "/images/dokter.png",
    icon: <FaUserMd className="w-20 h-20 text-primary" />,
  },
  {
    name: "Vanya Syifa Andrina, S.Psi",
    specialization: "Terapis Wicara",
    image: "/images/terapis_bicara.jpeg",
    icon: <FaComments className="w-20 h-20 text-accent" />,
  },
  {
    name: "Sri Lestari, Amd.OT",
    specialization: "Terapis Okupasi",
    image: "/images/terapis_okupasi.jpeg",
    icon: <FaBrain className="w-20 h-20 text-accent" />,
  },
  {
    name: "Vanya Syifa Andrina, S.Psi",
    specialization: "Terapis Perilaku",
    image: "/images/terapis_perilaku.jpeg",
    icon: <FaClinicMedical className="w-20 h-20 text-accent" />,
  },
];

const ProfileCard = ({
  icon,
  name,
  badge,
  image,
}: {
  icon: React.ReactNode;
  name: string;
  badge: React.ReactNode;
  image?: string;
}) => (
  <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center py-12 px-6 relative group">
    <div className="mb-4">
      <div className="rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 p-2 shadow-lg group-hover:scale-105 group-hover:shadow-accent/40 transition-transform duration-300">
        <div className="bg-grey rounded-full p-4 flex items-center justify-center shadow-md overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              className="rounded-full object-cover"
            />
          ) : (
            icon
          )}
        </div>
      </div>
    </div>
    <h4 className="text-md font-extrabold text-secondary mb-2 text-center drop-shadow-sm">
      {name}
    </h4>
    {badge}
  </div>
);

const Profiles = () => {
  return (
    <section
      id="profiles"
      className="py-20 bg-gradient-to-b from-white via-white to-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Profil Dokter & Terapis
          </h2>
          <p className="text-primary max-w-5xl mx-auto">
            Di <span className="font-bold">Hear Speech Care</span>, kami bangga
            memiliki tim medis yang terdiri dari dokter spesialis THT dan
            terapis profesional yang berpengalaman. Setiap anggota tim kami
            memiliki kualifikasi yang solid dan komitmen untuk memberikan
            perawatan terbaik bagi setiap pasien. Kami percaya bahwa perawatan
            yang efektif dimulai dari pemahaman yang mendalam tentang kebutuhan
            individu, dan tim kami siap memberikan dukungan yang penuh perhatian
            untuk membantu Anda mencapai kesehatan yang optimal.
          </p>
        </div>
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {profiles.map((profile, idx) => (
              <ProfileCard
                key={idx}
                icon={profile.icon}
                name={profile.name}
                badge={
                  <span className="inline-flex items-center justify-center bg-primary/10 text-primary font-semibold px-4 py-1 rounded-lg text-sm shadow">
                    {profile.specialization}
                  </span>
                }
                image={profile.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
