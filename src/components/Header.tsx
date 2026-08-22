export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between px-8 py-4 w-full">
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
            <span className="font-bold text-lg">Massinissa.dev</span>
            <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                <a href="#about">À propos</a>
                <a href="#projects">Projets</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>
  );
}