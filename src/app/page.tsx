import { HeaderSection } from "@/components/sections/HeaderSection";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { EditorialIntro } from "@/components/sections/EditorialIntro";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { ReelsSection } from "@/components/sections/ReelsSection";
import { SplitPromo } from "@/components/sections/SplitPromo";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { BrandStory } from "@/components/sections/BrandStory";
import { BrowseStyles } from "@/components/sections/BrowseStyles";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { VideoBanner } from "@/components/sections/VideoBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { BenefitsBar } from "@/components/sections/BenefitsBar";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";
import { PurchaseToast } from "@/components/sections/PurchaseToast";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroShowcase />
      <EditorialIntro />
      <FeaturedCategories />
      <ReelsSection />
      <SplitPromo />
      <ProductGrid />
      <BrandStory />
      <BrowseStyles />
      <TestimonialsSection />
      <VideoBanner />
      <FaqSection />
      <BenefitsBar />
      <FooterSection />
      <WhatsAppFloat />
      <PurchaseToast />
    </>
  );
}
