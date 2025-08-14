export default function Contact() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Contact</h1>
      <p>Send us a message and we’ll get back to you.</p>

      <form action="https://formspree.io/f/mblkbyko" method="POST" style={{ marginTop: 16, maxWidth: 480 }}>
        <label htmlFor="email">Your email</label><br/>
        <input id="email" name="email" type="email" required style={{ width:'100%', padding:8, margin:'6px 0 12px', border:'1px solid #ccc', borderRadius:6 }} />

        <label htmlFor="message">Message</label><br/>
        <textarea id="message" name="message" required rows="5" style={{ width:'100%', padding:8, margin:'6px 0 12px', border:'1px solid #ccc', borderRadius:6 }} />

        <button type="submit" style={{ padding:'8px 14px', borderRadius:8, background:'#000', color:'#fff' }}>
          Send
        </button>
      </form>
    </main>
  );
}
