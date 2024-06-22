"use client";
import React from "react";

interface IssueTableBodyProps {
  title: string;
  collectionType: string;
  tag: Array<string>;
  owner: string;
  date: Date;
  priority: string;
}

const IssueTableBody = (props: IssueTableBodyProps) => {
  console.log(props);
  return <div>IssueTableBody</div>;
};

export default IssueTableBody;
