import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/buttons/button/Button";
import Input from "../../../shared/components/inputs/input/Input";
import InputMoney from "../../../shared/components/inputs/inputMoney/InputMoney";
import Select from "../../../shared/components/inputs/select/Select";
import Screen from "../../../shared/components/screen/Screen";
import { DisplayFlexJustifyRight } from "../../../shared/components/styles/display.styled";
import { LimitedContainer } from "../../../shared/components/styles/limited.styled";
import { URL_CATEGORY } from "../../../shared/constants/urls";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests";
import { ProductRoutesEnum } from "../enums/productRoutes.enum";
import { useInsertProduct } from "../hooks/useInsertProduct";
import { ProductInsertContainer } from "../styles/productInsert.style";

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
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();
  const navigate = useNavigate();

  const {
    product,
    loading,
    disableButton,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
  } = useInsertProduct();

  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleOnClickCancel = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <ProductInsertContainer>
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
      </ProductInsertContainer>
    </Screen>
  );
};

export default ProductInsert;
