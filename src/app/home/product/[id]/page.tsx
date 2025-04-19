import { ProductById } from "./ProductById.screen";

interface IProductDetailPage {
  params: {
    id: string;
  };
}

export default async function ProductDetail({
  params,
}: IProductDetailPage) {
  const { id } = await Promise.resolve(params);

  return <ProductById id={+id} />;
}
