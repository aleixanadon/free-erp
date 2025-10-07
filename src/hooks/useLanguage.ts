import { useEffect, type ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next'

const useLanguage = () => {
  
  const { i18n } = useTranslation()
  
  const changeLanguageHandler = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    console.log(value)
    i18n.changeLanguage(value);
  }

  useEffect(() => {

  }, [i18n.language])

  return {
    changeLanguageHandler
  }
}

export default useLanguage
