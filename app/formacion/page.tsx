import type { Metadata } from "next";
import ChapterFooterNav from "../components/ChapterFooterNav";
import {
  certificaciones,
  compromisoDiario,
  educacion,
  metodologia,
  techStack,
} from "../data/site";

export const metadata: Metadata = {
  title: "Mi formación — Carlos Rodríguez",
};

export default function FormacionPage() {
  return (
    <>
      <section className="mx-auto max-w-[1140px] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mt-4 grid gap-4 lg:grid-cols-12 lg:gap-8">
          <h1 className="text-display-xl font-[family-name:var(--font-geist)] text-on-surface lg:col-span-8">
            Mi formación
          </h1>
          <p className="text-body-lg text-on-surface-variant lg:col-span-4">
            Estudios, certificaciones y la metodología con la que aprendo cada
            herramienta antes de usarla en un proyecto real.
          </p>
        </div>
      </section>

      <section className="border-t border-outline-variant/60">
        <div className="mx-auto grid max-w-[1140px] gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-8">
          {/* Columna izquierda: trayectoria académica + certificaciones */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2">
              <span className="icon text-on-surface">school</span>
              <h2 className="text-headline-md text-on-surface">
                Trayectoria académica
              </h2>
              <span className="rounded-sm border border-outline-variant px-2 py-0.5 font-mono text-label-sm text-on-surface-variant">
                {educacion.length}
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              {educacion.map((item) => (
                <article
                  key={item.title}
                  className="rounded-md border border-outline-variant/60 p-6"
                >
                  <h3 className="text-headline-sm text-on-surface">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-body-sm text-on-surface-variant">
                    {item.place}
                  </p>
                  <p className="mt-1 font-mono text-label-sm uppercase text-on-surface-variant">
                    {item.period}
                  </p>
                  <p className="mt-3 text-body-md text-on-surface-variant">
                    {item.detail}
                  </p>

                  {item.stats && (
                    <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-outline-variant/60 bg-outline-variant/60">
                      {item.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-surface-container-lowest p-3"
                        >
                          <p className="font-mono text-label-sm uppercase text-on-surface-variant">
                            {stat.label}
                          </p>
                          <p className="mt-1 text-body-sm text-on-surface">
                            {stat.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>

            <h2 className="mt-10 text-headline-md text-on-surface">
              Certificaciones clave
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {certificaciones.map((cert) => (
                <article
                  key={cert.title}
                  className="flex flex-col rounded-md border border-outline-variant/60 p-5"
                >
                  <p className="font-mono text-label-sm uppercase text-on-surface-variant">
                    {cert.issuer}
                  </p>
                  <h3 className="mt-2 text-headline-sm text-on-surface">
                    {cert.title}
                  </h3>
                  <p className="mt-2 flex-1 text-body-sm text-on-surface-variant">
                    {cert.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Columna derecha: metodología + compromiso diario */}
          <div className="lg:col-span-5">
            <div className="rounded-md bg-primary-container p-6 text-inverse-on-surface">
              <h2 className="text-headline-md text-white">
                Tres aprendizajes indelebles del camino
              </h2>
              <div className="mt-5 flex flex-col gap-5">
                {metodologia.map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-white font-mono text-label-sm text-primary-container">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-headline-sm text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-body-sm text-on-primary-container">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-md border border-outline-variant/60 p-6">
              <p className="font-mono text-label-md uppercase text-on-surface-variant">
                {compromisoDiario.label}
              </p>
              <p className="mt-2 text-display-xl-mobile font-[family-name:var(--font-geist)] text-on-surface">
                {compromisoDiario.stat}
              </p>
              <p className="text-body-sm text-on-surface-variant">
                {compromisoDiario.statLabel}
              </p>

              <div className="mt-5 flex flex-col gap-4">
                {compromisoDiario.barras.map((barra) => (
                  <div key={barra.label}>
                    <div className="flex items-center justify-between text-body-sm text-on-surface-variant">
                      <span>{barra.label}</span>
                      <span className="font-mono">{barra.value}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-container-high">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${barra.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 border-t border-outline-variant/60 pt-4 text-body-sm italic text-on-surface-variant">
                &ldquo;{compromisoDiario.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-outline-variant/60">
        <div className="mx-auto max-w-[1140px] px-4 py-12 sm:px-6 sm:py-16">
          <p className="font-mono text-label-md uppercase text-on-surface-variant">
            Stack y tecnologías
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`rounded-sm border px-3 py-1.5 font-mono text-label-sm uppercase transition-colors ${
                  tech.primary
                    ? "border-primary bg-primary text-on-primary"
                    : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-on-surface"
                }`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ChapterFooterNav
        prev={{ label: "Historia", href: "/historia" }}
        next={{ label: "Explorar Intereses", href: "/intereses" }}
      />
    </>
  );
}
