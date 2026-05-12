"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Benefits from "@/components/Benefits";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Widgets from "@/components/Widgets";

export default function Home() {
  return (
    <main className="vim-gradient-bg text-white">
      <Navbar />
      <Hero />
      <Solutions />
      <Brands />
      <Benefits />
      <About />
      <Process />
      <ContactForm />
      <Footer />
      <Widgets />
    </main>
  );
}

