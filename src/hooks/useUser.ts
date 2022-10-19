import { User } from "@prisma/client";
import redaxios from "redaxios";
import React, { useEffect } from "react";

export default function useUser(): User | null {
  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    redaxios
      .get("/api/user")
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data as User);
        } else {
          setUser(null);
        }
      })
      .catch((err) => {
        setUser(null);
      });
  });

  return user;
}
