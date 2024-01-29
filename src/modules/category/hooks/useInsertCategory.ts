import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { URL_CATEGORY } from "../../../shared/constants/urls";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { useRequests } from "../../../shared/hooks/useRequests";
import { useCategoryReducer } from "../../../store/reducers/categoryReducer/useCategoryReducer";
import { CategoryRoutesEnum } from "../enums/categoryRoutes.enum";

export const useInsertCategory = () => {
  const { setCategories } = useCategoryReducer();
  const navigate = useNavigate();
  const { request } = useRequests();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    if (!name) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [name]);
  const insertCategory = async () => {
    setLoading(true);
    await request(URL_CATEGORY, MethodsEnum.POST, undefined, { name });
    request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    navigate(CategoryRoutesEnum.CATEGORY);
    setLoading(false);
  };
  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return { name, handleOnChangeName, insertCategory, loading, disabledButton };
};
