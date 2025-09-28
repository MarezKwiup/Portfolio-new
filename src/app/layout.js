import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
