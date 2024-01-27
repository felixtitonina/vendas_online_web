import {
  ContainerLoginName,
  ContainerMenu,
  LogoMenu,
  NameCompany,
} from "./menu.style";

const Menu = () => {
  return (
    <ContainerMenu>
      <ContainerLoginName>
        <LogoMenu />
        <NameCompany>Vendas Online</NameCompany>
      </ContainerLoginName>
    </ContainerMenu>
  );
};

export default Menu;
