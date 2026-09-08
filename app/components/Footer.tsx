import { profile } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/60">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-3 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left">
        <p className="font-mono text-label-sm uppercase text-on-surface-variant">
          © {year} {profile.shortName}. Todos los derechos reservados.
        </p>
        <p className="rounded-sm border border-outline-variant px-3 py-1 font-mono text-label-sm uppercase text-on-surface-variant">
          Next.js · App Router
        </p>
      </div>
    </footer>
  );
}
