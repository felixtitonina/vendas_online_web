import { RouteObject } from "react-router-dom";

import Category from "./";
import { CategoryRoutesEnum } from "./enums/categoryRoutes.enum";
import CategoryInsert from "./screens/CategoryInsert";

export const categoryScreens: RouteObject[] = [
  { path: CategoryRoutesEnum.CATEGORY, element: <Category /> },
  { path: CategoryRoutesEnum.CATEGORY_INSERT, element: <CategoryInsert /> },
];
