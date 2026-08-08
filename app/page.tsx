import Hero from "@/components/Common/Hero";
import { HOME_HERO } from "@/lib/constants/home";

export default function Home() {
  return (
    <>
      <Hero {...HOME_HERO} />
    </>
  );
}
