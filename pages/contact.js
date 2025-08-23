export default function Contact() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-700">Send us a message and we’ll get back to you.</p>

      <form action="#" method="POST" className="mt-6 space-y-4 max-w-lg">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your email</label>
          <input id="email" name="email" type="email" required
                 className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" required rows="5"
                    className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
        </div>
        <button type="submit"
                className="rounded-lg bg-black px-5 py-2.5 text-white">
          Send
        </button>
      </form>
    </main>
  );
}
