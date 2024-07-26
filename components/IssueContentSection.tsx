import React from "react";
import IssueContent from "./IssueContent";

const IssueContentSection = () => {
  return (
    <div className="flex-1 basis-1/2 flex">
      <div className="relative w-4 h-full"></div>
      <IssueContent />
    </div>
  );
};

export default IssueContentSection;
