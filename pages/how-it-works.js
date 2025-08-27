export default function HowItWorks() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold">How It Works</h1>
      <p className="mt-4 text-gray-700">
        Post a job, choose your engineer, then connect through RemoteMix to deliver a clear, consistent broadcast mix.
      </p>

      {/* Step cards */}
      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {/* Step 1 */}
        <div className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3">
            {/* Circle number (pure CSS) */}
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white font-semibold">
              1
            </span>
            <h3 className="text-lg font-semibold">Post a Job</h3>
          </div>
          <p className="mt-3 text-gray-700">
            Create a request for a set time window (e.g., <em>Sunday 10–12</em>). Include console model, service details,
            and any special needs.
          </p>
          {/* tiny underline flourish on hover (pure CSS) */}
          <span className="mt-4 block h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-16" />
        </div>

        {/* Step 2 */}
        <div className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white font-semibold">
              2
            </span>
            <h3 className="text-lg font-semibold">Engineers Bid</h3>
          </div>
          <p className="mt-3 text-gray-700">
            Qualified engineers submit availability and rates. Compare profiles to choose the best fit.
          </p>
          <span className="mt-4 block h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-16" />
        </div>

        {/* Step 3 */}
        <div className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white font-semibold">
              3
            </span>
            <h3 className="text-lg font-semibold">Connect via RemoteMix</h3>
          </div>
          <p className="mt-3 text-gray-700">
  After selection, your engineer hosts a <span className="font-medium">RemoteMix</span> session and guides a quick sound-check.
  It’s a secure, low-latency link that keeps your mix consistent and clear.
</p>

          <span className="mt-4 block h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-16" />
        </div>
      </section>

<p className="mt-6 text-sm text-gray-600">
  Don’t sweat the tech — your engineer leads the connection. If you have a digital console and stable internet,
  you’re already most of the way there.
</p>

  

      {/* Requirements */}
      <section className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-xl font-semibold">What Churches Need</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-800">
            <li>
              A <span className="font-medium">digital soundboard</span> that can send stems or multitrack outs to RemoteMix.
            </li>
            <li>Stable <span className="font-medium">internet</span> at the venue.</li>
            <li>An onsite helper to confirm routing and signal.</li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-xl font-semibold">What Engineers Need</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-800">
            <li>
              A quality <span className="font-medium">mix setup</span>: capable computer + DAW/mixing tools.
            </li>
            <li>Reliable <span className="font-medium">internet</span> for RemoteMix.</li>
            <li>Accurate monitoring (headphones and/or studio monitors).</li>
            <li>Experience with live/broadcast mixing.</li>
          </ul>
        </div>
      </section>

      {/* Timeline (pure CSS dots & connectors) */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Typical Timeline</h2>
        <div className="mt-6 overflow-x-auto">
          <ol className="min-w-[720px] grid grid-cols-4 items-center text-sm">
            {/* Each step: dot + label + connector line (except last) */}
            <li className="relative flex items-center gap-3">
              <span className="inline-block h-3 w-3 rounded-full bg-black" />
              <span>Post job</span>
              <span className="mx-3 h-[2px] w-full bg-gray-300" />
            </li>
            <li className="relative flex items-center gap-3">
              <span className="inline-block h-3 w-3 rounded-full bg-black" />
              <span>Receive bids</span>
              <span className="mx-3 h-[2px] w-full bg-gray-300" />
            </li>
            <li className="relative flex items-center gap-3">
              <span className="inline-block h-3 w-3 rounded-full bg-black" />
              <span>Select engineer</span>
              <span className="mx-3 h-[2px] w-full bg-gray-300" />
            </li>
            <li className="relative flex items-center gap-3">
              <span className="inline-block h-3 w-3 rounded-full bg-black" />
              <span>Connect &amp; mix</span>
            </li>
          </ol>
        </div>
      </section>


<section className="mt-12">
  <h2 className="text-xl font-semibold">FAQs</h2>
  <div className="mt-4 space-y-4 text-gray-800">
    <div>
      <p className="font-medium">Do we need a RemoteMix account?</p>
      <p className="text-gray-700">
        Your engineer can host the session and share the link. If a separate account helps your workflow later, we’ll guide you.
      </p>
    </div>
    <div>
      <p className="font-medium">What if our console is older?</p>
      <p className="text-gray-700">
        Many digital boards can send stems or a stereo bus. Your engineer will recommend the simplest routing for your setup.
      </p>
    </div>
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
