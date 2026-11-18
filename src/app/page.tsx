import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { DocumentTitle } from "@/components/DocumentTitle";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Homelab } from "@/components/Homelab";
import { Hero } from "@/components/Hero";
import { OpenSource } from "@/components/OpenSource";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { SkipLink } from "@/components/SkipLink";
import { Writing } from "@/components/Writing";
import { getArticles } from "@/content/articles";

// Refresh the dev.to article list once a day (keep in sync with ARTICLES_REVALIDATE).
export const revalidate = 86400;

export default async function Home() {
  const articles = await getArticles();
  return (
    <>
      <DocumentTitle page="home" />
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="mx-auto max-w-6xl px-4 outline-none sm:px-6">
        <span id="top" />
        <Hero articleCount={articles.length} />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Homelab />
        <OpenSource />
        <Writing articles={articles} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
