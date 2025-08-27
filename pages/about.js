export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">About PraiseMix</h1>

      <p className="mt-4 text-gray-700">
        At PraiseMix, we believe every church deserves a clear, reliable broadcast mix—
        whether you’re streaming to a few families at home or thousands across the world.
      </p>

      <p className="mt-4 text-gray-700">
        Too often, churches rely on volunteers who are passionate but under-trained, or
        on a single overworked staff member who can’t be everywhere at once. The result?
        Inconsistent sound that distracts from the message.
      </p>

      <p className="mt-4 text-gray-700">
        That’s why we built PraiseMix: a simple way for churches to connect with skilled,
        independent broadcast mix engineers. These engineers bring the technical expertise,
        the right tools, and a heart to serve—so you can focus on ministry instead of worrying
        about the mix.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Our Mission</h2>
        <p className="mt-3 text-gray-700">
          We exist to make professional-quality broadcast mixing accessible to every church,
          no matter the size. By creating a network of trusted engineers, we help ministries
          sound their best while giving engineers meaningful opportunities to serve and earn.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Why It Matters</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-800">
          <li>
            <span className="font-medium">For churches:</span> A clear mix helps your
            congregation engage more deeply, whether they’re in the room or online.
          </li>
          <li>
            <span className="font-medium">For engineers:</span> A chance to use your skills
            in ministry, reach more churches, and support yourself doing work you love.
          </li>
          <li>
            <span className="font-medium">For everyone:</span> The message is heard, free
            from distraction, with sound that matches the spirit of the service.
          </li>
        </ul>
      </section>

      <section className="mt-12 flex flex-wrap gap-3">
        <a
          href="/signup/church"
          className="inline-flex items-center rounded-lg bg-black px-5 py-3 text-white no-underline"
        >
          Church Sign Up
        </a>
        <a
          href="/signup/engineer"
          className="inline-flex items-center rounded-lg border px-5 py-3 bg-white text-gray-900 no-underline"
        >
          Engineer Sign Up
        </a>
      </section>
    </main>
  );
}
