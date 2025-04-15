import { Products } from "@/interfaces/hooks/products.interfaces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async (): Promise<Products> => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products");

    return data;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

export const useGetProducts = () => {
  const {
    data = { products: [] },
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
    staleTime: 1000 * 60 * 60,
  });

  return {
    products: data,
    loading: isLoading,
    refetch,
  };
};
