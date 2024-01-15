import type { Router as RemixRouter } from "@remix-run/router";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { loginRoutes } from "./modules/login/routes";
import { GlobalProvider } from "./shared/hooks/useGlobalContext";

const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>Tela Principal</div>,
    errorElement: <div>Página não encontrada.</div>,
  },
];
const router: RemixRouter = createBrowserRouter([
  ...mainRoutes,
  ...loginRoutes,
]);

function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App;
