import { t_003 } from "../../../lib/projects/types/t_003";

const T002 = ({ data }: { data: t_003 }) => {
  return (
    <div className="flex w-full rounded-2xl bg-background-secondary p-4 dark:bg-background-secondary-dark lg:p-8">
      <div className="w-full flex-col break-words">
        <h2 className="mb-2 text-center text-4xl font-extrabold">
          {data.title}
        </h2>
        <p className="text-center">{data.text}</p>
      </div>
    </div>
  );
};

export default T002;
