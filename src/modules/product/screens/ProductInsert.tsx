import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/buttons/button/Button";
import Input from "../../../shared/components/inputs/input/Input";
import InputMoney from "../../../shared/components/inputs/inputMoney/InputMoney";
import Select from "../../../shared/components/inputs/select/Select";
import Screen from "../../../shared/components/screen/Screen";
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from "../../../shared/components/styles/display.styled";
import { LimitedContainer } from "../../../shared/components/styles/limited.styled";
import { useCategory } from "../../category/hooks/useCategory";
import { ProductRoutesEnum } from "../enums/productRoutes.enum";
import { useInsertProduct } from "../hooks/useInsertProduct";

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
  const { categories } = useCategory();
  const navigate = useNavigate();

  const {
    product,
    loading,
    disableButton,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
  } = useInsertProduct();

  // useEffect(() => {
  //   if (categories.length === 0) {
  //     request(URL_CATEGORY, MethodsEnum.GET, setCategories);
  //   }
  // }, []);

  const handleOnClickCancel = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyCenter>
        <LimitedContainer width={400}>
          <Input
            onChange={(event) => onChangeInput(event, "name")}
            value={product.name}
            margin="0px 0px 16px 0px"
            title="Nome"
            placeholder="Nome"
          />
          <Input
            onChange={(event) => onChangeInput(event, "image")}
            value={product.image}
            margin="0px 0px 16px 0px"
            title="URL imagem"
            placeholder="URL da imagem"
          />
          <InputMoney
            onChange={(event) => onChangeInput(event, "price", true)}
            value={product.price}
            margin="0px 0px 16px 0px"
            title="Preço"
            placeholder="Preço"
          />
          <Select
            title="Categoria"
            margin="0px 0px 32px 0px"
            onChange={handleChangeSelect}
            options={categories.map((category) => ({
              value: `${category.id}`,
              label: `${category.name}`,
            }))}
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="8px 8px" width={120}>
              <Button danger onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer margin="8px 8px" width={120}>
              <Button
                loading={loading}
                disabled={disableButton}
                onClick={handleInsertProduct}
                type="primary"
              >
                Inserir produto
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default ProductInsert;
