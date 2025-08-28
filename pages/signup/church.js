export default function ChurchSignup() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold">Church Sign Up</h1>
      <p className="mt-2 text-gray-700">
        Tell us a bit about your church and service needs. We’ll follow up with next steps.
      </p>

      {/* Replace action="#" with your Formspree endpoint when ready */}
      <form action="#" method="POST" className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="churchName">Church name</label>
          <input id="churchName" name="churchName" required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="contactName">Your name</label>
            <input id="contactName" name="contactName" required className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="city">City</label>
            <input id="city" name="city" className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="state">State</label>
            <input id="state" name="state" className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="serviceTimes">
            Service times / dates
          </label>
          <input id="serviceTimes" name="serviceTimes" placeholder="Sundays 9am & 11am; Rehearsal Thu 6pm" className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="needs">
            Tell us what you need
          </label>
          <textarea id="needs" name="needs" rows="5" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Broadcast mix, platform (RemoteMix?), number of inputs, DAW, etc." />
        </div>

        <button type="submit" className="rounded-lg bg-black px-5 py-2.5 text-white">
          Submit
        </button>
      </form>
    </main>
  );
}
