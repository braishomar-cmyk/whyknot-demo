"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, PLAN_LINK } from "@/lib/content";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/icons";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center -ml-2"
      >
        {open ? <CloseIcon className="w-6" /> : <MenuIcon className="w-6" />}
      </button>

      {open ? (
        <nav className="absolute inset-x-0 top-full z-50 border-b border-black/10 bg-white shadow-[0_12px_24px_rgba(35,35,35,0.08)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-black/5 px-6 py-4 text-[13px] font-medium uppercase tracking-[0.16em]"
            >
              {link.label}
            </Link>
          ))}
          <div className="p-5">
            <a
              className="btn-wa w-full !py-3.5 !text-[12px]"
              href={PLAN_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon className="w-4" /> Start Planning
            </a>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
