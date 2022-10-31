import { useRouter } from "next/router";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import useRedirectlink from "../../hooks/useRedirectlink";
import { useEffect } from "react";
import { isArray } from "is-what";

const RedirectPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const idString = isArray(id) ? id.join("/") : (id as string);

  const url = useRedirectlink(idString);

  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);

  if (!url) return <LoadingSpinner />;

  return (
    <div>
      <h1>Weiterleiten...</h1>
      <a href={url}>Klicke hier, falls die Weiterleitung nicht geklappt hat.</a>
    </div>
  );
};

export default RedirectPage;
