import { t_001 } from "../../../lib/projects/types/t_001";
import Image from "next/image";

const T001 = ({ data }: { data: t_001 }) => {
  return (
    <div className="grid h-96 w-full grid-cols-2 grid-rows-1 items-center justify-items-center gap-8 rounded-2xl bg-background-secondary p-4 dark:bg-background-secondary-dark">
      <Image
        className="aspect-video h-full w-auto p-4"
        src={data.imageUrl}
        alt={data.text}
        width="1920"
        height="1080"
        layout={"responsive"}
      />
      <p>{data.text}</p>
    </div>
  );
};

export default T001;
