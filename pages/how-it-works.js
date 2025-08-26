export default function HowItWorks() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold">How It Works</h1>
      <p className="mt-4 text-gray-700">
        Post a job, choose your engineer, then connect through RemoteMix to deliver a clear, consistent broadcast mix.
      </p>

      {/* Visual step diagram */}
      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center font-semibold">1</div>
            <h3 className="text-lg font-semibold">Post a Job</h3>
          </div>
          <p className="mt-3 text-gray-700">
            Create a request for a set time window (e.g., <em>Sunday 10–12</em>). Include console model, service details, and any special needs.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center font-semibold">2</div>
            <h3 className="text-lg font-semibold">Engineers Bid</h3>
          </div>
          <p className="mt-3 text-gray-700">
            Qualified engineers submit availability and rates. Compare profiles to choose the best fit.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center font-semibold">3</div>
            <h3 className="text-lg font-semibold">Connect via RemoteMix</h3>
          </div>
          <p className="mt-3 text-gray-700">
            After selection, both sides connect devices through <span className="font-medium">RemoteMix</span> for a secure, low-latency session.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">What Churches Need</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-800">
            <li>A <span className="font-medium">digital soundboard</span> that can send stems or multitrack outs to RemoteMix.</li>
            <li>Stable <span className="font-medium">internet</span> at the venue.</li>
            <li>An onsite helper to confirm routing and signal.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">What Engineers Need</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-800">
            <li>A quality <span className="font-medium">mix setup</span>: capable computer + DAW/mixing tools.</li>
            <li>Reliable <span className="font-medium">internet</span> for RemoteMix.</li>
            <li>Accurate monitoring (good headphones and/or studio monitors).</li>
            <li>Experience with live/broadcast mixing.</li>
          </ul>
        </div>
      </section>

      {/* Timeline strip */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Typical Timeline</h2>
        <div className="mt-4 overflow-x-auto">
          <ol className="min-w-[640px] grid grid-cols-4 items-center text-sm">
            <li className="relative flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-black inline-block" />
              Post job
              <span className="mx-2 h-[2px] bg-gray-300 w-full inline-block" />
            </li>
            <li className="relative flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-black inline-block" />
              Receive bids
              <span className="mx-2 h-[2px] bg-gray-300 w-full inline-block" />
            </li>
            <li className="relative flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-black inline-block" />
              Select engineer
              <span className="mx-2 h-[2px] bg-gray-300 w-full inline-block" />
            </li>
            <li className="relative flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-black inline-block" />
              Connect & mix
            </li>
          </ol>
        </div>
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
