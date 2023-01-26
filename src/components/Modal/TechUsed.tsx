import { AiFillSetting } from "react-icons/ai";
import SkillTechnologyBtn from "../SkillTechnologyBtn";

type TechUsedProps = {
  techUsed: Array<string>;
};

function TechUsed({ techUsed }: TechUsedProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-5">
        <AiFillSetting size={25} className="fill-side" />
        <p className="text-xl lg:text-3xl sm:text-2xl">Tech used</p>
      </div>
      {/* Put this in a seperate component */}
      <ul className="grid grid-cols-2 gap-5">
        {techUsed.map((tech) => (
          <SkillTechnologyBtn key={tech} content={tech} />
        ))}
      </ul>
    </div>
  );
}

export default TechUsed;
