"use client";
import React, { useState, useEffect, useRef } from "react";

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

const columns = [
  { key: "Endring siste måned", label: "Endring siste måned" },
  {
    key: "Endring sesongjustert siste måned",
    label: "Endring sesongjustert siste måned",
  },
  { key: "Endring hittil i år", label: "Endring hittil i år" },
  { key: "Endring siste år", label: "Endring siste år" },
  { key: "Endring siste 5 år", label: "Endring siste 5 år" },
  { key: "Endring siste 10 år", label: "Endring siste 10 år" },
  { key: "Gjennomsnitt kvm. pris", label: "Gjennomsnitt kvm. pris" },
  { key: "Gjennomsnittspris", label: "Gjennomsnittspris" },
];

const Statistikk = () => {
  const [data, setData] = useState<Data | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedColumns, setSelectedColumns] = useState<string[]>(
    columns.map((col) => col.key)
  );
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/boligprisstatistikk.json");
      const jsonData: Data = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const handleColumnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const column = event.target.value;
    setSelectedColumns((prev) =>
      prev.includes(column)
        ? prev.filter((col) => col !== column)
        : [...prev, column]
    );
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const cities = Object.keys(data);

  return (
    <>
      <div className="flex items-center justify-center my-4 p-4">
        <select
          className="border border-gray-300 px-4 py-2 cursor-pointer"
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

      <div className="flex items-center justify-center my-4 p-4 relative">
        <button
          className="border border-gray-400 px-4 py-2 hover:bg-gray-200"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Velg kolonner
        </button>
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute mt-2 w-64 border border-gray-300 bg-white shadow-lg z-10"
          >
            {columns.map((col) => (
              <label key={col.key} className="block p-2">
                <input
                  type="checkbox"
                  value={col.key}
                  checked={selectedColumns.includes(col.key)}
                  onChange={handleColumnChange}
                  className="mr-2"
                />
                {col.label}
              </label>
            ))}
            <button
              className="w-full border-t border-gray-300 px-4 py-2 text-left"
              onClick={() => setDropdownOpen(false)}
            >
              Ferdig
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center p-4">
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">By</th>
              {selectedColumns.map((col) => (
                <th key={col} className="border border-gray-300 px-4 py-2">
                  {columns.find((c) => c.key === col)?.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(selectedCity ? [selectedCity] : cities).map((city) => (
              <tr key={city}>
                <td className="border border-gray-300 px-4 py-2">{city}</td>
                {selectedColumns.map((col) => (
                  <td key={col} className="border border-gray-300 px-4 py-2">
                    {data[city][col as keyof Data[string]]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Statistikk;
