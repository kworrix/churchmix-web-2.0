export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif', textAlign: 'center' }}>
      <img 
        src="/logo.jpeg" 
        alt="PraiseMix Logo" 
        style={{ maxWidth: '240px', marginBottom: '24px' }} 
      />
      <h1>Welcome to PraiseMix</h1>
      <p>Connecting churches with top broadcast mix engineers.</p>
      <a className="underline" href="/about">About</a>
    </main>
  );
}
