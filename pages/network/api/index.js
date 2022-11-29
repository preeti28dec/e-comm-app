import { get } from "..";

  export  const getProductApi = () => {
    return get({
      route: "/products",
    });
  };



  export  const getProductApiId = (id) => {
    return get({
      route: `/products/${id}`,
    });
  };
