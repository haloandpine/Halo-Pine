import Image from "next/image";

export default function MeetPlanner() {
  return (
    <section className="bg-[#F8F4EF] py-28">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">

        <Image
          src="/kajal.jpg"
          alt="Kajal, founder of Halo and Pine"
          width={780}
          height={980}
          className="rounded-[32px] object-cover shadow-2xl"
        />

        <div>
          <p className="uppercase tracking-[0.45em] text-[#8A7247] text-sm">
            MEET YOUR PLANNER
          </p>

          <h2 className="mt-5 text-6xl font-serif text-[#2B2B2B]">
            Hi, I'm Kajal.
          </h2>

          <p className="mt-4 uppercase tracking-[0.3em] text-[#8A7247] text-sm">
            Founder of Halo & Pine
          </p>

          <div className="mt-10 space-y-6 text-gray-700 leading-8">
            <p>
              I believe every couple deserves to be fully present on their wedding
              day. After months or even years of planning, your focus shouldn't be
              on vendor arrivals, timeline changes, or the little details behind
              the scenes. That's where I come in.
            </p>

            <p>
              Halo & Pine was created with one purpose: to bring calm,
              thoughtful coordination to one of life's most meaningful
              celebrations. I believe the best weddings happen because someone
              is quietly ensuring everything flows with care, intention, and
              grace.
            </p>

            <p>
              My background in leadership and management has taught me how to
              stay organized, communicate clearly, and remain calm under
              pressure. Whether it's keeping your timeline on track, supporting
              your vendors, or solving unexpected challenges before you notice
              them, my priority is creating a day that feels effortless for you.
            </p>

            <p>
              Based in Port Coquitlam, BC, I work with couples who have poured
              their hearts into planning their wedding and simply want someone
              they can trust to bring it all together.
            </p>

            <p>
              It would be an honour to play a small part in the beginning of
              your next chapter.
            </p>

            <p className="font-serif text-xl text-[#8A7247]">
              God bless!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}