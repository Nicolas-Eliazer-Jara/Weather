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
    <div className="bg-[#abc8a23b]  p-2 w-[80%] mx-auto shadow-[inset_+3px_+3px_5px_rgba(181,191,198,0.9)]  rounded-2xl">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="lg:p-1 sm:p-2 text-[#6E7F8D]  w-[80%] bg-transparent outline-none"
          placeholder="Search for location"
          type="text"
          value={inputVal}
        />
        <button
          type="submit"
          className="p-2 rounded-2xl bg-[#EFF2F9] text-[#6E7F8D] ml-1     min-w-[19%] shadow-[_+3px_+3px_5px_2px_rgba(181,191,198,10)] active:bg-[#abc8a2] active:text-[#EFF2F9]  active:shadow-[inset_+3px_+3px_5px_rgba(181,191,198,10)] "
        >
          Buscar
        </button>
      </form>


    </div>
  );
}
