export function SplitPromo() {
  return (
    <section className="py-16 md:py-20 bg-[var(--an-sand)]">
      <div className="container-gp grid md:grid-cols-2 gap-10 items-center">
        <div
          className="rounded-[4px] aspect-[4/5] max-h-[560px] w-full overflow-hidden"
          style={{ background: "linear-gradient(160deg,#6b5748,#b8a48c)" }}
        >
          <div className="flex h-full items-end p-8">
            <span className="uppercase text-[10px] tracking-[0.24em] font-semibold bg-white/90 text-[var(--an-ink)] px-4 py-1.5 rounded-full">
              The Winter Edit
            </span>
          </div>
        </div>
        <div>
          <p className="uppercase text-[11px] tracking-[0.3em] font-semibold text-[var(--an-gold)]">
            Layer Season
          </p>
          <h2 className="font-display text-[32px] md:text-[46px] leading-[1.12] font-medium mt-4">
            The art of staying warm in style
          </h2>
          <p className="mt-5 text-[14.5px] leading-relaxed opacity-75 max-w-[440px]">
            This season leans into quieter tones and heavier fabrics: wool
            coats, structured blazers and knits that hold their shape from
            morning to midnight.
          </p>
          <div className="mt-7 flex gap-4 flex-wrap">
            <a className="btn-solid" href="#shop">
              Shop Now
            </a>
            <a className="btn-outline" href="#styles">
              View Lookbook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
