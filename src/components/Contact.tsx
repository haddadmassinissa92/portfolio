"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-24 text-center border-t border-zinc-100 dark:border-zinc-800">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-zinc-500 mb-10">
        Une opportunité, une question ? N&apos;hésitez pas à me contacter.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left mb-10">
        <input
          type="text"
          placeholder="Votre nom"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-zinc-200 dark:border-zinc-800 bg-transparent rounded-lg px-4 py-3"
        />
        <input
          type="email"
          placeholder="Votre email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-zinc-200 dark:border-zinc-800 bg-transparent rounded-lg px-4 py-3"
        />
        <textarea
          placeholder="Votre message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border border-zinc-200 dark:border-zinc-800 bg-transparent rounded-lg px-4 py-3"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {status === "loading" ? "Envoi..." : "Envoyer"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-sm">Message envoyé avec succès !</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm">Une erreur est survenue, réessayez.</p>
        )}
      </form>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        
        <a href="mailto:hmassinissa39@gmail.com"
          className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
        >
          Email
        </a>
        
        <a href="https://github.com/haddadmassinissa92"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-full font-medium"
        >
          GitHub
        </a>
        
        <a href="https://www.linkedin.com/in/haddad-massinissa-a11800301/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-full font-medium"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}