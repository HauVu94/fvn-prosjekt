"use client";
import React, { useState, useEffect } from "react";

type Data = {
  [key: string]: {
    "Endring siste måned": number;
    "Endring sesongjustert siste måned": number;
    "Endring hittil i år": string;
    "Endring siste år": number;
    "Endring siste 5 år": number;
    "Endring siste 10 år": number;
    "Gjennomsnitt kvm. pris": string;
    Gjennomsnittspris: string;
  };
};

const Statistikk = () => {
  const [data, setData] = useState<Data | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/boligprisstatistikk.json");
      const jsonData: Data = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const cities = Object.keys(data);

  return (
    <>
      <div className="flex items-center justify-center my-4 p-4">
        <select
          className="border border-gray-300 px-4 py-2"
          value={selectedCity}
          onChange={handleCityChange}
        >
          <option value="">Alle byer/Norge</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-center p-4">
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">By</th>
              <th className="border border-gray-300 px-4 py-2">
                Endring siste måned
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Endring sesongjustert siste måned
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Endring hittil i år
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Endring siste år
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Endring siste 5 år
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Endring siste 10 år
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Gjennomsnitt kvm. pris
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Gjennomsnittspris
              </th>
            </tr>
          </thead>
          <tbody>
            {(selectedCity ? [selectedCity] : cities).map((city) => (
              <tr key={city}>
                <td className="border border-gray-300 px-4 py-2">{city}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {data[city]["Endring siste måned"]}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data[city]["Endring sesongjustert siste måned"]}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data[city]["Endring hittil i år"]}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data[city]["Endring siste år"]}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data[city]["Endring siste 5 år"]}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data[city]["Endring siste 10 år"]}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data[city]["Gjennomsnitt kvm. pris"]}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data[city]["Gjennomsnittspris"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Statistikk;
