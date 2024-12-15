import React from "react";

const CategoryPageSkelton = () => {
  return (
    <div className="grid grid-cols-[0.6fr_2.3fr_0.1fr] grid-rows-[0.2fr_2.9fr_0.1fr] gap-4 container-wrapper h-[70vh] w-full mx-auto">
      <div className="skeleton col-start-1 col-end-2 row-start-1 row-end-3"></div>
      <div className="skeleton col-start-2 col-end-3 row-start-1 row-end-2"></div>
      <div className="skeleton col-start-2 col-end-3 row-start-2 row-end-3"></div>
    </div>

  );
};

export default CategoryPageSkelton;
