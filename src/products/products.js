const products = [
  {
    count: 0,
    id: 1,
    available: 5,
    imageUrl: "https://i.ibb.co/TBnD0cD/404687-removebg-preview.png",
    name: "Nvidia GT-42354Rs",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit expedita doloremque vel esse placeat tempora dicta, vitae culpa asperiores commodi corrupti ipsam nobis provident blanditiis eius obcaecati adipisci cum impedit!",
    price: 250,
  },
  {
    count: 0,
    id: 2,
    available: 5,
    imageUrl: "https://i.ibb.co/2yMDLDW/4470586-removebg-preview-1.png",
    name: "ROGO11G-GAMING",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit expedita doloremque vel esse placeat tempora dicta, vitae culpa asperiores commodi corrupti ipsam nobis provident blanditiis eius obcaecati adipisci cum impedit!",
    price: 830,
  },
  {
    count: 0,
    id: 3,
    available: 2,
    imageUrl: "https://i.ibb.co/pvHqNN8/110829333-removebg-preview.png",
    name: "2.0 H310M S2H",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit expedita doloremque vel esse placeat tempora dicta, vitae culpa asperiores commodi corrupti ipsam nobis provident blanditiis eius obcaecati adipisci cum impedit!",

    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit expedita doloremque vel esse placeat tempora dicta, vitae culpa asperiores commodi corrupti ipsam nobis provident blanditiis eius obcaecati adipisci cum impedit!",
    price: 70,
  },
  {
    available: 7,
    count: 0,
    id: 4,
    imageUrl: "https://i.ibb.co/cQQrwp8/1855893-removebg-preview.png",
    name: "SSD Slim S55",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit expedita doloremque vel esse placeat tempora dicta, vitae culpa asperiores commodi corrupti ipsam nobis provident blanditiis eius obcaecati adipisci cum impedit!",
    price: 100,
  },
];
export const MoreAboutProducts = [
  {
    count: 0,
    id: 1,
    available: 5,
    imageUrl: "https://i.ibb.co/TBnD0cD/404687-removebg-preview.png",
    name: "Nvidia GT-42354RsNvidi42354RsdNvidiRs",
    Description:
      "Dolor labore ipsum aute id eiusmod cupidatat eiusmod elit do consequat veniam pariatur.Pariatur enim labore esse qui ut nostrud proident incididunt laboris. Culpa ullamco quis amet anim ad. Sint dolor est exercitation aliquip enim.Nostrud officia laboris consectetur officia eiusmod non commodo quis proident. Non mollit occaecat elit ut ea exercitation incididunt voluptate tempor incididunt. Pariatur ex id reprehenderit irure ex aute et pariatur anim quis eiusmod aute ipsum.",
    price: 250,
  },
  {
    count: 0,
    id: 2,
    available: 5,
    imageUrl: "https://i.ibb.co/2yMDLDW/4470586-removebg-preview-1.png",
    name: "ROGO11GO11G-GA-GAMINO11G-GAO11G-O11G-GAGAG",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit expedita doloremque vel esse placeat tempora dicta, vitae culpa asperiores commodi corrupti ipsam nobis provident blanditiis eius obcaecati adipisci cum impedit!",
    price: 830,
  },
  {
    count: 0,
    id: 3,
    available: 2,
    imageUrl: "https://i.ibb.co/pvHqNN8/110829333-removebg-preview.png",
    name: "2.0 H3100MH310H310H3100M00MS2H",
    Description:
      "Dolor labore ipsum aute id eiusmod cupidatat eiusmod elit do consequat veniam pariatur.Pariatur enim labore esse qui ut nostrud proident incididunt laboris. Culpa ullamco quis amet anim ad. Sint dolor est exercitation aliquip enim.Nostrud officia laboris consectetur officia eiusmod non commodo quis proident. Non mollit occaecat elit ut ea exercitation incididunt voluptate tempor incididunt. Pariatur ex id reprehenderit irure ex aute et pariatur anim quis eiusmod aute ipsum.",

    price: 70,
  },
  {
    count: 0,
    id: 4,
    available: 4,
    imageUrl: "https://i.ibb.co/cQQrwp8/1855893-removebg-preview.png",
    name:
      "Silicon Power S55 240GB 2.5 7mm SATA III Internal Solid State Drive SP240GBSS3S55S25",
    Description:
      "Dolor labore ipsum aute id eiusmod cupidatat eiusmod elit do consequat veniam pariatur.Pariatur enim labore esse qui ut nostrud proident incididunt laboris. Culpa ullamco quis amet anim ad. Sint dolor est exercitation aliquip enim.Nostrud officia laboris consectetur officia eiusmod non commodo quis proident. Non mollit occaecat elit ut ea exercitation incididunt voluptate tempor incididunt. Pariatur ex id reprehenderit irure ex aute et pariatur anim quis eiusmod aute ipsum.",
    price: 100,
  },
];
export const getProduct = (findId) => {
  const product = products.find(({ id }) => id == findId);
  return product;
};
export default products;
