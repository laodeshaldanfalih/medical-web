import Image from "next/image";
const Footer = () => (
  <footer className="bg-white border-t border-primary/10 py-6 mt-12">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
      <Image
        src="/logo.svg"
        alt="HCS Logo"
        width={200}
        height={200}
        className="h-10 w-auto mb-2 md:mb-0"
      />
      <span className="text-secondary text-sm font-semibold text-center">
        &copy; Hear Speech Care 2025
      </span>
    </div>
  </footer>
);

export default Footer;
