import { Modal } from "antd";
import { useState } from "react";

import { logout } from "../../functions/connection/auth";
import { HeaderContainer, LogoExit } from "./header.styled";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        title="Atenção"
        open={open}
        onOk={logout}
        onCancel={hideModal}
        okText="Sim"
        cancelText="Cancelar"
      >
        <p>Tem certeza que deseja sair?</p>
      </Modal>
      <HeaderContainer>
        <LogoExit onClick={showModal} />
      </HeaderContainer>
    </>
  );
};

export default Header;
