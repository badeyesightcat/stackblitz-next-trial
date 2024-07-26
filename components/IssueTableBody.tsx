"use client";
import React from "react";
import IssueTableBodyRow from "./IssueTableBodyRow";

const issueTableBodyRows = [
  {
    title: "Plan the first sprint",
    collectionType: "Backlog",
    tag: [],
    reportedBy: "Charlie",
    assignedTo: "",
    date: "",
    priority: "High priority",
  },
  {
    title: "Fix duplicate notifications",
    collectionType: "Backlog",
    tag: ["Bug"],
    reportedBy: "",
    assignedTo: "",
    date: "",
    priority: "",
  },
  {
    title: "Enable checkout on mobile",
    collectionType: "Backlog",
    tag: ["Mobile"],
    reportedBy: "",
    assignedTo: "",
    date: "",
    priority: "",
  },
  {
    title: "Add intercom integration",
    collectionType: "Backlog",
    tag: ["Integration"],
    reportedBy: "",
    assignedTo: "",
    date: "",
    priority: "",
  },
  {
    title: "Sprint item template",
    collectionType: "Backlog",
    tag: [],
    reportedBy: "",
    assignedTo: "",
    date: "",
    priority: "",
  },
];

const IssueTableBody = () => {
  return (
    <div>
      {issueTableBodyRows?.map((row) => (
        <IssueTableBodyRow
          key={`${row.title}-${row.date}`}
          row={row}
        />
      ))}
    </div>
  );
};

export default IssueTableBody;
