import React, { useEffect, useState } from "react";
import "./home.css";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Trending from "../components/Trending";
import db from "../firebase";
import { CircularProgress } from "@material-ui/core";
import useAuthListener from "../hooks/useAuthListener";

function Home() {
  const [posts, setPosts] = useState(null);
  const [info, setInfo] = useState(null);
  const { user } = useAuthListener();
  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .orderBy("postedDate", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      );
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .where("uid", "==", `${user?.uid}`)
      .onSnapshot((snapshot) =>
        setInfo(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
          }))[0]
        )
      );
    return () => {
      unsubscribe();
    };
  }, [user]);

  console.log(info);

  if (!posts) {
    return (
      <div className="home">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            color: "#009688",
          }}
        >
          <CircularProgress color="inherit" size={100} />
        </div>
      </div>
    );
  }

  if (posts) {
    return (
      <div className="home">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed posts={posts} userData={info} />
        {/* News Feed */}
        <Trending />
      </div>
    );
  }
}

export default Home;
