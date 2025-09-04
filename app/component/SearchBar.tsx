"use client";
import { useState } from "react";
import { Search } from "lucide-react";

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

    onSearch(city);
    setInputVal("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center w-[85%] mx-auto mt-4 bg-white/70 backdrop-blur-md shadow-md rounded-2xl px-3 py-2"
    >
      <Search className="w-5 h-5 text-gray-400 mr-2" />
      <input
        onChange={handleChange}
        value={inputVal}
        type="text"
        placeholder="Buscar ciudad..."
        className="flex-1 p-2 outline-none text-gray-700 placeholder-gray-400"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-xl bg-[#d3b7d5] hover:bg-[#6d2040]  font-semibold hover:text-[#d3b7d5] text-[#6d2040] transition "
      >
        Buscar
      </button>
    </form>
  );
}
