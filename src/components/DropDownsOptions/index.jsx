const DropDownsOptions = ({
  setplaceHolder,
  item,
  setuser,
  name,
  onChange,
}) => {
  function handleOption() {
    setplaceHolder(item);
    if (setuser) {
      setuser(item);
    } else {
      onChange(name, item);
    }
  }
  return <li onClick={handleOption}>{item}</li>;
};

export default DropDownsOptions;
