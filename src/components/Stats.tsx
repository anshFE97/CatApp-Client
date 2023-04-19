interface StatsProps{
    title: string
    likes: number;
}

const Stats: React.FC<StatsProps> = ({ title, likes }) => {
    const blackCount = Math.floor(likes);
    
    return (
      <div className="flex gap-4 items-center flex-wrap md:flex-nowrap">
        <h3 className="font-bold text-base leading-5">{title}:</h3>
          <div className="flex justify-center items-center">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`w-[30px] h-[6px] mx-1 rounded flex-shrink-0 ${
                index < blackCount ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
          </div>
      </div>
    );
  }
  
  export default Stats;