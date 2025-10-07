import { languages } from "../../i18n/languages";
import useLanguage from "../../hooks/useLanguage";
import './SelectLanguage.css'

interface SelectLanguageProps {
  className: string;
}

const SelectLanguage: React.FC<SelectLanguageProps> = ({ className }) => {
  const { changeLanguageHandler } = useLanguage();

  return (
    <select className={`select-language form-select ${className}`}name="" id="" onChange={changeLanguageHandler}>
      {languages.map(({ value, label }) => (
        <option
          value={value}
          key={value}
        >
          {label}
        </option>
      ))}
    </select>
  );
};

export default SelectLanguage;
