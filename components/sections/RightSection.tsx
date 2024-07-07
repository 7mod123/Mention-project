import Image from "next/image";
import rightContentImage from "@/public/images/Right Content.png";
import logoImage from "@/public/images/LogoM.png";

export default function RightSection() {
  return (
    <section className="relative hidden h-screen w-full items-end justify-center lg:flex">
      <Image
        src={rightContentImage}
        alt="Empowering Customer Relationships"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute bottom-60 left-20 z-20">
        <Image
          src={logoImage}
          alt="Logo"
          width={200}
          height={55}
        />
      </div>
      <div className="relative z-10 mb-8 ml-10 p-6 text-center">
        <h2 className="text-2xl font-bold text-white">
          Empowering Customer Relationships
        </h2>
        <p className="mt-4 max-w-lg text-xl text-white">
          Build lasting connections and drive success with our innovative
          platform
        </p>
      </div>
    </section>
  );
}