import { motion } from "framer-motion";
import React from "react";

const ApplyFormular = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      className="fixed z-50 h-screen w-full overflow-hidden bg-background-primary dark:bg-background-primary-dark"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <span>Hello World!</span>
      <button className="input" onClick={() => setOpen(false)}>
        Schließen
      </button>
    </motion.div>
  );
};

export default ApplyFormular;
