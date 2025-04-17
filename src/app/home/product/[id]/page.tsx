import { Product } from "./Product.screen";

interface IProductDetailPage {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({
  params,
}: IProductDetailPage) {
  const { id } = await Promise.resolve(params);

  return <Product id={+id} />;
}
