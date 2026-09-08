import type { Metadata } from "next";
import ChapterFooterNav from "../components/ChapterFooterNav";
import {
  exploracionTecnica,
  lecturas,
  movimiento,
  musica,
  teclados,
} from "../data/site";

export const metadata: Metadata = {
  title: "Mis intereses — Carlos Rodríguez",
};

export default function InteresesPage() {
  return (
    <>
      <section className="mx-auto max-w-[1140px] px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="mt-4 text-display-xl font-[family-name:var(--font-geist)] text-on-surface">
          Intereses, rituales y pasiones cotidianas
        </h1>
        <p className="mt-4 max-w-2xl text-body-lg text-on-surface-variant">
          Lo que hago fuera del código también forma parte de cómo trabajo:
          música para concentrarme, teclados para escribir mejor, y algo de
          movimiento para despejar la cabeza.
        </p>
      </section>

      <section className="border-t border-outline-variant/60">
        <div className="mx-auto grid max-w-[1140px] gap-6 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-12">
          {/* Música y concentración */}
          <article className="rounded-md border border-outline-variant/60 p-6 md:col-span-7">
            <div className="flex items-center gap-2">
              <span className="icon text-on-surface">headphones</span>
              <h2 className="text-headline-md text-on-surface">
                {musica.title}
              </h2>
            </div>
            <p className="mt-3 text-body-md text-on-surface-variant">
              {musica.text}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {musica.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-outline-variant px-2.5 py-1 font-mono text-label-sm uppercase text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-sm">
              <span className="rounded-sm border border-outline-variant px-2.5 py-1 font-mono text-label-sm uppercase text-on-surface-variant">
                Canción favorita!
              </span>
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/7yapVRtcar5331vH7ACfwT?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="mt-5"
              />
            </div>
          </article>

          {/* Teclados mecánicos */}
          <article className="rounded-md border border-outline-variant/60 p-6 md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="icon text-on-surface">keyboard</span>
              <h2 className="text-headline-md text-on-surface">
                {teclados.title}
              </h2>
            </div>
            <p className="mt-3 text-body-md text-on-surface-variant">
              {teclados.text}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {teclados.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-outline-variant px-2.5 py-1 font-mono text-label-sm uppercase text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Movimiento y despeje mental */}
          <article className="rounded-md border border-outline-variant/60 p-6 md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="icon text-on-surface">directions_run</span>
              <h2 className="text-headline-md text-on-surface">
                {movimiento.title}
              </h2>
            </div>
            <p className="mt-3 text-body-md text-on-surface-variant">
              {movimiento.text}
            </p>
          </article>

          {/* Lecturas y videojuegos */}
          <article className="rounded-md border border-outline-variant/60 p-6 md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="icon text-on-surface">menu_book</span>
              <h2 className="text-headline-md text-on-surface">
                Lecturas y videojuegos
              </h2>
            </div>
            <div className="mt-4 flex flex-col divide-y divide-outline-variant/60">
              {lecturas.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
                >
                  <span className="icon text-on-surface-variant">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-body-sm text-on-surface">{item.title}</p>
                    <p className="text-body-sm text-on-surface-variant">
                      {item.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Exploración Cloud & MLOps */}
          <article className="rounded-md bg-primary-container p-6 text-inverse-on-surface md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="icon text-white">terminal</span>
              <h2 className="text-headline-md text-white">
                {exploracionTecnica.title}
              </h2>
            </div>
            <p className="mt-3 text-body-sm text-on-primary-container">
              {exploracionTecnica.text}
            </p>
            <div className="mt-4 rounded-sm bg-black/30 p-3 font-mono text-label-sm text-white">
              {exploracionTecnica.terminal.map((line) => (
                <p key={line} className="whitespace-pre-wrap">
                  {line}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <ChapterFooterNav
        prev={{ label: "Formación y trayectoria", href: "/formacion" }}
        next={{ label: "Ir a mi vida actual", href: "/vida-actual" }}
      />
    </>
  );
}
