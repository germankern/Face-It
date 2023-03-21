const postToGoogleScript = (data, url) => {
  data.Networks
    ? (data.Networks = data.Networks.map(
        (network) => `${network.name} (${network.network})`
      ).join(", "))
    : null;

  const formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }

  fetch(url, {
    method: "POST",
    body: formData,
  });
};
const formService = { postToGoogleScript };

export { formService };
