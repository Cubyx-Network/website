import StatsItem from "./StatsItem";
import { useEffect, useState } from "react";

const Stats = () => {
  const [stats, setStats] = useState({
    discord: 0,
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
        title={"Discord Member"}
        icon={"group-line"}
        value={stats.discord}
      />
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
    </section>
  );
};

export default Stats;
