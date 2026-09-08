import type { Metadata } from "next";
import ChapterFooterNav from "../components/ChapterFooterNav";
import { contacto, futuroMilestones, manifiesto } from "../data/site";

export const metadata: Metadata = {
  title: "Mi futuro — Carlos Rodríguez",
};

export default function FuturoPage() {
  return (
    <>
      <section className="border-b border-outline-variant/60 bg-surface-container-low">
        <div className="mx-auto max-w-[1140px] px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="mt-4 text-display-xl font-[family-name:var(--font-geist)] text-on-surface">
            Mi futuro
          </h1>
          <p className="mt-4 max-w-2xl text-body-lg text-on-surface-variant">
            Hacia dónde quiero llevar todo lo anterior: de un rol junior de
            Cloud Support a construir y operar, algún día, sistemas de Machine
            Learning en producción.
          </p>

          <div className="mt-10 rounded-md border border-outline-variant/60 bg-surface-container-lowest p-8">
            <span className="icon text-on-surface-variant">format_quote</span>
            <p className="mt-3 text-headline-lg italic text-on-surface">
              {manifiesto.quote}
            </p>
            <p className="mt-4 font-mono text-label-sm uppercase text-on-surface-variant">
              {manifiesto.attribution}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1140px] gap-6 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-3">
          {futuroMilestones.map((milestone) => (
            <article
              key={milestone.title}
              className={`flex flex-col rounded-md border p-6 ${
                milestone.destacado
                  ? "border-primary bg-primary text-on-primary"
                  : "border-outline-variant/60"
              }`}
            >
              <span
                className={`inline-block w-fit rounded-sm px-2.5 py-1 font-mono text-label-sm uppercase ${
                  milestone.destacado
                    ? "bg-on-primary/10 text-on-primary"
                    : "bg-surface-container-low text-on-surface-variant"
                }`}
              >
                {milestone.period} · {milestone.year}
              </span>
              <h2 className="mt-4 text-headline-md">{milestone.title}</h2>
              <p
                className={`mt-2 flex-1 text-body-sm ${
                  milestone.destacado
                    ? "text-on-primary/80"
                    : "text-on-surface-variant"
                }`}
              >
                {milestone.text}
              </p>
              <p
                className={`mt-4 border-t pt-3 font-mono text-label-sm uppercase ${
                  milestone.destacado
                    ? "border-on-primary/20 text-on-primary/80"
                    : "border-outline-variant/60 text-on-surface-variant"
                }`}
              >
                {milestone.hito}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section
        id="correspondencia"
        className="mx-auto max-w-[1140px] px-4 pb-16 sm:px-6"
      >
        <div className="rounded-md bg-primary p-8 text-on-primary sm:p-12">
          <p className="font-mono text-label-sm uppercase text-on-primary/70">
            Contacto y correspondencia
          </p>
          <h2 className="mt-3 text-headline-lg">Iniciemos una conversación.</h2>
          <p className="mt-3 max-w-xl text-body-md text-on-primary/80">
            Si tienes una oportunidad de Cloud Support, DevOps o una idea de
            colaboración, este es el mejor lugar para escribirme.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {contacto.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex w-fit items-center gap-2 rounded-sm border border-on-primary/30 px-4 py-2 font-mono text-label-sm text-on-primary transition-colors hover:bg-on-primary/10"
              >
                <span className="icon">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ChapterFooterNav
        prev={{ label: "Mi vida actual", href: "/vida-actual" }}
      />
    </>
  );
}
