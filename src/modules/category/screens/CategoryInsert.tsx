import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/buttons/button/Button";
import Input from "../../../shared/components/inputs/input/Input";
import Screen from "../../../shared/components/screen/Screen";
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from "../../../shared/components/styles/display.styled";
import { LimitedContainer } from "../../../shared/components/styles/limited.styled";
import { CategoryRoutesEnum } from "../enums/categoryRoutes.enum";
import { useInsertCategory } from "../hooks/useInsertCategory";

const CategoryInsert = () => {
  const { name, loading, handleOnChangeName, insertCategory } =
    useInsertCategory();
  const navigate = useNavigate();

  const handleOnClickCancel = () => {
    navigate(CategoryRoutesEnum.CATEGORY);
  };
  const listBreadcrumb = [
    {
      name: "HOME",
    },
    {
      name: "CATEGORIAS",
      navigateTo: CategoryRoutesEnum.CATEGORY,
    },
    {
      name: "INSERIR CATEGORIA",
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyCenter>
        <LimitedContainer width={400}>
          <Input
            onChange={handleOnChangeName}
            value={name}
            margin="0px 0px 16px 0px"
            title="Nome"
            placeholder="Nome"
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="8px 8px" width={120}>
              <Button danger onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer margin="8px 8px" width={160}>
              <Button loading={loading} onClick={insertCategory} type="primary">
                Inserir categoria
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};
export default CategoryInsert;
