import StatsItem from "./StatsItem";
import { useEffect, useState } from "react";

const Stats = () => {
  const [stats, setStats] = useState({
    teamMembers: 0,
    projects: 0,
  });

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <section className="my-32 grid gap-4 md:grid-cols-3">
      <StatsItem
        title={"Teammitglieder"}
        icon={"team-line"}
        value={stats.teamMembers}
      />
      <StatsItem
        title={"Projekte"}
        icon={"folder-3-line"}
        value={stats.projects}
      />
      <StatsItem
        title={"Tage seit Gründung"}
        icon={"calendar-line"}
        value={`${
          Math.floor(
            (Date.now() - new Date("2020-01-01").getTime()) /
              1000 /
              60 /
              60 /
              24
          ) + 1
        } Tage`}
      />
    </section>
  );
};

export default Stats;
