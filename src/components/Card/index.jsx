import { AiFillStar } from "react-icons/ai";
const Card = ({ title, image, score, episode, type, aired }) => {
  return (
    <div className="flex flex-col rounded shadow-xl p-3  w-[40vh] min-h-[50vh]">
      <div className="flex  justify-center items-center rounded-lg  ">
        <img
          className="w-full rounded h-80 object-contain aspect-ratio"
          src={image}
          alt="Mountain"
        />
      </div>
      <div className="p-3 flex flex-col w-full h-full justify-between">
        <div className="text-gray-700 text-base flex flex-col text-left">
          <div className="font-bold text-lg mb-2">{title}</div>
          <h1 className="text-gray-700 text-base">Episode : {episode}</h1>
          <h1 className="text-gray-700 text-base">Type : {type}</h1>
          <h1 className="text-gray-700 text-base">Aired : {aired}</h1>
        </div>
        <div className=" flex  items-center">
          <AiFillStar className="text-yellow-500 bottom-0" /> {score}
        </div>
      </div>
    </div>
  );
};

export default Card;
