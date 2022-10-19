import useUser from "../../hooks/useUser";
import Link from "next/link";
import Icon from "../icon/Icon";

const LoginUser = () => {
  const user = useUser();

  if (!user) {
    return (
      <Link href={"/intern"}>
        <a href={"/intern"} className="flex items-center">
          <Icon name={"login-box-line"} className={"ri-2x"} />
        </a>
      </Link>
    );
  }

  return (
    <Link href={"/intern"}>
      <a href={"/intern"} className={"flex items-center gap-2"}>
        <span className="text-text-third">{user.username}</span>
        <Icon name={"user-line"} className="ri-2x" />
      </a>
    </Link>
  );
};

export default LoginUser;
