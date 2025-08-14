import './globals.css';

export const metadata = { title: 'ChurchMix', description: 'Church ↔ Broadcast Mix Engineer' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
