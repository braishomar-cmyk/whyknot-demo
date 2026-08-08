import Image from "next/image";
import Link from "next/link";
import {
  BUSINESS_NAME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCATION,
  NAV_LINKS,
  WHATSAPP_NUMBER,
} from "@/lib/content";

const HELP_LINKS = [
  { label: "How to order", href: "/how-to-order" },
  { label: "Delivery", href: "/delivery" },
  { label: "Exchanges", href: "/exchanges" },
];

export function FooterSection() {
  return (
    <footer className="bg-[var(--an-ink)] text-[var(--an-cream)] pt-14 pb-8">
      <div className="container-gp">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[13px]">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/logo-trimmed.png"
              alt="Whyknot Clothing"
              width={828}
              height={401}
              className="h-[58px] w-auto object-contain invert"
            />
            <p className="mt-3 text-[var(--an-cream)]/60 text-[12.5px]">
              Wear what moves you! Curated pieces from Italy, Japan and our own collection,
              delivered across Lebanon.
            </p>
          </div>
          <div>
            <div className="uppercase text-[11px] tracking-[0.18em] font-semibold text-[var(--an-gold-light)] mb-3">
              Shop
            </div>
            {NAV_LINKS.slice(0, 4).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block py-1 text-[var(--an-cream)]/70 hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div>
            <div className="uppercase text-[11px] tracking-[0.18em] font-semibold text-[var(--an-gold-light)] mb-3">
              Help
            </div>
            {HELP_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-1 text-[var(--an-cream)]/70 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <div className="uppercase text-[11px] tracking-[0.18em] font-semibold text-[var(--an-gold-light)] mb-3">
              Contact
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="block py-1 text-[var(--an-cream)]/70 hover:text-white transition"
            >
              WhatsApp us
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="block py-1 text-[var(--an-cream)]/70 hover:text-white transition"
            >
              {INSTAGRAM_HANDLE}
            </a>
            <div className="py-1 text-[var(--an-cream)]/70">{LOCATION}</div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-2 items-center justify-between text-[11.5px] text-[var(--an-cream)]/50">
          <span>© 2026 {BUSINESS_NAME}</span>
          <span>Order on WhatsApp, cash on delivery</span>
          <span>Delivering across Lebanon</span>
        </div>
      </div>
    </footer>
  );
}
