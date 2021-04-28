import axios from 'axios';

export const getProductListApi = (): Promise<ResGetProductApi> => {
  const ENDPOINT = "http://localhost:3001/products"; // FIXME: Remove this harcoding stuff, is a temporary poc

  return axios.get(ENDPOINT)
          .then(res => res.data);
}

export const getProductItemApi = (id: string): Promise<ResGetProductItemApi | null> => {
  return getProductListApi()
    .then(res => {
      let result:ResGetProductItemApi | null = null;
      let item = res.data.products.find((p => p.id === id));

      if (item){
        result = {
          data: {product: item}, 
          message: "Product Item OK"
        }
      }

      return result;
    });
}