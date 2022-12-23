import Login from "../../components/Login";
import useUser from "../../hooks/useUser";
import InternHeader from "../../components/intern/InternHeader";

const InternPage = () => {
  const user = useUser();
  if (!user) return <Login />;

  const time = new Date();
  let greeting = "Guten Tag, "; // ☀️

  if (time.getHours() < 12) {
    greeting = "Guten Morgen, ️"; // ☕
  } else if (time.getHours() < 13) {
    greeting = "Mahlzeit, "; // 🍔
  } else if (time.getHours() > 17) {
    greeting = "Guten Abend, "; // 🌙
  } else if (time.getHours() > 21) {
    greeting = "Gute Nacht, "; // 💤
  }

  return (
    <>
      <InternHeader
        title={"Intern"}
        description={"Interner Bereich"}
        user={user}
      />

      <div className="flex h-screen w-full flex-col items-center justify-center gap-16">
        <div className="hidden w-full md:block">
          <h1 className="text-center text-7xl font-bold ">
            {greeting}{" "}
            <span className="text-text-secondary">{user.username}</span>.
          </h1>
          <div className="mt-8 flex h-0.5 justify-center rounded-3xl">
            <div className="w-1/4 bg-text-primary dark:bg-text-primary-dark"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternPage;
