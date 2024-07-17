import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  const url = "https://www.linkedin.com/in/hau-duc-vu-712021152";
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center p-8">
        <p className="flex text-center justify-center ">
          {" "}
          Jeg er 30 år, fra Kristiansand, og er bosatt i Oslo. Jeg ble nettopp
          ferdig med IT-studiet ved Høyskolen Kristiania i juni 2024. Jeg er
          også utdannet optiker med rett til å rekvirere diagnostiske
          medikamenter. Jeg har jobbet som optiker i åtte år. I 2021 fant jeg ut
          at jeg ville prøve noe nytt og utfordre meg selv ved å studere IT på
          Høyskolen Kristiania. Jeg har kombinert optikeryrket med IT-studier de
          siste tre årene. I januar 2024 startet jeg som utvikler hos ECO STOR
          sammen med mine medstudenter. Vi skal hjelpe ECO STOR med å lage et
          brukergrensesnitt for sine kunder, som en del av vårt
          bachelorprosjekt. Etter endt bachelorprosjekt fikk alle tilbud om
          sommerjobb. Jeg skal være hos ECO STOR ut august 2024.
        </p>
      </div>
      <p className="flex text-center justify-center ml-1">
        Gjerne sjekk ut min
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline ml-1"
        >
          LinkedIn profil
        </a>
        <p className="flex text-center justify-center ml-1">
          {" "}
          for mer informasjon om meg.
        </p>
      </p>

      <Footer />
    </>
  );
};

export default page;
