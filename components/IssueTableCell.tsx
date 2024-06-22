import React from "react";

interface IssueCellProps {
  cellType: string;
  // value: string | number | object | undefined;
  children: any;
  isLastHead: boolean;
}

const IssueTableCell = ({ children, cellType, isLastHead }: IssueCellProps) => {
  return (
    <div
      className={`relative py-2 flex-auto capitalize text-md text-center ${
        cellType === "th" ? "font-bold" : ""
      } ${
        !isLastHead
          ? "after:absolute after:content-[''] after:w-[1px] after:bottom-0 after:bg-gray-300 after:top-0 after:left-full"
          : ""
      }`}
    >
      {children}
    </div>
  );
};

export default IssueTableCell;
