import CatModal from "../components/CatModal"
import { useState, useEffect } from 'react';
import axios from 'axios';
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


const CatList = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://nekotime.onrender.com/all/breeds');
        setCats(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const topCats = cats.sort((cat1, cat2) => {
    const cat1Score =
      cat1.adaptability +
      cat1.affection_level +
      cat1.child_friendly +
      cat1.grooming +
      cat1.intelligence +
      cat1.health_issues +
      cat1.social_needs +
      cat1.stranger_friendly;
    const cat2Score =
      cat2.adaptability +
      cat2.affection_level +
      cat2.child_friendly +
      cat2.grooming +
      cat2.intelligence +
      cat2.health_issues +
      cat2.social_needs +
      cat2.stranger_friendly;
    return cat2Score - cat1Score;
  }).slice(0, 10);



  return (
    <div className="flex flex-col justify-center gap-4">
        <div className="font-bold text-4xl text-gray-900 leading-[44px]">Top 10 most searched breeds</div>
       <div className="flex flex-col gap-4">
       {topCats.map((topcat, id) => (
        <Link to={`/breed/${topcat.id}`} key={id}>
          <CatModal breed_id={topcat.id} num={id} name={topcat.name} desc={topcat.description} />
        </Link>
       ))}
       </div>
    </div>
  )
}
export default CatList