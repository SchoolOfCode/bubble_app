import { Providers } from "./providers";
import { UserIdProvider } from "./context/useridcontext"; 
import { MoodDataProvider } from "./context/dataforchartscontext";
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
    <meta name={metadata.description} content={metadata.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <MoodDataProvider>
        <UserIdProvider>
        {children}
        </UserIdProvider>
        </MoodDataProvider>
        </Providers>
      </body>
    </html>
  );
}
