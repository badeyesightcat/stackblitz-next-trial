import React from "react";
import IssueTableHeader from "./IssueTableHeader";
import IssueTableBody from "./IssueTableBody";

const issueTableHeaderCells = [
  { title: "title" },
  { title: "collections" },
  { title: "tag" },
  { title: "reported by" },
  { title: "assigned to" },
  { title: "priority" },
  { title: "date" },
];

const IssueTable = () => {
  return (
    <div className="bg-white flex flex-col">
      <IssueTableHeader headerCells={issueTableHeaderCells} />
      <IssueTableBody />
    </div>
  );
};

export default IssueTable;
