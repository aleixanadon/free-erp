import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow bg-body p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Free ERP
        </a>
        <button
          className="navbar-toggler shadow-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            {routes.map(({ path, tKey, icon }) => (
              <li className="nav-item" key={path}>
                <Link to={path} className="nav-link d-flex align-items-center gap-2" key={path}>
                  <div className="mb-1" dangerouslySetInnerHTML={icon}></div>
                  {t(tKey)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex gap-3">
            <li className="nav-link">
              <Link className={"btn btn-primary shadow"} to={"/signup"}>
                {t("navbar_signup")}
              </Link>
            </li>
            <li className="nav-link">
              <Link className={"btn btn-secondary shadow"} to={"/login"}>
                {t("navbar_login")}
              </Link>
            </li>
            <li className="nav-link">
              <SelectLanguage className="shadow" />
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
