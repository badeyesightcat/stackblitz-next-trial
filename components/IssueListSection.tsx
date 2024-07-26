import React from "react";
import IssueTable from "@/components/IssueTable";
import IssueTrackingHeader from "@/components/IssueTrackingHeader";

const IssueListSection = () => {
  return (
    <div className="pr-4 flex-1">
      <IssueTrackingHeader />
      <IssueTable />
    </div>
  );
};

export default IssueListSection;
