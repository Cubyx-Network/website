import { PositionType } from "@prisma/client";
import Icon from "../icon/Icon";

function positionTypeToString(position: PositionType) {
  switch (position) {
    case "developer":
      return "Developing";
    case "builder":
      return "Building";
    case "resources":
      return "Ressourcen-Creating";
    case "socialmedia":
      return "Social Media";
    case "entertainment":
      return "Entertainment";
    case "administator":
      return "Systemadministration";
    case "commander":
      return "Commanding";
  }
}

const PositionTag = ({ position }: { position: PositionType }) => {
  return (
    <div
      className={`m-0 flex w-fit items-center gap-2 rounded-xl bg-text-secondary px-2 py-1 text-xs font-semibold`}
    >
      <Icon name="price-tag-3-fill" />
      {positionTypeToString(position)}
    </div>
  );
};

export default PositionTag;
