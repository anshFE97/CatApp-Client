import { useEffect, useState } from "react";
import ImageBox from "./ImageBox"
import axios from "axios";
import { Link } from "react-router-dom";

interface Cat {
    id: string;
    name: string;
    description: string;
    temperament: string;
    origin: string;
    life_span: string;
    adaptability: number;
    affection_level: number;
    child_friendly: number;
    grooming: number;
    intelligence: number;
    health_issues: number;
    social_needs: number;
    stranger_friendly: number;
  }

const RandomCats = () => {
    const [cats, setCats] = useState<Cat[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://nekotime.onrender.com/all/breeds');
            const randomNumb = Math.floor(Math.random() * 51)
            const randoms = response.data.slice(randomNumb, randomNumb + 4)
            setCats(randoms);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
  return (
    <div className="flex justify-between flex-wrap">
         {cats.map((cat) => (
            <Link to={`/breed/${cat.id}`} key={cat.id}>
                <ImageBox  breed_id={cat.id} label={cat.name} />
            </Link>
         ))}
        </div>
  )
}
export default RandomCats