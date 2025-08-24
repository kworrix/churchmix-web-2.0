export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">How PraiseMix Works</h1>
      <p className="mt-4 text-gray-700">
        PraiseMix makes it simple for churches to connect with skilled broadcast mix engineers for remote services.
        Post a job, choose your engineer, then connect through RemoteMix to get a clean, professional broadcast mix.
      </p>

      {/* How it works */}
      <section className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold">Step-by-Step</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-800">
          <li>
            <span className="font-medium">Church posts a job.</span> Create a request for a set time window
            (e.g., <em>Sunday 10:00–12:00</em>). Include your service details, soundboard model, and any special needs.
          </li>
          <li>
            <span className="font-medium">Engineers bid.</span> Qualified engineers submit their availability and rate.
            Compare profiles, experience, and price to pick the best fit.
          </li>
          <li>
            <span className="font-medium">Connect via RemoteMix.</span> After you select an engineer, both sides use
            <span className="font-semibold"> RemoteMix</span> to establish a secure, low-latency audio link for mixing.
          </li>
        </ol>
      </section>

      {/* Requirements */}
      <section className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">What Churches Need</h3>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-800">
            <li>A <span className="font-medium">digital soundboard</span> that can send stems or multitrack outputs to RemoteMix.</li>
            <li>Stable <span className="font-medium">internet</span> at the venue.</li>
            <li>An onsite helper to confirm the console is routed and sending audio correctly.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">What Engineers Need</h3>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-800">
            <li>A quality <span className="font-medium">mixing setup</span>: capable computer + DAW/mixing tools.</li>
            <li>Reliable <span className="font-medium">internet</span> for the RemoteMix session.</li>
            <li>Accurate monitoring (good headphones and/or studio monitors).</li>
            <li>Experience with live/broadcast mixing to adapt quickly to the church’s style.</li>
          </ul>
        </div>
      </section>

      {/* Outcome */}
      <section className="mt-12">
        <h3 className="text-lg font-semibold">The Outcome</h3>
        <p className="mt-3 text-gray-700">
          Churches get a clear, consistent broadcast mix without needing an in-house specialist. Engineers gain meaningful
          opportunities to serve remotely. PraiseMix keeps the process simple—posting, selecting, connecting, and handling
          communication and payments—so everyone can focus on what matters.
        </p>
      </section>

      {/* CTAs */}
      <section className="mt-12 flex flex-wrap gap-3">
        <a href="/signup/church" className="inline-flex items-center rounded-lg bg-black px-5 py-3 text-white no-underline">
          Church Sign Up
        </a>
        <a href="/signup/engineer" className="inline-flex items-center rounded-lg border px-5 py-3 bg-white text-gray-900 no-underline">
          Engineer Sign Up
        </a>
      </section>
    </main>
  );
}
