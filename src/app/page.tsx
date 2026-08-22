import Header from "@/components/Header";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold">Haddad Massinissa</h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mt-4">Développeur Fullstack JavaScript</p>
        <p className="text-base text-zinc-400 dark:text-zinc-500 mt-6 max-w-md">
          Je conçois des applications web modernes avec React, Node.js et MongoDB.
        </p>

        <div className="flex gap-4 mt-8">
          
          <a 
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
          >
            Voir mes projets
          </a>
          
          <a  href="#contact"
            className="px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-full font-medium"
          >
            Me contacter
          </a>
        </div>
      </main>

      <Projects />
      <About />
      <Contact />

      <Footer />
    </>
  );
}