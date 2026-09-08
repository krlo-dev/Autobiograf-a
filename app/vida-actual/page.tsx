import type { Metadata } from "next";
import ChapterFooterNav from "../components/ChapterFooterNav";
import {
  checklist2026,
  proyectosActuales,
  rendimiento,
  rolActual,
} from "../data/site";

export const metadata: Metadata = {
  title: "Mi vida actual — Carlos Rodríguez",
};

const statusIcon: Record<(typeof checklist2026)[number]["status"], string> = {
  done: "check_circle",
  progreso: "timelapse",
  pendiente: "radio_button_unchecked",
};

export default function VidaActualPage() {
  return (
    <>
      <section className="mx-auto max-w-[1140px] px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="mt-4 text-display-xl font-[family-name:var(--font-geist)] text-on-surface">
          Mi vida actual
        </h1>
        <p className="mt-4 max-w-2xl text-body-lg text-on-surface-variant">
          En qué invierto el tiempo mientras termino la carrera y construyo
          evidencia real de cara a mi salida al mundo Cloud/DevOps.
        </p>
      </section>

      <section className="border-t border-outline-variant/60">
        <div className="mx-auto grid max-w-[1140px] gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-3">
          {/* Rol principal */}
          <article className="rounded-md border border-outline-variant/60 p-6">
            <p className="font-mono text-label-sm uppercase text-on-surface-variant">
              01 // Rol principal
            </p>
            <h2 className="mt-3 text-headline-sm text-on-surface">
              {rolActual.title}
            </h2>
            <p className="mt-2 text-body-sm text-on-surface-variant">
              {rolActual.text}
            </p>

            <p className="mt-5 font-mono text-label-sm uppercase text-on-surface-variant">
              Ritmo de enfoque diario
            </p>
            <div className="mt-2 flex flex-col divide-y divide-outline-variant/60">
              {rolActual.schedule.map((row) => (
                <div
                  key={row.day}
                  className="flex justify-between gap-3 py-2.5 text-body-sm first:pt-0"
                >
                  <span className="font-mono uppercase text-on-surface">
                    {row.day}
                  </span>
                  <span className="text-right text-on-surface-variant">
                    {row.detail}
                  </span>
                </div>
              ))}
            </div>
          </article>

          {/* En taller */}
          <article className="rounded-md border border-outline-variant/60 p-6">
            <p className="font-mono text-label-sm uppercase text-on-surface-variant">
              02 // En taller
            </p>
            <div className="mt-3 flex flex-col divide-y divide-outline-variant/60">
              {proyectosActuales.map((proyecto) => (
                <div key={proyecto.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-headline-sm text-on-surface">
                      {proyecto.name}
                    </h3>
                    <span className="icon text-on-surface-variant">
                      arrow_outward
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-label-sm uppercase text-on-surface-variant">
                    {proyecto.status}
                  </p>
                  <p className="mt-1 text-body-sm text-on-surface-variant">
                    {proyecto.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* Rendimiento */}
          <article className="rounded-md border border-outline-variant/60 p-6">
            <p className="font-mono text-label-sm uppercase text-on-surface-variant">
              03 // Rendimiento
            </p>

            <div className="mt-3">
              <div className="flex items-center justify-between text-body-sm text-on-surface-variant">
                <span>{rendimiento.progresoLabel}</span>
                <span className="font-mono">{rendimiento.progreso}%</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-container-high">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${rendimiento.progreso}%` }}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              {checklist2026.map((item) => (
                <div key={item.text} className="flex items-start gap-2">
                  <span
                    className={`icon mt-0.5 ${
                      item.status === "done"
                        ? "text-primary"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {statusIcon[item.status]}
                  </span>
                  <span className="text-body-sm text-on-surface-variant">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-5 border-t border-outline-variant/60 pt-4 font-mono text-label-sm uppercase text-on-surface-variant">
              {rendimiento.cierre}
            </p>
          </article>
        </div>
      </section>

      <ChapterFooterNav
        prev={{ label: "Intereses", href: "/intereses" }}
        next={{ label: "Ir a mi futuro", href: "/futuro" }}
      />
    </>
  );
}
