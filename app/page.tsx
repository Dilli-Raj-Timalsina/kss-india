"use client";
import HeroCarousel from "@/components/hero-carousel";
import ImpactSection from "@/components/impact-section";
import EventsSection from "@/components/event-section";
// Move this to a separate data file, e.g., lib/data.ts
const carouselData = [
  {
    title: "Education",
    description:
      "Empowering children through quality education and after-school programs",
    iconName: "Heart", // Changed from component to string
    image: "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046",
  },
  {
    title: "Healthcare",
    description: "Providing accessible healthcare services to slum communities",
    iconName: "Heart",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80",
  },
  {
    title: "Women Empowerment",
    description:
      "Supporting women with skills training and entrepreneurship opportunities",
    iconName: "Stethoscope",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel slides={carouselData} />
      <ImpactSection></ImpactSection>
      <EventsSection></EventsSection>
    </main>
  );
}
