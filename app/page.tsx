import { PendingContextProvider } from "@/context/pending";
import SectionDivider from "./components/Divider";
import About from "./components/about";
import Contact from "./components/contactForm";
import Experience from "./components/experience";
import Footer from "./components/footer";
import { Intro } from "./components/intro";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <PendingContextProvider>
        <Contact />
      </PendingContextProvider>
      <Footer />
    </main>
  );
}
