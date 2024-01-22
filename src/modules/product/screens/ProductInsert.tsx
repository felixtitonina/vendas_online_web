import Screen from "../../../shared/components/screen/Screen";
import { ProductRoutesEnum } from "../enums/productRoutes.enum";

const listBreadcrumb = [
  {
    name: "HOME",
  },
  {
    name: "PRODUTOS",
    navigateTo: ProductRoutesEnum.PRODUCT,
  },
  {
    name: "INSERIR PRODUTO",
  },
];

const ProductInsert = () => {
  return <Screen listBreadcrumb={listBreadcrumb}>Inserir produto</Screen>;
};

export default ProductInsert;
