import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "../fade-in";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn>
            <h2 className="section-title">Let's Work Together</h2>
        </FadeIn>
        <FadeIn className="max-w-4xl mx-auto">
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
