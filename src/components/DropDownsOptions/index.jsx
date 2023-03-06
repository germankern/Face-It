const DropDownsOptions = ({ setplaceHolder, item }) => {
  function handleOption() {
    setplaceHolder(item);
  }
  return <li onClick={handleOption}>{item}</li>;
};

export default DropDownsOptions;
