import ProductLayout from "./ProductLayout";

export default async function Sneakers() {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing?limit=4"
  );
  const data = await response.json();

  return <ProductLayout heading="Sneakers&minus;for&minus;Woman" data={data} />;
}
