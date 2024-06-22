import React from "react";
import IssueTableCell from "./IssueTableCell";
import { GoCalendar, GoPeople, GoStack, GoTag } from "react-icons/go";

interface IssueTableHeadCellProps {
  title: string;
}

interface IssueTableHeaderProps {
  headCells: Array<IssueTableHeadCellProps>;
}

// const withIcon = ["tag", "owner", "date", "priority"];

const IssueTableHeader = ({ headCells }: IssueTableHeaderProps) => {
  return (
    <div className="flex items-center justify-around border-y border-y-gray-300">
      {headCells.length > 0 &&
        headCells.map((cell, index) => (
          <IssueTableCell
            key={cell.title}
            cellType="th"
            isLastHead={index === headCells.length - 1}
            isLonger={index === 0}
          >
            {cell.title.toLowerCase().includes("tag") && (
              <GoTag fill="#082f49" />
            )}
            {cell.title.toLowerCase().includes("owner") && (
              <GoPeople fill="#082f49" />
            )}
            {cell.title.toLowerCase().includes("date") && (
              <GoCalendar fill="#082f49" />
            )}
            {cell.title.toLowerCase().includes("priority") && (
              <GoStack fill="#082f49" />
            )}
            {cell.title}
          </IssueTableCell>
        ))}
    </div>
  );
};

export default IssueTableHeader;
