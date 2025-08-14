"use client";

import { useEffect } from "react";

const TomZhangDotDev = () => {
  useEffect(() => {
    const scriptConfig = document.createElement("script");
    scriptConfig.innerHTML = `
      window.SubstackFeedWidget_TomZhangDev = {
        substackUrl: "tomzhangdev.substack.com",
        posts: 3,
        layout: "center"
      };
    `;
    document.body.appendChild(scriptConfig);

    const script = document.createElement("script");
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;
    script.onload = () => {
      // Create a new widget instance for this specific feed
      if ((window as any).SubstackFeedWidget && (window as any).SubstackFeedWidget_TomZhangDev) {
        const widget = new (window as any).SubstackFeedWidget((window as any).SubstackFeedWidget_TomZhangDev, "substack-feed-embed-tomzhangdev");
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(scriptConfig)) {
        document.body.removeChild(scriptConfig);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="substack-feed-embed-tomzhangdev" className="mb-4"></div>;
};

export default TomZhangDotDev;
