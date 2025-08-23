export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Connecting churches with expert broadcast mix engineers.
          </h1>
          <p className="text-lg text-gray-700">
            PraiseMix is a simple way for churches to find vetted engineers for remote broadcast mix services — fast,
            reliable, safe.
          </p>
          <div className="flex gap-3">
            <a href="/contact" className="inline-flex items-center rounded-lg bg-black text-white px-5 py-3 no-underline">
              Get in touch
            </a>
            <a href="/about" className="inline-flex items-center rounded-lg border px-5 py-3 bg-white text-gray-900 no-underline">
              Learn more
            </a>
          </div>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <img src="/praisemix.jpg" alt="PraiseMix" className="w-full h-auto rounded-lg" />
        </div>
      </section>
      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-white p-6">
          <h3 className="font-semibold text-lg">Post a need</h3>
          <p className="text-gray-700 text-sm">Share service times and requirements. We’ll help surface qualified engineers.</p>
        </div>
        <div className="rounded-xl border bg-white p-6">
          <h3 className="font-semibold text-lg">Pick the pro</h3>
          <p className="text-gray-700 text-sm">Engineers express interest with availability and rates; you choose the best fit.</p>
        </div>
        <div className="rounded-xl border bg-white p-6">
          <h3 className="font-semibold text-lg">Serve with confidence</h3>
          <p className="text-gray-700 text-sm">Clear expectations and easy communication. Payments handled securely.</p>
        </div>
      </section>
    </main>
  );
}
