import { useEffect, useState } from "react";

import { URL_CATEGORY } from "../../../shared/constants/urls";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { useRequests } from "../../../shared/hooks/useRequests";
import { useCategoryReducer } from "../../../store/reducers/categoryReducer/useCategoryReducer";

export const useCategory = () => {
  const { categories, setCategories } = useCategoryReducer();
  const [categoriesFiltered, setCategoriesFiltered] = useState(categories);

  useEffect(() => {
    setCategoriesFiltered([...categories]);
  }, [categories]);

  const { request } = useRequests();
  useEffect(() => {
    if (!categories || categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleOnChangeShearch = (value: string) => {
    console.log("handleOnChangeShearch", value);
    if (!value) {
      setCategoriesFiltered([...categories]);
    } else {
      setCategoriesFiltered([
        ...categoriesFiltered.filter((category) =>
          category.name.toUpperCase().includes(value.toUpperCase()),
        ),
      ]);
    }
  };
  return { categories: categoriesFiltered, handleOnChangeShearch };
};
