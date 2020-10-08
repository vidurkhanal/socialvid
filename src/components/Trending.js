import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./trending.css";
import WidgetItem from "./WidgetItem";

function Trending() {
  const [news, setNews] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=FFMcGEf5wdaNB7MFcIC16F4w32MTbeVG"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.results))
      .catch((err) => console.log(err.message));
  }, []);

  if (!news) {
    return (
      <div className="trending">
        <div
          className="trending__widgetcontainer"
          style={{ display: "grid", placeItems: "center", color: "#009688" }}
        >
          <CircularProgress color="inherit" size={50} />
        </div>
      </div>
    );
  }

  return (
    <div className="trending">
      <div className="trending__widgetcontainer">
        <h2>
          Trending Now{" "}
          <span>
            Provided By <img src="/nytimes.png" alt="NYT Logo" />
          </span>
        </h2>
        {news?.map((article) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            href={article?.url}
            key={article?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WidgetItem data={article} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Trending;
