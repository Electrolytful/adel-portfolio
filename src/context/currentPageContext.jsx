import { createContext, useState, useContext } from "react";

const CurrentPageContext = createContext({
  currentPage: "",
  changePage: (page) => {},
});

export function CurrentPageContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("home");

  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  const context = {
    currentPage,
    changePage: changePageHandler,
  };

  return (
    <CurrentPageContext.Provider value={context}>
      {children}
    </CurrentPageContext.Provider>
  );
}

export const useCurrentPage = () => useContext(CurrentPageContext);
