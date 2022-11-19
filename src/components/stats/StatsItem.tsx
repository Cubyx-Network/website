import { motion } from "framer-motion";
import Icon from "../icon/Icon";

const StatsItem = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: number | string;
  icon: string;
}) => {
  return (
    <motion.section className="text-center">
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Icon name={icon} className={"ri-5x"} />
      </motion.div>

      <motion.h1
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-3xl font-bold"
      >
        {title}
      </motion.h1>
      <motion.h2
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-2xl"
      >
        {value}
      </motion.h2>
    </motion.section>
  );
};

export default StatsItem;
