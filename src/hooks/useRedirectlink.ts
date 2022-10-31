import redaxios from "redaxios";
import React, { useEffect } from "react";

export default function useRedirectlink(id: string): string | null {
  const [link, setLink] = React.useState<string | null>(null);

  useEffect(() => {
    redaxios.get(`/api/redirectLink/${id}`).then((res) => {
      if (res.status === 200) {
        setLink(res.data as string);
      } else {
        setLink(null);
      }
    });
  }, [id]);

  return link;
}
