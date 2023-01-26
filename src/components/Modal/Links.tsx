import { FaLink } from "react-icons/fa";
import LinksBtn from "./LinksBtn";

type LinksProps = {
  liveLink: string;
  repoLink: string;
};

function Links({ liveLink, repoLink }: LinksProps) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-5">
        <FaLink size={25} className="fill-side" />
        <p className="text-xl lg:text-3xl">Links</p>
      </div>
      <div className="flex gap-4">
        <LinksBtn type="live" liveLink={liveLink} repoLink={repoLink} />
        <LinksBtn type="repo" liveLink={liveLink} repoLink={repoLink} />
      </div>
    </div>
  );
}

export default Links;
