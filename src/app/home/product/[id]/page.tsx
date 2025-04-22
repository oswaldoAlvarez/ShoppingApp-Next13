import { ProductById } from "./ProductById.screen";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductDetail({ params }: any) {
  const id = parseInt(params.id, 10);
  return <ProductById id={id} />;
}
