import type { ReactNode } from "react";
import Link from "next/link";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { BenefitsBar } from "@/components/sections/BenefitsBar";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";
import { PLAN_LINK } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export function InfoPageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <HeaderSection />

      <section className="bg-[var(--an-cream)] py-12 md:py-16 text-center">
        <div className="container-gp">
          <p className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[var(--an-gold)]">
            {eyebrow}
          </p>
          <h1 className="font-display text-[34px] md:text-[46px] font-semibold leading-[1.1] mt-3">
            {title}
          </h1>
          <p className="mt-4 text-[14.5px] leading-relaxed opacity-75 max-w-[520px] mx-auto">
            {intro}
          </p>
          <nav aria-label="Breadcrumb" className="mt-5 text-[12px] opacity-55">
            <Link href="/" className="hover:text-[var(--an-gold)]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>{title}</span>
          </nav>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-gp max-w-[760px]">{children}</div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-gp max-w-[760px]">
          <div className="rounded-[14px] bg-[var(--an-sand)] px-7 py-8 text-center">
            <h2 className="font-display text-[24px] font-semibold">Still have a question?</h2>
            <p className="mt-2 text-[13.5px] opacity-75">
              Message us on WhatsApp and a real person replies, usually within the hour.
            </p>
            <div className="mt-5">
              <a className="btn-wa" href={PLAN_LINK} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="w-4" /> Chat with us
              </a>
            </div>
          </div>
        </div>
      </section>

      <BenefitsBar />
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
}

export function InfoSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="space-y-6">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-5">
          <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--an-ink)] text-[16px] font-semibold text-white">
            {i + 1}
          </span>
          <span>
            <span className="block font-display text-[20px] font-semibold leading-tight">
              {step.title}
            </span>
            <span className="mt-1.5 block text-[14px] leading-relaxed opacity-75">{step.text}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function InfoRows({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="divide-y divide-black/8 border-y border-black/8">
      {rows.map((row) => (
        <div key={row.label} className="grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-6 py-4">
          <dt className="text-[12px] uppercase tracking-[0.12em] font-semibold">{row.label}</dt>
          <dd className="text-[14px] leading-relaxed opacity-75">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
