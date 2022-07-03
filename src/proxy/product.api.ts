import axios from "axios";
const { REACT_APP_API_URI } = process.env;

export const getProductListApi = (): Promise<ResGetProductApi> => {
  const ENDPOINT = `${REACT_APP_API_URI}/products`; // FIXME: Remove this harcoding stuff, is a temporary poc
  console.log({ ENDPOINT });
  return axios.get(ENDPOINT);
};

export const getProductItemApi = (id: string): Promise<ResGetProductItemApi | null> => {
  return getProductListApi().then((res) => {
    let result: ResGetProductItemApi | null = null;
    const item = res.data.products.find((p) => p.id === id);

    if (item) {
      result = {
        data: { product: item },
        message: "Product Item OK",
      };
    }

    return result;
  });
};
