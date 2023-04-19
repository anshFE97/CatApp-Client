import { useEffect, useState } from "react";
import CATS from "../assets/cat.jpg";
import axios from "axios";

interface CatModalProps {
  num: number;
  name: string;
  desc: string;
  breed_id: string;
}

const CatModal: React.FC<CatModalProps> = ({ num, name, desc, breed_id }) => {
  const [imageURL, setImageURL] = useState<string | null>(null);



  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://nekotime.onrender.com/cats/${breed_id}`
        );
        setImageURL(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImage();
  }, [breed_id]);

  return (
    <div className="flex gap-2">
      <div className="w-[170px] h-[170px] ">
        <img src={imageURL ? imageURL : CATS} alt="" className="rounded-xl w-full h-full object-cover" />
      </div>

      <div className="w-3/4 flex flex-col gap-2">
        <h2 className="font-semibold text-2xl text-gray-900 leading-[44px]">
          {num + 1}. {name}
        </h2>
        <p className="font-medium text-md leading-5 text-gray-900">{desc ? desc : 'A Cat'}</p>
      </div>
    </div>
  );
};
export default CatModal;
