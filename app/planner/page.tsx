import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet Your Planner | Halo & Pine",
  description:
    "Meet your wedding planner and learn about the calm, thoughtful approach behind Halo & Pine wedding coordination.",
  openGraph: {
    title: "Meet Your Planner | Halo & Pine",
    description:
      "Meet your wedding planner and learn about the calm, thoughtful approach behind Halo & Pine wedding coordination.",
    images: [
      {
        url: "/logo.PNG",
        width: 1200,
        height: 630,
        alt: "Halo & Pine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Your Planner | Halo & Pine",
    description:
      "Meet your wedding planner and learn about the calm, thoughtful approach behind Halo & Pine wedding coordination.",
    images: ["/logo.PNG"],
  },
};

export default function PlannerPage() {
  return (
    <main className="bg-[#F8F4EF] min-h-screen py-24">

      <div className="max-w-[1500px] mx-auto px-12 grid md:grid-cols-2 gap-28 items-start">

        <Image
          src="/kajal.jpg"
          alt="Kajal, the wedding planner behind Halo and Pine"
          width={780}
          height={980}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="rounded-[32px] object-cover shadow-2xl"
        />

        <div>

          <p className="uppercase tracking-[0.45em] text-[#8A7247] text-sm">
            Meet Your Planner
          </p>

          <h1 className="mt-5 text-7xl font-serif leading-tight">
            Hi, I'm Kajal.
          </h1>

          <p className="mt-4 text-[#8A7247] uppercase tracking-[0.3em] text-sm">
            Founder of Halo & Pine
          </p>

          <div className="mt-10 max-w-2xl space-y-8 text-[#3F3F3F] leading-9">

            <p>
              I believe every couple deserves to be fully present on their wedding day. After months (or even years) of planning, your focus shouldn't be on vendor arrivals, timeline changes, or the little details behind the scenes. That's where I come in.
            </p>

            <p>
              Halo & Pine was created with one purpose: to bring calm, thoughtful coordination to one of life's most meaningful celebrations. I believe the best weddings don't happen because everything is perfect. They happen because someone is quietly ensuring everything flows with care, intention, and grace.
            </p>

            <p>
              My background in leadership and management has taught me how to stay organized, communicate clearly, and remain calm under pressure. Whether it's keeping your timeline on track, supporting your vendors, or solving unexpected challenges before you ever notice them, my priority is creating a day that feels effortless for you.
            </p>

            <p>
              Based in <strong>Port Coquitlam, BC</strong>, I work with couples who have poured their hearts into planning their wedding and simply want someone they can trust to bring it all together.
            </p>

            <p>
              It would be an honour to play a small part in the beginning of your next chapter.
            </p>

            <p className="pt-6 font-serif text-2xl">
              God bless,
              <br />
              <span className="text-4xl text-[#8A7247]">
                Kajal
              </span>
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}