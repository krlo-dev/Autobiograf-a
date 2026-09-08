import type { Metadata } from "next";
import ChapterFooterNav from "../components/ChapterFooterNav";
import { historia } from "../data/site";

export const metadata: Metadata = {
  title: "Mi historia — Carlos Rodríguez",
};

export default function HistoriaPage() {
  return (
    <>
      <section className="mx-auto max-w-[1140px] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mt-4 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h1 className="text-display-xl font-[family-name:var(--font-geist)] text-on-surface lg:col-span-8">
            Historia: el camino que forjó mi vocación
          </h1>
          <div className="lg:col-span-4 lg:text-right">
            <p className="font-mono text-label-sm uppercase text-on-surface-variant">
              Rango cronológico: infancia — actualidad
            </p>
            <p className="mt-1 font-mono text-label-sm uppercase text-on-surface-variant">
              4 hitos estructurados
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-body-lg text-on-surface-variant">
          Cuatro momentos, de la infancia en Barranquilla a la construcción
          diaria de mi camino hacia Cloud/DevOps, que explican por qué estudio
          lo que estudio y hacia dónde voy.
        </p>
      </section>

      <section className="border-t border-outline-variant/60">
        <div className="mx-auto max-w-[1140px] px-4 py-12 sm:px-6 sm:py-16">
          <div className="relative">
            {/* Línea vertical de la línea de tiempo (solo en desktop) */}
            <div className="absolute top-0 bottom-0 hidden w-px bg-outline-variant/60 md:left-[220px] md:block" />

            <div className="flex flex-col gap-10">
              {historia.map((item) => (
                <article
                  key={item.tag}
                  className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-8"
                >
                  <div className="md:pr-8 md:text-right">
                    <p className="font-mono text-label-sm uppercase text-on-surface-variant">
                      {item.period}
                    </p>
                    <p className="mt-1 text-headline-sm text-on-surface">
                      {item.phase}
                    </p>
                    <p className="mt-1 text-body-sm text-on-surface-variant">
                      {item.location}
                    </p>
                  </div>

                  <div className="relative md:pl-8">
                    <span
                      className={`absolute -left-[5px] top-1.5 hidden h-2.5 w-2.5 rounded-full md:block ${
                        item.enCurso
                          ? "bg-primary"
                          : "border border-outline bg-surface"
                      }`}
                    />

                    <div className="rounded-md border border-outline-variant/60 p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-headline-lg text-on-surface">
                          {item.title}
                        </h2>
                        {item.enCurso ? (
                          <span className="rounded-sm bg-primary px-2 py-1 font-mono text-label-sm uppercase text-on-primary">
                            En curso
                          </span>
                        ) : (
                          <span className="rounded-sm border border-outline-variant px-2 py-1 font-mono text-label-sm uppercase text-on-surface-variant">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      <p className="mt-3 text-body-md text-on-surface-variant">
                        {item.text}
                      </p>

                      <div className="mt-5 border-t border-outline-variant/60 pt-4">
                        {item.detail.kind === "pares" && (
                          <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                            {item.detail.items.map((par) => (
                              <div
                                key={par.text}
                                className="flex items-center gap-2"
                              >
                                <span className="icon text-on-surface-variant">
                                  {par.icon}
                                </span>
                                <span className="text-body-sm text-on-surface-variant">
                                  {par.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.detail.kind === "cita" && (
                          <p className="text-body-md italic text-on-surface-variant">
                            &ldquo;{item.detail.text}&rdquo;
                          </p>
                        )}

                        {item.detail.kind === "tags" && (
                          <div className="flex flex-wrap gap-2">
                            {item.detail.items.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-sm border border-outline-variant px-2.5 py-1 font-mono text-label-sm uppercase text-on-surface-variant"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ChapterFooterNav
        prev={{ label: "Quién soy", href: "/" }}
        next={{ label: "Explorar Formación", href: "/formacion" }}
      />
    </>
  );
}
