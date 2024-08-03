import React from "react";
import IssueTableCell from "./IssueTableCell";
import { GoCalendar, GoPeople, GoStack, GoTag, GoPerson } from "react-icons/go";

interface IssueTableHeadCellProps {
  title: string;
}

interface IssueTableHeaderProps {
  headerCells: Array<IssueTableHeadCellProps>;
}

// const withIcon = ["tag", "owner", "date", "priority"];

const IssueTableHeader = ({ headerCells }: IssueTableHeaderProps) => {
  return (
    <div className="flex items-center justify-around border-y border-y-gray-300">
      {headerCells.length > 0 &&
        headerCells.map((cell, index) => (
          <IssueTableCell
            key={cell.title}
            cellType="th"
            isLastHead={index === headerCells.length - 1}
            isLonger={index === 0}
          >
            {cell.title.toLowerCase().includes("tag") && (
              <GoTag fill="#082f49" />
            )}
            {cell.title.toLowerCase().includes("reported") && (
              <GoPerson fill="#082f49" />
            )}
            {cell.title.toLowerCase().includes("assigned") && (
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
