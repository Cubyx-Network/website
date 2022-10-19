import { useRouter } from "next/router";
import { useState } from "react";
import Icon from "../icon/Icon";

const HeaderDropdown = ({
  link,
  children,
}: {
  link: string;
  children: { name: string; href: string }[];
}) => {
  const currentSite = useRouter().pathname;

  const [active, setActive] = useState(false);

  function toggleActive() {
    setActive(!active);
  }

  const isCurrentDropdown = children.some(
    (child) => child.href === currentSite
  );

  return (
    <div>
      <span
        className={`m-0 flex items-center text-xl hover:cursor-pointer ${
          isCurrentDropdown && "text-text-secondary"
        }`}
        onClick={toggleActive}
      >
        {link}
        <Icon
          name="arrow-drop-down-line"
          className={`ri-2x transition-all ${active && "rotate-180"}`}
        />
      </span>

      {active && (
        <ul
          className={`absolute mt-1 flex w-fit flex-col gap-2 rounded-lg bg-background-secondary p-4 dark:bg-background-secondary-dark`}
        >
          {children.map((child) => (
            <li key={child.href}>
              <a
                href={child.href}
                className={
                  currentSite === child.href ? "text-text-secondary" : ""
                }
              >
                {child.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeaderDropdown;
