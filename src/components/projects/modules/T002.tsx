import Image from "next/image";
import { t_002 } from "../../../lib/projects/types/t_002";

const T002 = ({ data }: { data: t_002 }) => {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-2xl bg-background-secondary p-4 dark:bg-background-secondary-dark lg:flex-row lg:gap-8 lg:p-8">
      <div className="w-full break-words text-center lg:w-3/4 lg:text-left">
        <h2 className="mb-2 text-4xl font-extrabold">{data.title}</h2>
        <p className="whitespace-pre-line">{data.text}</p>
      </div>
      <Image
        className="aspect-video h-auto w-full rounded-md md:w-1/2"
        src={data.imageUrl}
        alt={data.text}
        width="1920"
        height="1080"
      />
    </div>
  );
};

export default T002;
