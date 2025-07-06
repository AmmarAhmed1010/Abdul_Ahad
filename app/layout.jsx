import './globals.css';

export const metadata = {
  title: 'Web Development Services | Custom Websites',
  description: 'Professional web development services to help your business grow online. Get a custom website that converts visitors into customers.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  icons: {
    icon: '/vercel.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />

      <body>
        {children}
      </body>
    </html>
  );
}
