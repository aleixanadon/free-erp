import { useTranslation } from "react-i18next";
import image from "../../assets/hero_section_img.webp";
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();
  return (
    <section>
      <article className="d-flex flex-column gap-4 home-article">
        <img
          src={image}
          className="mx-auto"
          style={{ width: "80%" }}
          alt="hola"
        />
        <div className="text-group-and-buttons">
          <div className="text-group">
            <h1 className="text-center">{t("hero_section_text_1")}</h1>
            <h2 className="text-center">{t("hero_section_text_2")}</h2>
          </div>
          <div className="d-flex p-2 justify-content-around gap-3 buttons">
            <button className="btn btn-primary btn-lg w-100 shadow">
              {t("hero_section_button_1")}
            </button>
            <button className="btn btn-secondary btn-lg w-100 shadow">
              {t("hero_section_button_2")}
            </button>
          </div>
        </div>
      </article>
      <article></article>
    </section>
  );
};

export default Home;
