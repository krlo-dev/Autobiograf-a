"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems, profile } from "../data/site";

export default function Header() {
  const pathname = usePathname();

  // Un link está "activo" si la ruta actual coincide, o si es una subruta
  // (por ejemplo "/futuro#correspondencia" activa el link "/futuro").
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant/60 bg-surface-container-lowest/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1140px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-[family-name:var(--font-geist)] text-headline-sm text-on-surface">
          Autobiografía
        </Link>

        <nav className="hidden items-center gap-1 rounded-lg bg-surface-container-low p-1 font-mono text-label-md uppercase lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded px-3 py-1.5 transition-colors ${
                isActive(item.href)
                  ? "bg-primary font-medium text-on-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/futuro#correspondencia"
            className="hidden items-center rounded-sm bg-primary px-4 py-2 font-mono text-label-sm text-on-primary transition-colors hover:bg-primary-container sm:inline-flex"
          >
            Contacto
          </Link>
          <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-outline-variant/30">
            <Image
              src="/images/perfil.jpg"
              alt={profile.shortName}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Navegación para pantallas pequeñas: misma lista, en una fila aparte. */}
      <nav className="flex items-center gap-3 overflow-x-auto border-t border-outline-variant/60 px-4 py-2 font-mono text-label-sm uppercase lg:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`shrink-0 rounded px-2 py-1 transition-colors ${
              isActive(item.href)
                ? "bg-primary font-medium text-on-primary"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
