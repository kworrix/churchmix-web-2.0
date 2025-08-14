import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 24px',
        borderBottom: '1px solid #eee',
        fontFamily: 'system-ui, sans-serif'
      }}>
        {/* Logo links back to home */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
          <img
            src="/logo.jpeg"
            alt="PraiseMix Logo"
            style={{ height: 40, marginRight: 12 }}
          />
          <span style={{ fontSize: 20, fontWeight: 600 }}>PraiseMix</span>
        </a>

        {/* Navigation links */}
        <nav>
          <a href="/" style={{ marginRight: 16 }}>Home</a>
          <a href="/about" style={{ marginRight: 16 }}>About</a>
          <a href="/contact" className="underline">Contact</a>
        </nav>
      </header>

      {/* Page content */}
      <Component {...pageProps} />
    </>
  );
}
