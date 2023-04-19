import { useEffect, useState } from 'react';
import Cat from '../assets/cat.jpg'
import axios from 'axios';

interface ImageBoxProps {
  breed_id: string | any
  label?: string
}

const ImageBox: React.FC<ImageBoxProps> = ({breed_id, label}) => {
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
    <div className='flex flex-col w-[160px]  sm:w-[200px] md:w-[240px] 
    h-[160px]  sm:h-[200px] md:h-[240px] 
    rounded-xl mb-3'>
        <img src={imageURL ? imageURL : Cat} alt="cat" className='rounded-xl w-full h-full object-cover ' />
        <span className='font-[600] leading-[42px]'>{label ? label : "Cat"}</span>
    </div>
  )
}
export default ImageBox