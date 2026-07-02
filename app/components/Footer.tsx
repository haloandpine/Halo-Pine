export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-16">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-3xl font-serif">
              Halo & Pine
            </h3>

            <p className="mt-5 text-gray-400 leading-8">
              Thoughtful wedding coordination for couples who want to be fully
              present on their wedding day.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.3em] text-[#C8B48A] text-sm">
              Navigation
            </h4>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>Home</li>
              <li>Services</li>
              <li>Meet Your Planner</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.3em] text-[#C8B48A] text-sm">
              Contact
            </h4>

            <p className="mt-6 text-gray-300">
              Port Coquitlam, BC
            </p>

            <p className="mt-2 text-gray-300">
              hello@haloandpine.com
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          © 2026 Halo & Pine. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}