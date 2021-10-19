import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import Avatar from "./avatar";
import "./topbar.css";

export function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CryptoDash</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <span className="topIconBadge">2</span>
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  );
}
