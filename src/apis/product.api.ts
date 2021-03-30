const mockProducts = [
  {
    id: "1",
    name: "Iphone",
    quantity: 100,
    price: 1999
  },
  {
    id: "2",
    name: "Samsung",
    quantity: 90,
    price: 999
  },
  {
    id: "3",
    name: "Nokia",
    quantity: 80,
    price: 899
  },
  {
    id: "4",
    name: "Sony",
    quantity: 70,
    price: 799
  }
]

export const getProductListApi = (): Promise<ResGetProductApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          products: mockProducts
        },
        message: "Products Service OK"
      })
    }, 100)
  })

export const getProductItemApi = (id: string): Promise<ResGetProductItemApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProducts.find(product => product.id === id)
      if (product) {
        resolve({
          data: {
            product
          },
          message: "Product Item OK"
        })
      } else {
        reject(new Error("Product Item Error"))
      }
    }, 100)
  })
