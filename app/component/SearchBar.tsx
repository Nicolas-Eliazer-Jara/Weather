"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [inputVal, setInputVal] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const city = inputVal.trim();

    if (!city) {
      alert("Por favor ingrese una ciudad");
      return;
    }

    console.log("Buscando ciudad:", city);
    onSearch(city); // se envía la ciudad limpia
    setInputVal(""); // opcional: limpia el input después de buscar
  };

  return (
    <div className="bg-[#faf2e6] p-2  w-[80%] mx-auto shadow-inner shadow-gray-300  rounded-2xl">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="p-2 text-black  w-[80%] bg-transparent outline-none"
          placeholder="Search for location"
          type="text"
          value={inputVal}
        />
        <button
          type="submit"
          className="p-2 rounded-2xl  text-black ml-2  w-[19%] shadow-2xl shadow-gray-500  hover:shadow-inner hover:shadow-gray-300"
        >
          Buscar
        </button>
      </form>
    
    </div>
  );
}
