import classNames from "classnames";
import React from "react";
import { GoScreenFull, GoScreenNormal } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setDetailViewVisibility,
  selectDetailViewVisibility,
} from "@/lib/features/ui/uiSlice";

const IssueTrackingHeader = () => {
  const detailViewVisibility = useAppSelector(selectDetailViewVisibility);
  const dispatch = useAppDispatch();

  return (
    <div className="flex py-6 justify-between">
      {detailViewVisibility !== 2 && (
        <h2
          className={classNames(
            "relative text-xl text-[--dark] z-1 uppercase",
            "before:content-[''] before:absolute before:w-full before:h-2 before:bg-[--light] before:left-0 before:top-[30%] before:z-[-1]"
          )}
        >
          issue board
        </h2>
      )}

      <div className="flex gap-4">
        {detailViewVisibility !== 2 && (
          <>
            <button className="pt-2 px-3 pb-3 leading-none bg-[--dark] text-white text-sm">
              create issue
            </button>

            <button
              title={
                detailViewVisibility === 0
                  ? "Show the detail section in half"
                  : "Hide the detail section"
              }
              onClick={
                detailViewVisibility === 0
                  ? () => dispatch(setDetailViewVisibility(1))
                  : () => dispatch(setDetailViewVisibility(0))
              }
            >
              {detailViewVisibility === 0 ? (
                <GoScreenNormal size={26} />
              ) : (
                <GoScreenFull size={26} />
              )}
            </button>
          </>
        )}

        {/* <button
          title={
            detailViewSize === 0
              ? "Show the detail section in full"
              : "Hide the detail section"
          }
          onClick={
            detailViewSize === 0
              ? () => dispatch(setDetailViewSize(2))
              : () => dispatch(setDetailViewSize(0))
          }
        >
          {detailViewSize === 0 ? (
            <GoMoveToStart size={26} />
          ) : (
            <GoMoveToEnd size={26} />
          )}
        </button> */}
      </div>
    </div>
  );
};

export default IssueTrackingHeader;
