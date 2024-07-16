import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Statistikk from "@/components/Statistikk";

export default async function Home() {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center text-xl">
        Velkommen til Hau's boligprisstatistikk
      </div>
      <div>
        <p className="flex items-center justify-center ">
          Under her kan du velge pris statistikk for de 6 største byene i Norge,
          du kan også se gjennomsnitt pris for hele Norge
        </p>
      </div>

      <Statistikk />
      <Footer />
    </>
  );
}
