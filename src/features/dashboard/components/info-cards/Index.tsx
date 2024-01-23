import { ReactNode } from "react";

interface InfoCardsProps {
  title: string;
  stats: string;
  percent: string;
  button: ReactNode;
}

const InfoCards = ({ button, title, stats, percent }: InfoCardsProps) => {
  return (
    <div className="bg-white p-4 lg:p-5 lg:pb-4 rounded h-max min-w-[160px] md:min-w-[170px] lg:min-w-0 w-full relative">
      {button}
      <p className="mt-[40px] mb-3 lg:px-3 px-1 text-body-xs lg:text-body-sm uppercase text-grey-40">
        {title}
      </p>
      <div className="flex items-end gap-2.5 lg:px-3 px-1 py-1">
        <h3 className="lg:text-headline-md lg:text-[27px] text-headline-xs text-grey-90">
          {stats}
        </h3>
        <p className="text-body-xs lg:text-body-sm text-variant-success mb-1">
          {percent}
        </p>
      </div>
    </div>
  );
};

export default InfoCards;
