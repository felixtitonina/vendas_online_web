import { RouteObject } from "react-router-dom";

import FirstScreen from "./screens/FirstScreen";
import PageNotFound from "./screens/PageNotFound";

export enum FirstRoutesEnum {
  FIRST_SCREEN = "/",
}

export const firstScreenRoutes: RouteObject[] = [
  {
    path: FirstRoutesEnum.FIRST_SCREEN,
    element: <FirstScreen />,
    errorElement: <PageNotFound />,
  },
];
