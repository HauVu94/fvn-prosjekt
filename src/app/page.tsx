import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Statistikk from "@/components/Statistikk";

export default async function Home() {
  const url =
    "https://ommu1982.pythonanywhere.com/static/boligprisstatistikk.json";
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center text-2xl  p-4">
        Velkommen til min boligprisstatistikk-side.
      </div>
      <div>
        <p className="flex items-center justify-center p-4">
          Her kan du velge prisstatistikk for de 6 største byene i Norge. Du kan
          også se gjennomsnittsprisen for hele Norge.
        </p>
      </div>

      <Statistikk />
      <p className="flex items-center justify-center p-4">
        Innholdet i tabellen er hentet fra en JSON-fil
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline ml-1"
        >
          du kan se filen her
        </a>
        .
      </p>

      <Footer />
    </>
  );
}
