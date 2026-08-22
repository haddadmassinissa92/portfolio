export default function Contact() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-zinc-100 dark:border-zinc-800">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-zinc-500 mb-10">
        Une opportunité, une question ? N&apos;hésitez pas à me contacter.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        
        <a 
            href="mailto:hmassinissa39@gmail.com"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
        >
            Email
        </a>
        
        <a href="https://github.com/haddadmassinissa92"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-black rounded-full font-medium"
        >
          GitHub
        </a>
        
        <a href="https://www.linkedin.com/in/haddad-massinissa-a11800301/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-black rounded-full font-medium"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}