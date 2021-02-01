import { useState } from "react";

const useFormState = (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value || e.target.checked);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};

export default useFormState;
