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
        Velkommen til Hau's boligprisstatistikk
      </div>
      <div>
        <p className="flex items-center justify-center p-4">
          Under her kan du velge pris statistikk for de 6 største byene i Norge,
          du kan også se gjennomsnitt pris for hele Norge.
        </p>
      </div>

      <Statistikk />
      <p className="flex items-center justify-center p-4">
        Innholder i tabellen er hentet fra et JSON-fil &nbsp;
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          du kan se filen her
        </a>
        .
      </p>

      <Footer />
    </>
  );
}
