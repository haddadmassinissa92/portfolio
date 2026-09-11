import Image from "next/image";

const projects = [
  {
    title: "ProShop",
    image: "/projects/proshop.png",
    description:
      "Plateforme e-commerce MERN complète pour le marché algérien : panier, commandes, paiement à la livraison, assistant d'achat IA, tests automatisés et CI/CD.",
    stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    demo: "https://proshop-peach.vercel.app",
    code: "https://github.com/haddadmassinissa92/proshop",
  },
  {
    title: "PladiChat",
    image: "/projects/pladichat.png",
    description:
      "Application de messagerie temps réel type WhatsApp/Messenger : appels audio/vidéo WebRTC (privés et de groupe), messages éphémères et programmés, listes de diffusion, notifications push et une trentaine de fonctionnalités avancées.",
    stack: ["Next.js", "TypeScript", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
    demo: "https://pladine-chat.vercel.app",
    code: "https://github.com/haddadmassinissa92/pladine-chat",
  },
  {
    title: "Blog App",
    image: "/projects/blog-app.png",
    description:
      "Blog personnel avec authentification par rôles (utilisateur/modérateur/admin), upload d'images et gestion complète des articles et commentaires.",
    stack: ["Node.js", "Express", "MongoDB", "EJS"],
    demo: "https://blog-app-d3y2.onrender.com",
    code: "https://github.com/haddadmassinissa92/blog-app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-100 dark:border-zinc-800"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Mes projets</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={project.image}
                alt={`Capture d'écran du projet ${project.title}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-contain"
                priority={project.title === "ProShop"}
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Démo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
