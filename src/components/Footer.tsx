export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800 py-8 px-6 text-center text-sm text-zinc-400 dark:text-zinc-500">
      <p>
        © {new Date().getFullYear()} Haddad Massinissa. Tous droits réservés.
      </p>
    </footer>
  );
}