import React from "react";
import IssueTableCell from "./IssueTableCell";

interface IssueTableBodyRowCellProps {
  title: string;
  collectionType: string;
  tag: Array<string>;
  reportedBy: string;
  assignedTo: string;
  date: string | Date;
  priority: string;
}

interface IssueTableBodyRowProps {
  row: IssueTableBodyRowCellProps;
}

const IssueTableBodyRow = ({ row }: IssueTableBodyRowProps) => {
  const rowEntries = Object.entries(row);

  return (
    <div className="flex">
      {rowEntries?.map((entry, idx) => (
        <IssueTableCell
          key={`${entry[0]}-${entry[1]}`}
          cellType="td"
          isLonger={idx === 0}
        >
          {entry[1]}
        </IssueTableCell>
      ))}
    </div>
  );
};

export default IssueTableBodyRow;
