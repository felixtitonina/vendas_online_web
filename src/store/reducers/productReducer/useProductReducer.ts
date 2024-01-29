import { useDispatch } from "react-redux";

import { ProductType } from "../../../shared/types/ProductType";
import { useAppSelector } from "../../hooks";
import { setProductAction } from ".";

export const useProducerReducer = () => {
  const { products } = useAppSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const setProducts = (products: ProductType[]) => {
    dispatch(setProductAction(products));
  };
  return {
    products,
    setProducts,
  };
};
