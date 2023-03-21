import { useState } from "react";
const useForm = (initialState = {}, onSubmit) => {
  const [formData, setFormData] = useState(initialState);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAddOption = (item, value) => {
    setFormData({ ...formData, [item]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(formData);
  };
  return { formData, handleInputChange, handleSubmit, handleAddOption };
};
export default useForm;
