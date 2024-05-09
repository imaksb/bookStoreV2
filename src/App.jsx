import { useEffect, useState } from "react";

import Header from "./components/header/Header.jsx";
import Shop from "./components/Shop.jsx";
import ButtonUp from "./components/ScrollButton.jsx";
const initialData = [
  {
    id: 1,
    title: "Сходження Ганібала",
    manufacturer: "Томас Гарріс",
    description: "Крута книга",
    price: 8,
    image: "images/detective/61095_121141_d.jpg",
  },
  {
    id: 2,
    title: "Ганнібал",
    manufacturer: "Томас Гарріс",
    description: "Крута книга",
    price: 12,
    image: "images/detective/61096_121142_d.jpg",
  },
  {
    id: 3,
    title: "Все те незриме світло",
    manufacturer: "Етон Дорр",
    description: "Крута книга",
    price: 12,
    image: "images/detective/61104_121149_d.jpg",
  },
  {
    id: 4,
    title: "Панк 57",
    price: 15,
    manufacturer: "Пенелопа Дуглас",
    description:
      "У п’ятому класі вчителі випадково поставили Мішу і Раєн у пару для листування. Їх розділяли десятки кілометрів, але об’єднували спільні думки і захоплення. Тільки одне з одним вони могли бути по-справжньому відвертими та щирими\t\t\t\t\t\t\t  Читати далі »",
    image: "images/detective/61167_121268_d.jpg",
  },
  {
    id: 5,
    title: "Прислуга",
    price: 12,
    manufacturer: "К. Стокетт",
    description:
      "Надзвичайно зворушливий, сильний роман про складні людські долі, страшну несправедливість і біль, але,  разом із тим, – про щирі надії, любов до ближніх і віру у те, що із паростків відчайдушної боротьби може вирости нове, інше життя\t\t\t\t\t\t\t  Читати далі »",
    image: "images/detective/61487_122021_d.jpg",
  },
  {
    id: 6,
    title: "Екстазі",
    manufacturer: "І. Велш",
    price: 10,
    description:
      'Збірка "Екстазі" поєднує три пронизані своєрідною романтикою брутальні й іронічні оповіді про кохання, помсту і пристрасть, кожна з яких змусить пульс пришвидшитись.\t\t\t\t\t\t\t  Читати далі »',
    image: "images/detective/61488_122020_d.jpg",
  },
];

export default function App() {
  const products = initialData;
  const [basket, setBasket] = useState([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  function handleSelectionBasket() {
    setIsBasketOpen((isBasketOpen) => !isBasketOpen);
  }

  function handleAddToBasket(product) {
    const productPrepared = { ...product, count: 1 };

    if (!basket.find((item) => item.id === productPrepared.id)) {
      setBasket((basket) => [...basket, productPrepared]);
      return;
    } else {
      setBasket((basket) =>
        basket.map((item) =>
          item.id === productPrepared.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    }
  }

  function handleFinalRemoveFromBasket(product) {
    setBasket((books) => books.filter((book) => book.id !== product.id));
  }
  function handleRemoveFromBasket(product) {
    if (basket.find((item) => item.id === product.id && item.count > 1)) {
      setBasket((books) =>
        books.map((item) =>
          item.id === product.id ? { ...item, count: item.count-- } : item
        )
      );
      return;
    }
    handleFinalRemoveFromBasket(product);
  }

  return (
    <>
      <ButtonUp />
      <Header
        basket={basket}
        isBasketOpen={isBasketOpen}
        onSelectBasket={handleSelectionBasket}
      />
      <Shop
        products={products}
        onSelectBasket={handleSelectionBasket}
        basketItems={basket}
        onAddToBasket={handleAddToBasket}
        onRemoveItemFromBasket={handleRemoveFromBasket}
        onRemove={handleFinalRemoveFromBasket}
        isBasketOpen={isBasketOpen}
      />
    </>
  );
}
