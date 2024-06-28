import React from "react";
import IssueTableHeader from "./IssueTableHeader";
import IssueTableBody from "./IssueTableBody";

const issueTableHeaderCells = [
  { title: "title" },
  { title: "collections" },
  { title: "tag" },
  { title: "owner" },
  { title: "date" },
  { title: "priority" },
];

const IssueTable = () => {
  return (
    <div className="bg-white">
      <IssueTableHeader headCells={issueTableHeaderCells} />
      <IssueTableBody />
    </div>
  );
};

export default IssueTable;
