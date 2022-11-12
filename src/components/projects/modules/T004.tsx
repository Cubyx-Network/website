import { t_004 } from "../../../lib/projects/types/t_004";
import Image from "next/image";

const T004 = ({ data }: { data: t_004 }) => {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-2xl bg-background-secondary p-4 dark:bg-background-secondary-dark lg:flex-row lg:gap-8 lg:p-8">
      <div className="flex w-full flex-col gap-4 md:w-1/2">
        <Image
          className="aspect-video h-auto w-full rounded-md"
          src={data.imageUrl_1}
          alt={data.text}
          width="1920"
          height="1080"
        />
        <Image
          className="aspect-video h-auto w-full rounded-md"
          src={data.imageUrl_2}
          alt={data.text}
          width="1920"
          height="1080"
        />
      </div>
      <div className="w-full break-words text-center lg:w-3/4 lg:text-right">
        <h2 className="mb-2 text-4xl font-extrabold">{data.title}</h2>
        <p className="whitespace-pre-line">{data.text}</p>
      </div>
    </div>
  );
};

export default T004;
