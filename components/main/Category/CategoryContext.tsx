"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CategoryContextType {
  isCategoryOpen: boolean;
  toggleCategory: () => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategory = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  return (
    <CategoryContext.Provider value={{ isCategoryOpen, toggleCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory err");
  }
  return context;
};
