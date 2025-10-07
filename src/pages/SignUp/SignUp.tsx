import { useTranslation } from "react-i18next";
import InputType from "../../components/InputText/InputText";
import Label from "../../components/Label/Label";

const SignUp = () => {
  const { t } = useTranslation();
  return (
    <section className="d-flex justify-content-center align-items-center">
      <form className="bg-light rounded shadow-lg p-5 d-flex flex-column gap-3">
        <h2>{t("signup")}</h2>
        <div className="d-flex flex-column gap-3">
          <div>
            <Label
              className="form-label"
              htmlFor="email"
              content={t("email_label")}
            />
            <InputType
              placeholder={t("email_placeholder")}
              type="email"
              className="form-control"
              id="email"
            />
            <div id="emailHelp" className="form-text">
              {t("email_comment")}
            </div>
          </div>
          <div className="d-flex flex-column gap-1">
            <Label
              className="form-label"
              htmlFor="password"
              content={t("password_label")}
            />
            <InputType
              placeholder={t("password_placeholder")}
              type="password"
              className="form-control"
              id="password"
            />
            <Label
              className="form-label"
              htmlFor="password"
              content={t("repeat_password_label")}
            />
            <InputType
              placeholder={t("password_placeholder")}
              type="password"
              className="form-control"
              id="password"
            />
            <div id="emailHelp" className="form-text">
              {t("password_comment")}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-success mt-3 shadow-lg">
          {t("signup_button")}
        </button>
      </form>
    </section>
  );
};

export default SignUp;
