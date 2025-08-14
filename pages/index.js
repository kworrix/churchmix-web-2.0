export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Hello from ChurchMix</h1>
      <p>If you can see this page, the build worked 🎉</p>

      {/* The link must be INSIDE the component JSX */}
      <a className="underline" href="/about">About</a>
    </main>
  );
}
