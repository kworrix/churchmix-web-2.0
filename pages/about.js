export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">About PraiseMix</h1>
      <p className="mt-4 text-gray-700">
        PraiseMix helps churches find vetted broadcast mix engineers and pay safely.
        We’re starting simple with a clean, reliable way to connect — and we’ll add features like
        scheduling and payments as we grow.
      </p>
      <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-1">
        <li>Church posts a need</li>
        <li>Engineers respond</li>
        <li>Church confirms and coordinates</li>
      </ul>
    </main>
  );
}
