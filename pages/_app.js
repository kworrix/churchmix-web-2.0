import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
          <a href="/" className="flex items-center gap-3 no-underline text-inherit">
            <img src="/praisemix.jpg" alt="PraiseMix Logo" className="h-10 w-auto rounded-md" />
            <span className="font-semibold text-lg text-gray-900">PraiseMix</span>
          </a>
          <nav className="ml-auto flex items-center gap-5">
  <a href="/" className="no-underline">Home</a>
  <a href="/about" className="no-underline">About</a>
  <a href="/contact" className="no-underline">Contact</a>
  <a href="/signup/church" className="no-underline">Church Sign Up</a>
  <a href="/signup/engineer" className="no-underline">Engineer Sign Up</a>
</nav>

        </div>
      </header>
      <Component {...pageProps} />
      <footer className="mt-16 border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} PraiseMix. All rights reserved.
        </div>
      </footer>
    </>
  );
}
