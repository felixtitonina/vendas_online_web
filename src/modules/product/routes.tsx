import { RouteObject } from "react-router-dom";

import Product from "./screens/Product";
import ProductInsert from "./screens/ProductInsert";

export enum ProductRoutesEnum {
  PRODUCT = "/product",
  PRODUCT_INSERT = "/product/insert",
}

export const productScreen: RouteObject[] = [
  { path: ProductRoutesEnum.PRODUCT, element: <Product /> },
  { path: ProductRoutesEnum.PRODUCT_INSERT, element: <ProductInsert /> },
];
