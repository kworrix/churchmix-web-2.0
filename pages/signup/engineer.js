export default function EngineerSignup() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold">Engineer Sign Up</h1>
      <p className="mt-2 text-gray-700">
        Join the PraiseMix network. Share your skills and availability to get matched with churches.
      </p>

      {/* Replace action="#" with your Formspree endpoint when ready */}
      <form action="#" method="POST" className="mt-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">Your name</label>
            <input id="name" name="name" required className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="location">Location (city, state)</label>
          <input id="location" name="location" className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="skills">
            Skills / Tools
          </label>
          <input id="skills" name="skills" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="DAWs, consoles, plugins, streaming platforms, etc." />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="experience">Years of experience</label>
            <input id="experience" name="experience" type="number" min="0" className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="rate">Typical rate (optional)</label>
            <input id="rate" name="rate" placeholder="$ / service" className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="availability">Availability</label>
          <input id="availability" name="availability" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Sundays AM, weeknights, etc." />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="links">Portfolio / links</label>
          <input id="links" name="links" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Website, mixes, LinkedIn, etc." />
        </div>

        <button type="submit" className="rounded-lg bg-black px-5 py-2.5 text-white">
          Submit
        </button>
      </form>
    </main>
  );
}
