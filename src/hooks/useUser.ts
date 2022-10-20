import { TeamMember } from "@prisma/client";
import redaxios from "redaxios";
import React, { useEffect } from "react";

export default function useUser(): TeamMember | null {
  const [user, setUser] = React.useState<TeamMember | null>(null);

  useEffect(() => {
    redaxios
      .get("/api/user")
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data as TeamMember);
        } else {
          setUser(null);
        }
      })
      .catch((err) => {
        setUser(null);
      });
  }, []);

  return user;
}
