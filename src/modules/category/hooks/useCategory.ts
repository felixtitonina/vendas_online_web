import { useEffect, useState } from "react";

import { URL_CATEGORY } from "../../../shared/constants/urls";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests";

export const useCategory = () => {
  const { categories, setCategories } = useDataContext();
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
