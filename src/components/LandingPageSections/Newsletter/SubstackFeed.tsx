"use client";

import { useEffect } from "react";

const SubstackFeed = () => {
  useEffect(() => {
    const scriptConfig = document.createElement("script");
    scriptConfig.innerHTML = `
      window.SubstackFeedWidget = {
        substackUrl: "zhangtommy.substack.com",
        posts: 3,
        layout: "center"
        
      };
    `;
    document.body.appendChild(scriptConfig);

    const script = document.createElement("script");
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(scriptConfig);
      document.body.removeChild(script);
    };
  }, []);

  return <div id="substack-feed-embed" className="mb-4"></div>;
};

export default SubstackFeed;
