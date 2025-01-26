import Image from "next/image";
import hero from "../../public/hero.webp";

export default function Hero() {
  return (
    <section className="min-h-screen relative">
      <Image
        src={hero}
        alt="An ariel image of a housing estate"
        className="absolute top-0 left-0 object-cover w-full h-full"
      />
    </section>
  );
}
