import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Prompts Creator",
  description: "Crea y descubre prompts de ChatGPT",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
            <Nav />
            {children}
            </main>
      </body>
    </html>
  );
}

export default RootLayout;
