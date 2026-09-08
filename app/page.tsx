import Image from "next/image";
import Link from "next/link";
import ChapterFooterNav from "./components/ChapterFooterNav";
import { ficha, principios, profile } from "./data/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1140px] px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-outline-variant/60 bg-surface-container-low">
              <Image
                src="/images/perfil.jpg"
                alt={profile.shortName}
                fill
                unoptimized
                className="object-cover grayscale"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-inverse-surface/90 px-4 py-3 font-mono text-label-sm uppercase text-inverse-on-surface">
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h1 className="mt-4 text-display-xl font-[family-name:var(--font-geist)] text-on-surface">
              {profile.headline}
              <span className="mt-2 block text-headline-lg font-normal text-on-surface-variant">
                {profile.subheadline}
              </span>
            </h1>

            <div className="mt-6 flex flex-col gap-4 text-body-lg text-on-surface-variant">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Ficha de datos esenciales */}
            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-outline-variant/60 bg-outline-variant/60 sm:grid-cols-2">
              {ficha.map((item) => (
                <div
                  key={item.label}
                  className="bg-surface-container-lowest p-4"
                >
                  <p className="font-mono text-label-sm uppercase text-on-surface-variant">
                    {item.label}
                  </p>
                  <p className="mt-1 text-headline-sm text-on-surface">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={profile.ctaPrimary.href}
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-mono text-label-sm uppercase text-on-primary transition-colors hover:bg-primary-container"
              >
                {profile.ctaPrimary.label}
                <span className="icon text-base">arrow_forward</span>
              </Link>
              <a
                href={profile.ctaSecondary.href}
                className="inline-flex items-center gap-2 rounded-sm border border-outline-variant px-5 py-2.5 font-mono text-label-sm uppercase text-on-surface transition-colors hover:border-primary hover:bg-surface-container-low"
              >
                {profile.ctaSecondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Principios rectores */}
      <section className="border-t border-outline-variant/60">
        <div className="mx-auto max-w-[1140px] px-4 py-12 sm:px-6 sm:py-16">
          <p className="font-mono text-label-md uppercase text-on-surface-variant">
            Principios rectores
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {principios.map((principio, index) => (
              <div
                key={principio.title}
                className="flex flex-col rounded-md border border-outline-variant/60 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-label-sm uppercase text-on-surface-variant">
                    Valor {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="icon text-on-surface">{principio.icon}</span>
                </div>
                <h3 className="mt-4 text-headline-md text-on-surface">
                  {principio.title}
                </h3>
                <p className="mt-2 flex-1 text-body-md text-on-surface-variant">
                  {principio.text}
                </p>
                <p className="mt-4 border-t border-outline-variant/60 pt-3 font-mono text-label-sm uppercase text-on-surface-variant">
                  {principio.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChapterFooterNav
        next={{ label: "Conocer mi historia", href: "/historia" }}
      />
    </>
  );
}
