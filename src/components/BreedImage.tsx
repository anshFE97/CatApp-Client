import { SetStateAction, useState } from "react";
import { GrClose } from 'react-icons/gr'

interface BreedImageProps {
  imageSrc: any;
}

const BreedImage: React.FC<BreedImageProps> = ({ imageSrc }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div
        className="flex flex-col w-[160px]  sm:w-[200px] md:w-[240px] 
    h-[160px]  sm:h-[200px] md:h-[240px] 
    rounded-xl mb-3"
      >
        <img
          src={imageSrc}
          alt="cat"
          className="rounded-xl w-full h-full object-cover hover:scale-110 transition cursor-pointer"
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <GrClose onClick={() => setShowModal(false)} size={28} className="cursor-pointer hover:opacity-40 z-99 text-black absolute top-10 right-10"/>
          <div className="bg-white p-8 rounded-lg">
            <img src={imageSrc} alt="cat" className="w-full h-full object-cover" />
          </div>
        </div>
      )}
    </div>
  );
};
export default BreedImage;
