"use client";
import React from "react";
import IssueTableBodyRow from "./IssueTableBodyRow";

const issueTableBodyRows = [
  {
    title: "Plan the first sprint",
    collectionType: "Backlog",
    tag: [],
    owner: "Charlie",
    date: "",
    priority: "High priority",
  },
  {
    title: "Fix duplicate notifications",
    collectionType: "Backlog",
    tag: ["Bug"],
    owner: "",
    date: "",
    priority: "",
  },
  {
    title: "Enable checkout on mobile",
    collectionType: "Backlog",
    tag: ["Mobile"],
    owner: "",
    date: "",
    priority: "",
  },
  {
    title: "Add intercom integration",
    collectionType: "Backlog",
    tag: ["Integration"],
    owner: "",
    date: "",
    priority: "",
  },
  {
    title: "Sprint item template",
    collectionType: "Backlog",
    tag: [],
    owner: "",
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
