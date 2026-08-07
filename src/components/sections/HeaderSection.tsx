import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, PLAN_LINK, INSTAGRAM_URL } from "@/lib/content";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import { MobileMenu } from "@/components/sections/MobileMenu";

const BANNER_MESSAGES = [
  "Free delivery over $75",
  "Cash on delivery",
  "Delivering all over Lebanon",
  "10% off your first order",
  "New drop: made in Italy & Japan",
];

const navLinkClass =
  "uppercase text-[12px] font-medium tracking-[0.14em] hover:text-[var(--an-gold)] transition-colors";

export function HeaderSection() {
  const leftLinks = NAV_LINKS.slice(0, 3);
  const rightLinks = NAV_LINKS.slice(4);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[var(--an-ink)] text-[var(--an-gold-light)] py-3 overflow-hidden">
        <div className="marquee-banner">
          {[0, 1].map((track) => (
            <div key={track} aria-hidden={track === 1} className="flex shrink-0">
              {BANNER_MESSAGES.map((message) => (
                <span
                  key={message}
                  className="flex items-center whitespace-nowrap text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-medium"
                >
                  {message}
                  <span className="mx-6 text-[var(--an-gold)]">&#10022;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <header className="relative bg-[var(--an-cream)]/95 backdrop-blur border-b border-black/10">
        <div className="container-gp grid grid-cols-[1fr_auto_1fr] h-[72px] items-center">
          <div className="justify-self-start flex items-center gap-3">
            <MobileMenu />
            <nav className="hidden md:flex items-center gap-6">
              {leftLinks.map((link) => (
                <a key={link.label} href={link.href} className={navLinkClass}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <Link href="/" className="justify-self-center" aria-label="Whyknot Clothing home">
            <Image
              src="/images/logo-trimmed.png"
              alt="Whyknot Clothing"
              width={828}
              height={401}
              priority
              className="h-[52px] md:h-[62px] w-auto object-contain"
            />
          </Link>

          <div className="justify-self-end flex items-center gap-5">
            <nav className="hidden md:flex items-center gap-6">
              {rightLinks.map((link) => (
                <a key={link.label} href={link.href} className={navLinkClass}>
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[var(--an-gold)] transition-colors"
            >
              <InstagramIcon className="w-[20px]" />
            </a>
            <span className="hidden md:block">
              <a
                className="btn-wa !py-2.5 !px-4 !text-[11px]"
                href={PLAN_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="w-4" /> Order
              </a>
            </span>
            <a
              href={PLAN_LINK}
              target="_blank"
              rel="noreferrer"
              aria-label="Order on WhatsApp"
              className="md:hidden hover:text-[var(--an-gold)] transition-colors"
            >
              <WhatsAppIcon className="w-[20px]" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
