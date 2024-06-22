import IssueTable from "@/components/IssueTable";
import IssueTrackingHeader from "@/components/IssueTrackingHeader";
import React from "react";

const IssueBoardPage = () => {
  return (
    <>
      <IssueTrackingHeader />
      <IssueTable />
    </>
  );
};

export default IssueBoardPage;
