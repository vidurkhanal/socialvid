import firebase from "firebase";
import { useState, useEffect } from "react";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("SocialVidAuth"))
  );

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((SocialVidAuth) => {
      if (SocialVidAuth) {
        localStorage.setItem("SocialVidAuth", JSON.stringify(SocialVidAuth));
        setUser(SocialVidAuth);
      } else {
        localStorage.removeItem("SocialVidAuth");
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [setUser]);
  return { user };
}
