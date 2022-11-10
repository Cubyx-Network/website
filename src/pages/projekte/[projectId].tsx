import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { parseJson, ProjectPage } from "../../lib/projects/ProjectPageUtils";

const ProjectPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const [projectPage, setProjectPage] = useState<ProjectPage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (projectId) {
      fetch(`/api/project/${projectId}`).then((response) => {
        if (response.status !== 200) {
          router.push("/404");
          return;
        }
        response.json().then((json) => {
          setProjectPage(parseJson(json));
          setIsLoading(false);
        });
      });
    }
  });

  return (
    <div>
      {isLoading && <h1>Page is loading...</h1>}
      {projectPage && (
        <>
          <h1>Project {projectPage.title}</h1>
          <code>{projectPage.toString()}</code>
        </>
      )}
    </div>
  );
};

export default ProjectPage;
