import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <link rel="icon" href="/vercel.png" /> {/* or /new-logo.png */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
