import { FaBrain } from "react-icons/fa";

type LearnedProps = {
  learned: string;
};

function Learned({ learned }: LearnedProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        <FaBrain size={25} className="fill-side" />
        <p className="text-xl lg:text-3xl sm:text-2xl">What I Learned?</p>
      </div>
      <p className="opacity-70 leading-7 text-sm lg:text-lg lg:leading-9 sm:text-base sm:leading-8">
        {learned}
      </p>
    </div>
  );
}

export default Learned;
