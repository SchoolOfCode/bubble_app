import { Providers } from "./providers";
import { UserIdProvider } from "./context/useridcontext"; 
import "../app/globals.css";

const metadata = {
  title: "Bubble App. Helping children's emotions",
  description: "Bubble App. Helping children's emotions",
  favicon: '/assets/icons/favicon.ico',
  alternate: {
    hrefLang: "en",
    href: "https://bubble-app-two.vercel.app/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href={metadata.favicon} />
    <title>{metadata.title}</title>
    </head>
      <body>
      <section className="sticky">
          <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </section>
        <Providers>
        <UserIdProvider>
        {children}
        </UserIdProvider>
        </Providers>
      </body>
    </html>
  );
}
