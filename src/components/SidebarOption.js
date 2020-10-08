import React from "react";
import "./sidebaroption.css";
import firebase from "firebase";

function SidebarOption({ active, Icon, text }) {
  return (
    <div
      className={
        !active ? "sidebarOption" : "sidebarOption sidebarOption--active"
      }
      onClick={() => {
        if (text === "Sign Out") {
          firebase.auth().signOut();
        }
      }}
    >
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
