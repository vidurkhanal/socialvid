import React from "react";
import "./sidebar.css";
import SidebarOption from "./SidebarOption";
import {
  SettingsRounded,
  PersonRounded,
  HomeRounded,
  InfoRounded,
  ExitToApp,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Logo */}
      <img src="/logo.png" alt="vidSocial logo" className="sidebar__logo" />
      {/* Options */}
      <SidebarOption Icon={HomeRounded} text="Home" active />
      <SidebarOption Icon={PersonRounded} text="My Profile" />
      <SidebarOption Icon={SettingsRounded} text="Settings" />
      <SidebarOption Icon={InfoRounded} text="About" />
      <SidebarOption Icon={ExitToApp} text="Sign Out" />
      {/* Post Button */}
      <Button variant="outlined" className="sidebar__cta" fullWidth>
        Post
      </Button>
    </div>
  );
}

export default Sidebar;
