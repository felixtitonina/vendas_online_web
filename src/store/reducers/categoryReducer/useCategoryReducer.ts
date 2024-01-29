import { useDispatch } from "react-redux";

import { CategoryType } from "../../../shared/types/CategoryType";
import { useAppSelector } from "../../hooks";
import { setCategoryAction } from ".";

export const useCategoryReducer = () => {
  const { categories } = useAppSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const setCategories = (categories: CategoryType[]) => {
    dispatch(setCategoryAction(categories));
  };
  return {
    categories,
    setCategories,
  };
};
