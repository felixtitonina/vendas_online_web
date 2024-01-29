import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { URL_PRODUCT } from "../../../shared/constants/urls";
import { InsertProduct } from "../../../shared/dtos/InsertProduct.dto";
import { connectionAPIPost } from "../../../shared/functions/connection/connectionAPI";
import { useGlobalReducer } from "../../../store/reducers/globalReducer/useGlobalReducer";
import { ProductRoutesEnum } from "../enums/productRoutes.enum";

export const useInsertProduct = () => {
  const navigate = useNavigate();
  const { setNotification } = useGlobalReducer();
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisibledButton] = useState(true);
  const [product, setProduct] = useState<InsertProduct>({
    name: "",
    price: 0,
    image: "",
  });

  useEffect(() => {
    if (
      product.name &&
      product.categoryId &&
      product.image &&
      product.price > 0
    ) {
      setDisibledButton(false);
    } else {
      setDisibledButton(true);
    }
  }, [product]);
  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    setProduct({
      ...product,
      [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
    });
  };

  const handleChangeSelect = (value: string) => {
    setProduct({ ...product, categoryId: Number(value) });
  };

  const handleInsertProduct = async () => {
    setLoading(true);
    await connectionAPIPost(URL_PRODUCT, product)
      .then(() => {
        navigate(ProductRoutesEnum.PRODUCT);
        setNotification("Sucesso!", "success", "Produto inserido com sucesso!");
      })
      .catch((error: Error) => {
        setNotification(error.message, "error");
      });
    setLoading(false);
  };

  return {
    product,
    loading,
    disableButton,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
  };
};
