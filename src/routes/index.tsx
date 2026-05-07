import "../styles/hero.css";
import BlueprintHero from "../components/sections/BlueprintHero";
import HowItWorks from "../components/sections/HowItWorks";
import ArchitectureDiagram from "../components/sections/ArchitectureDiagram";
import Features from "../components/sections/Features";
import CTA from "../components/sections/CTA";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Teploy - Deploy. Observe. Build. Own your stack.",
  };
}

export default function Home() {
  return (
    <>
      <BlueprintHero />
      <HowItWorks />
      <ArchitectureDiagram />
      <Features />
      <CTA />
    </>
  );
}
