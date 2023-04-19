import { useEffect, useState } from "react";
import axios from "axios";
import Stats from "../components/Stats";
import { useParams } from 'react-router-dom'
import BreedImage from "../components/BreedImage";
import CatImg from '../assets/cat.jpg'

const CatDetail = () => {
  const [dat, setData] = useState<String[]>([]);
  let iSrc;
  if (dat) iSrc = dat[0];

  const [neko, setNeko] = useState<any>("");

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://nekotime.onrender.com/breed/${id}`);
        setNeko(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const breedName = neko.id;
      try {
        const response = await axios.get(
          `https://nekotime.onrender.com/images/${breedName}`
        );
        const imageUrls = response.data
        setData(imageUrls);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [neko]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row justify-center px-6 lg:px-16">
        <div className="lg:w-4/12 flex justify-evenly">
          <BreedImage  imageSrc={iSrc ? iSrc : CatImg} />
        </div>

        <div className="flex flex-col gap-3 lg:w-8/12">
          <h1 className="font-semibold text-4xl text-gray-900 leading-[44px]">
            {neko.name}
          </h1>
          <p className="font-medium text-lg leading-5 text-gray-900">
            {neko.description}
          </p>

          <div className="flex gap-4 items-center flex-wrap md:flex-nowrap">
            <h3 className="font-bold text-base leading-5">Temperament:</h3>
            <span>{neko.temperament}</span>
          </div>

          <div className="flex gap-4 items-center flex-wrap md:flex-nowrap">
            <h3 className="font-bold text-base leading-5">Origin:</h3>
            <span>{neko.origin}</span>
          </div>

          <div className="flex gap-4 items-center flex-wrap md:flex-nowrap">
            <h3 className="font-bold text-base leading-5">Life Span:</h3>
            <span>{neko.life_span}</span>
          </div>

          <div className="flex flex-col  gap-4">
            <Stats title="Adaptability" likes={neko.adaptability} />

            <Stats title="Affection Level" likes={neko.affection_level} />

            <Stats title="Child Friendly" likes={neko.child_friendly} />

            <Stats title="Grooming" likes={neko.grooming} />

            <Stats title="Intelligence" likes={neko.intelligence} />

            <Stats title="Health Issues" likes={neko.health_issues} />

            <Stats title="Social Needs" likes={neko.social_needs} />

            <Stats title="Stranger Friendly" likes={neko.stranger_friendly} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-4xl text-gray-900 leading-[44px]">
          Other Photos
        </h2>
        <div className="flex flex-wrap gap-4 justify-around">
          {dat.map((da: any, id: any) => (
            <BreedImage imageSrc={da ? da : CatImg} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CatDetail;
