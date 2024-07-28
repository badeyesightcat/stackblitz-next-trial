import React from "react";

const IssueContent = (props: any) => {
  const { issue } = props;
  return (
    <div className="flex-1">
      {!issue && (
        <div className="flex items-center justify-center h-full flex-col">
          <strong className="opacity-40 text-lg">Nothing selected</strong>
          <p className="opacity-50">
            Select an item or collection on the left.
          </p>
        </div>
      )}
    </div>
  );
};

export default IssueContent;
