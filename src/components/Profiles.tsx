import { FaUserMd, FaComments, FaBrain, FaClinicMedical } from "react-icons/fa";
import Image from "next/image";

const doctors = [
  {
    name: "Prof. Dr. Nyilo Purnami dr. SpTHTKL(K)",
    specialization: "Dokter Spesialis THT-BKL",
    image: "/images/dokter.png",
    icon: <FaUserMd className="w-20 h-20 text-primary" />,
  },
];

const therapists = [
  {
    name: "Terapis 1",
    field: "Terapis Bicara",
    image: "/images/terapis_bicara.png",
    icon: <FaComments className="w-20 h-20 text-accent" />,
  },
  {
    name: "Terapis 2",
    field: "Terapis Okupasi",
    image: "/images/terapis_okupasi.png",
    icon: <FaBrain className="w-20 h-20 text-accent" />,
  },
  {
    name: "Terapis 3",
    field: "Terapis Perilaku",
    image: "/images/terapis_perilaku.png",
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
              width={250}
              height={250}
              style={{ objectFit: "cover" }}
              className="rounded-full object-cover"
            />
          ) : (
            icon
          )}
        </div>
      </div>
    </div>
    <h4 className="text-2xl font-extrabold text-secondary mb-2 text-center drop-shadow-sm">
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
          <p className="text-primary max-w-2xl mx-auto">
            Kenali tim profesional kami yang siap membantu kebutuhan kesehatan
            Anda.
          </p>
        </div>
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-10">
            {doctors.map((doc, idx) => (
              <ProfileCard
                key={idx}
                icon={doc.icon}
                name={doc.name}
                badge={
                  <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-1 rounded-full text-sm shadow">
                    {doc.specialization}
                  </span>
                }
                image={doc.image}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center gap-10">
            {therapists.map((terapist, idx) => (
              <ProfileCard
                key={idx}
                icon={terapist.icon}
                name={terapist.name}
                badge={
                  <span className="inline-block bg-accent/10 text-accent font-semibold px-12 py-1 rounded-lg text-sm shadow">
                    {terapist.field}
                  </span>
                }
                image={terapist.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
