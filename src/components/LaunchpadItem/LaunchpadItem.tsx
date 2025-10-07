import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { ILaunchpadItem } from "../../interfaces/ILaunchpadItem";
import './LaunchpadItem.css'

const LaunchpadItem: React.FC<ILaunchpadItem> = ({ text, index, icon, path }) => {
  const { t } = useTranslation();
  return (
    <Link
      to={path}
      className="app-tile col border rounded shadow m-1 nav-link d-flex flex-column align-items-center justify-content-center gap-2"
      key={index}
      style={{ width: "15rem", height: "auto", aspectRatio: "1 / 1" }}
    >
      <div dangerouslySetInnerHTML={icon}></div>
      <div>{t(text)}</div>
    </Link>
  );
};

export default LaunchpadItem;
