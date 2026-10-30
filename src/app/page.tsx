import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { DocumentTitle } from "@/components/DocumentTitle";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OpenSource } from "@/components/OpenSource";
import { Projects } from "@/components/Projects";
import { SkipLink } from "@/components/SkipLink";
import { Writing } from "@/components/Writing";

export default function Home() {
  return (
    <>
      <DocumentTitle page="home" />
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="mx-auto max-w-6xl px-4 outline-none sm:px-6">
        <span id="top" />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OpenSource />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
