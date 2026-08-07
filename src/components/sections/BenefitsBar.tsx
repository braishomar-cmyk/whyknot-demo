import { BENEFITS } from "@/lib/content";
import { TruckIcon, GlobeIcon, LeafIcon, WhatsAppIcon } from "@/components/icons";

const ICONS = [TruckIcon, GlobeIcon, LeafIcon, WhatsAppIcon];

export function BenefitsBar() {
  return (
    <section className="py-10 bg-[var(--an-sand)] border-y border-black/5">
      <div className="container-gp grid grid-cols-2 md:grid-cols-4 gap-6">
        {BENEFITS.map((b, i) => {
          const Icon = ICONS[i];
          return (
            <div key={b.title} className="flex flex-col items-center text-center gap-2">
              <Icon className="w-6 text-[var(--an-gold)]" />
              <div className="text-[12.5px] font-semibold uppercase tracking-[0.1em]">{b.title}</div>
              <div className="text-[11.5px] opacity-60">{b.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
