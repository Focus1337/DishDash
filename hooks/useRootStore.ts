import React from "react";
import {storesContext} from "../utils/RootStore.ts";

export const useRootStore = () => React.useContext(storesContext);