import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <SmoothScroll>
      <Cursor />
      <Nav />
      <main className="relative overflow-hidden">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
