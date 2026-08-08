import type { Metadata } from "next";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { LeadForm } from "@/components/sections/LeadForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";
import { LOCATION, PLAN_LINK } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact | Whyknot Clothing",
  description:
    "Questions about sizing, delivery or a specific piece? Message Whyknot on WhatsApp. Delivery across Lebanon, cash on delivery.",
};

export default function ContactPage() {
  return (
    <>
      <HeaderSection />
      <section className="bg-[var(--an-ink)] text-[var(--an-cream)] py-16 md:py-20 text-center">
        <div className="container-gp">
          <p className="uppercase text-[11px] tracking-[0.3em] font-semibold text-[var(--an-gold-light)]">
            Contact
          </p>
          <h1 className="font-display text-[38px] md:text-[56px] font-medium mt-4 leading-[1.1]">
            We reply <em className=" text-[var(--an-gold-light)]">fast.</em>
          </h1>
          <p className="mt-6 text-[13px] uppercase tracking-[0.16em] text-[var(--an-cream)]/80">
            {LOCATION} · Delivery Across Lebanon
          </p>
          <p className="mt-2 text-[13px] uppercase tracking-[0.16em] text-[var(--an-cream)]/80">
            Cash on Delivery · Easy Exchanges
          </p>
          <div className="mt-8">
            <a
              className="btn-wa !px-8 !py-4 !text-[13px]"
              href={PLAN_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="w-5" /> Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <LeadForm />
      <FaqSection />
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
}
