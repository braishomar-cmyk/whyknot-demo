import { REELS, waLink } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export function ReelsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-gp">
        <h2 className="section-heading">Shop Our Stories</h2>
        <p className="text-center mt-2 text-[14px] opacity-70">
          Tap a look, order it in the same minute.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-12">
          {REELS.map((r) => (
            <div
              key={r.product}
              className="group relative aspect-[9/16] rounded-[10px] overflow-hidden flex flex-col justify-between p-4 text-white"
              style={{ background: `linear-gradient(160deg, ${r.tone}, ${r.toneTo})` }}
            >
              <span className="uppercase text-[9px] tracking-[0.2em] font-semibold bg-white/20 backdrop-blur px-3 py-1 rounded-full w-fit">
                {r.title}
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur flex items-center justify-center transition-transform group-hover:scale-110">
                  <span className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-white ml-1" />
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-[13px] font-semibold leading-tight">{r.product}</div>
                <div className="text-[12px] opacity-85">{r.price}</div>
                <a
                  className="mt-2 btn-wa w-full !py-2 !text-[10px] !px-2"
                  href={waLink(r.orderMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="w-3.5" /> Order
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-[11.5px] opacity-50">
          Demo tiles, replaced with the brand&apos;s real videos at launch.
        </p>
      </div>
    </section>
  );
}
