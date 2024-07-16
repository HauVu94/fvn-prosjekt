import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Statistikk from "@/components/Statistikk";

export default async function Home() {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center text-xl p-4">
        Velkommen til Hau's boligprisstatistikk
      </div>
      <div>
        <p className="flex items-center justify-center p-4">
          Under her kan du velge pris statistikk for de 6 største byene i Norge,
          du kan også se gjennomsnitt pris for hele Norge
        </p>
      </div>

      <Statistikk />
      <Footer />
    </>
  );
}
