import React from "react";
import IssueTableCell from "./IssueTableCell";

interface IssueTableHeadCellProps {
  title: string;
}

interface IssueTableHeaderProps {
  headCells: Array<IssueTableHeadCellProps>;
}

const IssueTableHeader = ({ headCells }: IssueTableHeaderProps) => {
  return (
    <div className="flex items-center justify-around border-y border-y-gray-300">
      {headCells.length > 0 &&
        headCells.map((cell, index) => (
          <IssueTableCell
            key={cell.title}
            cellType="th"
            isLastHead={index === headCells.length - 1}
          >
            {cell.title}
          </IssueTableCell>
        ))}
    </div>
  );
};

export default IssueTableHeader;
