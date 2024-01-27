import {
  HomeOutlined,
  LaptopOutlined,
  ProfileOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu as MenuAntd } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProductRoutesEnum } from "../../../modules/product/enums/productRoutes.enum";
import {
  ContainerLoginName,
  ContainerMenu,
  LogoMenu,
  NameCompany,
} from "./menu.style";

type MenuItem = Required<MenuProps>["items"][number];

const Menu = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("1");

  const items: MenuItem[] = [
    {
      key: "home",
      label: "Principal",
      icon: <HomeOutlined />,
    },
    {
      key: "products",
      label: "Produtos",
      icon: <LaptopOutlined />,
      children: [
        {
          key: "produccts_view",
          label: "Visualizar",
          onClick: () => navigate(ProductRoutesEnum.PRODUCT),
        },
        {
          key: "produccts_insert",
          label: "Inserir",
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: "category",
      label: "Categoria",
      icon: <ProfileOutlined />,
      children: [
        {
          key: "category_view",
          label: "Visualizar",
          onClick: () => navigate(ProductRoutesEnum.PRODUCT),
        },
        {
          key: "category_insert",
          label: "Inserir",
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: "order",
      label: "Pedidos",
      icon: <SafetyCertificateOutlined />,
      children: [],
    },
    {
      key: "user",
      label: "Clientes",
      icon: <UserOutlined />,
      children: [],
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <ContainerMenu>
      <ContainerLoginName>
        <LogoMenu />
        <NameCompany>Vendas Online</NameCompany>
      </ContainerLoginName>

      <MenuAntd
        theme="dark"
        onClick={onClick}
        style={{ width: 240 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </ContainerMenu>
  );
};

export default Menu;
