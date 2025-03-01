import React from "react";
import Link from "next/link";
import { DataItems } from "@/types/types";

interface CategoryContentProps {
  categoryItems: DataItems[];
  isCategoryOpen:any;
}

const CategoryInner: React.FC<CategoryContentProps> = React.memo(({ categoryItems,isCategoryOpen }) => {

  return (
   <>
   </>
  );
});

export default CategoryInner;
