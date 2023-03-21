const postToGoogleScript = (data, url) => {
  data.Networks
    ? (data.Networks = data.Networks.map(
        (network) => `${network.name} (${network.network})`
      ).join(", "))
    : null;

  const formData2 = new FormData();
  for (let key in data) {
    formData2.append(key, data[key]);
  }

  fetch(url, {
    method: "POST",
    body: formData2,
  });
};
const formService = { postToGoogleScript };

export { formService };
