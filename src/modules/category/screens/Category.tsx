import { Input, Table } from "antd";
import { ColumnType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/buttons/button/Button";
import Screen from "../../../shared/components/screen/Screen";
import { DisplayFlexJustifyBetween } from "../../../shared/components/styles/display.styled";
import { LimitedContainer } from "../../../shared/components/styles/limited.styled";
import { CategoryType } from "../../../shared/types/CategoryType";
import { CategoryRoutesEnum } from "../enums/categoryRoutes.enum";
import { useCategory } from "../hooks/useCategory";

const { Search } = Input;
const columns: ColumnType<CategoryType>[] = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Produtos",
    dataIndex: "amountProducts",
    key: "amountProducts",
    render: (text) => <a>{text}</a>,
  },
];

const listBreadcrumb = [
  {
    name: "HOME",
  },
  {
    name: "CATEGORIAS",
  },
];

const Category = () => {
  const { categories, handleOnChangeShearch } = useCategory();
  const navigate = useNavigate();

  const handleOnClickCategory = () => {
    navigate(CategoryRoutesEnum.CATEGORY_INSERT);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
        <LimitedContainer width={240}>
          <Search
            placeholder="Buscar categoria"
            onSearch={handleOnChangeShearch}
            enterButton
          />
        </LimitedContainer>

        <LimitedContainer width={120}>
          <Button type="primary" onClick={handleOnClickCategory}>
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>

      <Table columns={columns} dataSource={categories} />
    </Screen>
  );
};
export default Category;
