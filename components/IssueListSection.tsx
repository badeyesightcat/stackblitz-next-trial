import React from "react";
import IssueTable from "@/components/IssueTable";
import IssueTrackingHeader from "@/components/IssueTrackingHeader";

const IssueListSection = () => {
  return (
    <div className="flex-1 basis-1/2">
      <IssueTrackingHeader />
      <IssueTable />
    </div>
  );
};

export default IssueListSection;
