// {
//   id: 4,
//   title: 'Mens Casual Slim Fit',
//   price: 15.99,
//   description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
//   category: "men's clothing",
//   image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
//   rating: { rate: 2.1, count: 430 }
// }

import { Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";
import ImageCard from "./ImageCard";
import ProductLayout from "./ProductLayout";

export default async function ReadyToWear() {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing?limit=4"
  );
  const data = await response.json();

  return <ProductLayout heading="Ready&minus;to&minus;Wear" data={data} />;
}
