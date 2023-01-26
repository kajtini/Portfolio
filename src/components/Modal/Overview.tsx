import { GiNotebook } from "react-icons/gi";

type OverviewProps = {
  overview: string;
};

function Overview({ overview }: OverviewProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        <GiNotebook size={25} className="fill-side" />
        <p className="text-xl lg:text-3xl sm:text-2xl">Overview</p>
      </div>
      <p className="opacity-70 leading-7 text-sm lg:text-lg lg:leading-9 sm:text-base sm:leading-8">
        {overview}
      </p>
    </div>
  );
}

export default Overview;
