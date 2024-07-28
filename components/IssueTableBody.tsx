"use client";
import React from "react";
import IssueTableBodyRow from "./IssueTableBodyRow";

const issueTableBodyRows = [
  {
    title: "Plan the first sprint",
    collectionType: "Backlog",
    tag: ["Integration"],
    reportedBy: "Charlie",
    assignedTo: "Daria",
    priority: "High priority",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Fix duplicate notifications",
    collectionType: "Backlog",
    tag: ["Bug"],
    reportedBy: "Charlie",
    assignedTo: "Lizzy",
    priority: "Low priority",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Enable checkout on mobile",
    collectionType: "Backlog",
    tag: ["Mobile"],
    reportedBy: "Charlie",
    assignedTo: "Dolores",
    priority: "High priority",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Add intercom integration",
    collectionType: "Backlog",
    tag: ["Integration"],
    reportedBy: "Charlie",
    assignedTo: "Nick",
    priority: "Low priority",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Sprint item template",
    collectionType: "Backlog",
    tag: ["Styling"],
    reportedBy: "Charlie",
    assignedTo: "Bazos",
    priority: "Medium priority",
    date: new Date().toLocaleDateString(),
  },
];

const IssueTableBody = () => {
  return (
    <div className="items-stretch grow">
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
