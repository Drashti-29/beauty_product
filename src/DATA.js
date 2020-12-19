const PRODUCTS = [
  {
    id: 1,
    name: "SUNCREAM",
    description: "Day + Night Care Gel Duo: Oily, Acne-Prone Skin",
    img:
      "https://cdn.shopify.com/s/files/1/0390/2985/products/day_night-gel-duo_1_1024x1024.jpg?v=1587121804",
    price: 690
  },

  {
    id: 2,
    name: "Night Gel",
    description: "Green Tea Renewed Clarity Night Gel",
    img: "data:image/jpeg;base64,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",
    price: 420
  },

  {
    id: 3,
    name: "Eye cream",
    description: "Himalaya Herbals Under Eye Cream(15ml)",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/h/i/himalaya-herbals-under-eye-cream.jpg",
    price: 100
  },

  {
    id: 4,
    name: "Men's bodylotion"
    description: "Beardo Body Lotion with Argan Oil (Intense Care) (300ml)",
    img: "https://beardoc.s3.ap-south-1.amazonaws.com/uploads/x700-body-lotion-with-argan-oil-image-01-6038.jpg",
    price: 399
  },

  {
    id: 5,
    name: "Orange",
    description: "Orange are orange",
    img: "https://placeimg.com/150/150/arch",
    price: 100
  }
];

export default PRODUCTS;
