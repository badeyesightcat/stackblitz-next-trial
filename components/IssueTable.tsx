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

const issueTableBodyCells = [
  {
    title: "Plan the first sprint",
    collectionType: "In progress",
    tag: [],
    owner: "Charlie",
    date: Date.now(),
    priority: "High priority",
  },
];

const IssueTable = () => {
  return (
    <div>
      <IssueTableHeader headCells={issueTableHeaderCells} />
      <IssueTableBody bodyCells={issueTableBodyCells} />
    </div>
  );
};

export default IssueTable;
