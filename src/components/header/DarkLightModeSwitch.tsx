import { useContext } from "react";
import { darkMode } from "../../pages/_app";
import Icon from "../icon/Icon";

const DarkLightModeSwitch = () => {
  const isDarkMode = useContext(darkMode);

  function toggleMode() {
    if (isDarkMode) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }

    window.location.reload();
  }

  if (isDarkMode) {
    return (
      <button onClick={toggleMode}>
        <Icon name={"sun-fill"} className={"icon-2xl"} />
      </button>
    );
  } else {
    return (
      <button onClick={toggleMode}>
        <Icon name={"moon-fill"} className={"icon-2xl"} />
      </button>
    );
  }
};

export default DarkLightModeSwitch;
