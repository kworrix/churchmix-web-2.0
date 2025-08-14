export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-xl space-y-4 rounded-xl bg-white p-6 shadow">
        <h1 className="text-3xl font-bold">About ChurchMix</h1>
        <p className="text-gray-700">
          ChurchMix helps churches find vetted broadcast mix engineers and pay safely.
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Church posts a job</li>
          <li>Engineers bid</li>
          <li>Church accepts & pays</li>
        </ul>
      </div>
    </main>
  );
}
