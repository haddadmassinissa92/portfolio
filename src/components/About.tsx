import Image from "next/image";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "Tailwind CSS",
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto px-6 py-24 border-t border-zinc-100 dark:border-zinc-800"
    >
      <div className="flex justify-center mb-8">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-md">
          <Image
            src="/profile.jpg"
            alt="Photo de Haddad Massinissa"
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center mb-8">À propos</h2>

      <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed text-center">
        J&apos;ai découvert le développement grâce à un ami, puis j&apos;ai
        appris seul, étape par étape. Pour aller plus loin et structurer mes
        bases, j&apos;ai ensuite suivi un bootcamp fullstack JavaScript. Depuis,
        je construis de vrais projets — du e-commerce à l&apos;authentification
        en passant par les paiements et l&apos;intégration de l&apos;IA — pour
        continuer à progresser. Aujourd&apos;hui je cherche une opportunité pour
        rejoindre une équipe.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 px-4 py-2 rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
