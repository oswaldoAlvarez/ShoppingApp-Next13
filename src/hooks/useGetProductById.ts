import { ProductData } from "@/interfaces/hooks/product.interfaces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchProductById = async (id: number): Promise<ProductData> => {
  try {
    const { data } = await axios.get<ProductData>(
      `https://dummyjson.com/products/${id}`
    );

    return data;
  } catch (error) {
    throw Error(`Error getting product by id: ${error}`);
  }
};

export const useGetProductById = (productId: number) => {
  const { data, isLoading } = useQuery<ProductData>({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
    staleTime: 1000 * 60 * 60,
  });

  return {
    product: data,
    loading: isLoading,
  };
};
