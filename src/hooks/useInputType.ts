import { useState, type ChangeEvent } from 'react'

const useInputType = () => {
  
  const [inputValue, setInputValue] = useState<string>("");
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value)
  }

  return {
    inputValue,
    handleChange
  }
}

export default useInputType