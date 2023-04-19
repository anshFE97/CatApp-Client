import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

interface SuggestionsProps {
  inputValue?: string;
}

const Suggestions: React.FC<SuggestionsProps> = ({ inputValue }) => {
  const [cats, setCats] = useState<any>([]);
  const [filteredCats, setFilteredCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch("https://nekotime.onrender.com/all/breeds");
        const catsData = await response.json();
        localStorage.setItem("cats", JSON.stringify(catsData));
        setCats(catsData);
      } catch (error) {
        console.error(error);
      }
    };

    const cachedCats = localStorage.getItem("cats");
    if (cachedCats) {
      setCats(JSON.parse(cachedCats));
    } else {
      fetchCats();
    }
  }, []);

  useEffect(() => {
    setFilteredCats(
      cats.filter(
        (cat: any) =>
          cat?.name?.toLowerCase().includes(inputValue?.toLowerCase()) ||
          cat?.id?.toLowerCase().includes(inputValue?.toLowerCase())
      )
    );
  }, [cats, inputValue]);

  return (
    <div className="relative flex justify-center">
      <div className="absolute">
        {!inputValue ? (
          <ul className="md:w-[300px] lg:w-[400px] rounded-xl gap-2 flex flex-col bg-white text-black max-h-[240px] overflow-y-auto ">
            {cats.map((breed: any) => (
              <li key={breed.id} className="hover:bg-gray-500 cursor-pointer px-4 py-2 font-medium md:text-lg leading-5 text-black">
              <Link to={`/breed/${breed.id}`}>{breed.name}</Link>
            </li>
            ))}
          </ul>
        ) : (
          <ul className="md:w-[300px] lg:w-[400px] rounded-xl gap-2 flex flex-col bg-white text-black max-h-[240px] overflow-y-auto ">
            {filteredCats.map((breed: any) => (
              <li key={breed.id} className="hover:bg-gray-500 cursor-pointer px-4 py-2 font-medium md:text-lg leading-5 text-black">
              <Link to={`/breed/${breed.id}`}>{breed.name}</Link>
            </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Suggestions;
