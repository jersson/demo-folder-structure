export const getMockLogin = () => {
  return {
    data: {
      accessToken: "82jdu82193yh90sad83hxfgsd",
    },
  };
};

export const getMockProducts = () => {
  return {
    data: {
      products: [
        {
          id: "1",
          name: "Iphone",
          quantity: 100,
          price: 1999,
        },
        {
          id: "2",
          name: "Samsung",
          quantity: 90,
          price: 999,
        },
      ],
    },
  };
};
