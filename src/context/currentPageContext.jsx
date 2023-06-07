import { createContext, useState, useContext } from "react";

const currentPageContext = createContext({
    currentPage: "",
    changePage: (currentPage) => {},
});

