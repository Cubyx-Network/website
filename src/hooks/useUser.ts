import { User } from "@prisma/client";
import redaxios from "redaxios";
import React, { useEffect } from "react";

export default function useUser(): User | null {
  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    redaxios.get("/api/user").then((res) => {
      setUser(res.data as User);
    });
  });

  return user;
}
