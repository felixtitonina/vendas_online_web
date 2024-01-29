import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

import type { RootState } from "./";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
