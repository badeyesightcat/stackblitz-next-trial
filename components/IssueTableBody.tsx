"use client";
import React from "react";
import IssueTableBodyRow from "./IssueTableBodyRow";
import { useAppSelector } from "@/lib/hooks";
import { selectIssues } from "@/lib/features/issues/issuesSlice";

const IssueTableBody = () => {
  const issues = useAppSelector(selectIssues);

  return (
    <div className="items-stretch grow">
      {issues?.map((row) => (
        <IssueTableBodyRow
          key={row._id}
          row={row}
        />
      ))}
    </div>
  );
};

export default IssueTableBody;
