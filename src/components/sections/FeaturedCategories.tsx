import Image from "next/image";
import { FEATURED_CATEGORIES } from "@/lib/content";

export function FeaturedCategories() {
  return (
    <section className="py-14 md:py-18 bg-white">
      <div className="container-gp">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {FEATURED_CATEGORIES.map((cat) => (
            <a
              key={cat.name}
              href="#shop"
              className="group relative aspect-[3/4] rounded-[12px] overflow-hidden block"
            >
              <Image
                src={cat.image}
                alt={cat.piece}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="inline-block rounded-full bg-black/45 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.16em] font-semibold">
                  {cat.name}
                </span>
                <h3 className="font-display text-[19px] md:text-[22px] font-semibold mt-2 leading-snug">
                  {cat.piece}
                </h3>
                <p className="text-[12px] opacity-85 mt-0.5">From {cat.startFrom}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
