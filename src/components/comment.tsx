import { useEffect } from "react";

const Comments = () => {
  const commentsElementId = "comments-generated-by-utterances";

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "hotman78/blog");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comment");
    script.setAttribute("theme", "github-dark");
    script.setAttribute("crossorigin", "anonymous");
    const comments = document.getElementById(commentsElementId);
    if (comments !== null && comments.children.length == 0)
      comments.appendChild(script);
  }, []);

  return <div id={commentsElementId} />;
};

export default Comments;
