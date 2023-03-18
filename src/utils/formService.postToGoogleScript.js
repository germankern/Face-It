const formServicepostToGoogleScript = (formData) => {
  formData.Networks
    ? (formData.Networks = formData.Networks.map(
        (network) => `${network.name} (${network.network})`
      ).join(", "))
    : null;

  const formData2 = new FormData();
  for (let key in formData) {
    formData2.append(key, formData[key]);
  }
  for (let entry of formData2.entries()) {
    console.log(entry[0] + ": " + entry[1]);
  }

  fetch(
    "https://script.google.com/macros/s/AKfycbwhYFih1ebdS10_Po313bc7zVXCg6pH-V8SvVbUVs2JFL9AglVpXn34aQSymuy5Cw2U/exec",
    {
      method: "POST",
      body: formData2,
    }
  );
};

export { formServicepostToGoogleScript };
