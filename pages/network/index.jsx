const ENDPOINT = "https://fakestoreapi.com";
export  const get = ({ route }) => {
  return fetch(ENDPOINT + route, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
  }).then((response) => response.json())
};
