import Link from "next/link";

export type ChapterLink = { label: string; href: string };

// Barra de navegación al final de cada capítulo: un link para volver al
// capítulo anterior (si existe) y un botón para avanzar al siguiente.
export default function ChapterFooterNav({
  prev,
  next,
}: {
  prev?: ChapterLink;
  next?: ChapterLink;
}) {
  return (
    <div className="mx-auto flex max-w-[1140px] flex-col gap-4 border-t border-outline-variant/60 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      {prev ? (
        <Link
          href={prev.href}
          className="inline-flex items-center gap-2 font-mono text-label-md uppercase text-on-surface-variant transition-colors hover:text-on-surface"
        >
          <span className="icon text-base">arrow_back</span>
          {prev.label}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          href={next.href}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-mono text-label-sm uppercase text-on-primary transition-colors hover:bg-primary-container"
        >
          {next.label}
          <span className="icon text-base">arrow_forward</span>
        </Link>
      )}
    </div>
  );
}
