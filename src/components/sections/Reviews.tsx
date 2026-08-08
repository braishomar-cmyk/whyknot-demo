import type { Review } from "@/lib/content";
import { StarIcon } from "@/components/icons";

/** Star row with partial fill, e.g. 4.7 shows four and a bit */
export function StarRating({
  rating,
  className = "w-3.5",
}: {
  rating: number;
  className?: string;
}) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <span className="relative inline-flex" aria-hidden>
      <span className="flex text-black/15">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className={className} />
        ))}
      </span>
      <span
        className="absolute inset-0 flex overflow-hidden text-[var(--an-gold)]"
        style={{ width: `${pct}%` }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className={`${className} shrink-0`} />
        ))}
      </span>
    </span>
  );
}

/** Compact rating used on product cards and next to the price */
export function RatingSummary({
  rating,
  reviewCount,
  size = "sm",
}: {
  rating: number;
  reviewCount: number;
  size?: "sm" | "md";
}) {
  const starClass = size === "md" ? "w-4" : "w-3.5";
  return (
    <span className="inline-flex items-center gap-1.5">
      <StarRating rating={rating} className={starClass} />
      <span className={size === "md" ? "text-[13px]" : "text-[11.5px] opacity-70"}>
        {rating.toFixed(1)}
        <span className="opacity-60"> ({reviewCount})</span>
      </span>
      <span className="sr-only">
        Rated {rating.toFixed(1)} out of 5 from {reviewCount} reviews
      </span>
    </span>
  );
}

function ratingBreakdown(reviews: Review[]) {
  return [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => Math.round(r.rating) === star).length,
  }));
}

export function ProductReviews({
  rating,
  reviewCount,
  reviews,
  sizeLabel = "picked",
}: {
  rating: number;
  reviewCount: number;
  reviews: Review[];
  /** "usually wears" for one-size pieces, "picked" when there are real size options,
      "none" for accessories where a garment size means nothing */
  sizeLabel?: "usually wears" | "picked" | "none";
}) {
  const breakdown = ratingBreakdown(reviews);
  const shown = reviews.length;

  return (
    <section id="reviews" className="py-14 md:py-16 bg-[var(--an-cream)]">
      <div className="container-gp max-w-[900px]">
        <h2 className="font-display text-[26px] md:text-[34px] font-semibold text-center">
          What customers <em>say</em>
        </h2>

        <div className="mt-8 grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start">
          <div className="text-center md:text-left">
            <div className="font-display text-[46px] font-semibold leading-none">
              {rating.toFixed(1)}
            </div>
            <div className="mt-2 flex justify-center md:justify-start">
              <StarRating rating={rating} className="w-4" />
            </div>
            <p className="mt-2 text-[12.5px] opacity-65">Based on {reviewCount} reviews</p>

            <ul className="mt-5 space-y-1.5">
              {breakdown.map((row) => (
                <li key={row.star} className="flex items-center gap-2 text-[11.5px]">
                  <span className="w-8 opacity-70">{row.star}★</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/10">
                    <span
                      className="block h-full bg-[var(--an-gold)]"
                      style={{ width: shown ? `${(row.count / shown) * 100}%` : "0%" }}
                    />
                  </span>
                  <span className="w-4 text-right opacity-55">{row.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="space-y-5">
            {reviews.map((review) => (
              <li
                key={review.author + review.title}
                className="rounded-[12px] border border-black/8 bg-white p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <StarRating rating={review.rating} />
                  <span className="text-[11.5px] opacity-55">{review.date}</span>
                </div>
                <h3 className="font-display text-[18px] font-semibold mt-2.5">{review.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed opacity-80">{review.text}</p>
                <p className="mt-3 text-[11.5px] uppercase tracking-[0.1em] opacity-55">
                  {review.author}
                  {review.size && sizeLabel !== "none"
                    ? ` · ${sizeLabel === "picked" ? "picked size" : "usually wears"} ${review.size}`
                    : ""}
                  <span className="ml-2 rounded-full bg-[var(--an-gold)]/12 px-2 py-0.5 tracking-normal text-[10.5px] normal-case text-[var(--an-gold)]">
                    Verified buyer
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-[11.5px] opacity-50">
          Demo reviews, replaced with real customer reviews at launch.
        </p>
      </div>
    </section>
  );
}
