const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "JORDAN NOVA KOLEKCIJA",
      price: 1999,
      colors: [
        {
          code: "black",
          img: "./slike/znojnice2ws.jpg",
        },
        {
          code: "red",
          img: "./slike/znojnice.png",
        },
      ],
    },
    {
      id: 2,
      title: "PATIKE",
      price: 6999,
      colors: [
        {
          code: "black",
          img: "./slike/pat1.jpg",
        },
        {
          code: "white",
          img: "./slike/whitejordan.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "DRESOVI",
      price: 2999,
      colors: [
        {
          code: "red",
          img: "./slike/dres1.jpg",
        },
        {
          code: "black",
          img: "./slike/dres2.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "LOPTE",
      price: 5999,
      colors: [
        {
          code: "black",
          img: "./slike/lopta1.jpg",
        },
        {
          code: "orange",
          img: "./slike/lopta2.jpg",
        },
      ],
    },
    {
      id: 5,
      title: "ODEĆA",
      price: 2499,
      colors: [
        {
          code: "black",
          img: "./slike/duks.jpg",
        },
        {
          code: "red",
          img: "./slike/sorc.jpg",
        },
      ],
    },
  ];

  let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //promeni trenutni slajd
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //promeni izabrani produkt
    choosenProduct = products[index];

    //promeni tekstove 
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price + "RSD";
    currentProductImg.src = choosenProduct.colors[0].img;

    //dodeli nove boje
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

  
  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
  
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });