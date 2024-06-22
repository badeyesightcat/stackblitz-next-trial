import React from "react";

interface IssueCellProps {
  cellType: string;
  // value: string | number | object | undefined;
  children: any;
  isLastHead?: boolean;
  isLonger?: boolean;
}

const IssueTableCell = ({
  children,
  cellType,
  isLastHead,
  isLonger,
}: IssueCellProps) => {
  return (
    <div
      className={`relative flex items-center gap-1 py-2 px-4 flex-auto capitalize text-sm ${
        cellType === "th" ? "font-bold" : ""
      } ${
        isLastHead !== undefined && !isLastHead
          ? "after:absolute after:content-[''] after:w-[1px] after:bottom-0 after:bg-gray-300 after:top-0 after:left-full"
          : ""
      } ${isLonger ? "basis-80" : "basis-40"}`}
    >
      {children}
    </div>
  );
};

export default IssueTableCell;
