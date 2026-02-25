import React, { ReactNode } from "react";
import clsx from "clsx";
import { AccordionGroupContext } from "./AccordionContext";

interface AccordionGroupProps {
  children: ReactNode;
  className?: string;
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ children, className }) => {

  return (
    <AccordionGroupContext.Provider value={{ inGroup: true }}>
      <div
        className={clsx(
          "border rounded-lg overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    </AccordionGroupContext.Provider>
  );
};

export default AccordionGroup;
