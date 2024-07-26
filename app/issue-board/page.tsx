"use client";
import IssueContentSection from "@/components/IssueContentSection";
import IssueListSection from "@/components/IssueListSection";
import React from "react";
import { useAppSelector } from "@/lib/hooks";
import { selectDetailViewVisibility } from "@/lib/features/ui/uiSlice";

const IssueBoardPage = () => {
  const detailViewVisibility = useAppSelector(selectDetailViewVisibility);

  return (
    <div className="flex px-5 bg-slate-100">
      <IssueListSection />
      {detailViewVisibility !== 0 && <IssueContentSection />}
    </div>
  );
};

export default IssueBoardPage;
