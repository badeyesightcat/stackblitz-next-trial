"use client";
import classNames from "classnames";
import React, { useState } from "react";
import {
  GoMoveToEnd,
  GoMoveToStart,
  GoScreenFull,
  GoScreenNormal,
} from "react-icons/go";

enum SidebarVisibilityType {
  Hidden,
  Shown,
}

enum SidebarSizeType {
  Half,
  Total,
}

const IssueTrackingHeader = () => {
  const [listVisibility, setListVisibility] =
    useState<SidebarVisibilityType>(0);
  const [listSize, setListSize] = useState<SidebarSizeType>();

  const handleListSize = () => {
    setListSize((prev) => (prev === 0 ? 1 : 0));
  };

  const handleListVisibility = () => {
    setListVisibility((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="flex py-6 justify-between">
      <h2
        className={classNames(
          "relative text-xl text-[--dark] z-10",
          "before:content-[''] before:absolute before:w-full before:h-2 before:bg-[--light] before:left-0 before:top-[30%] before:z-[-1]"
        )}
      >
        ISSUE TRACKER
      </h2>

      <div className="flex gap-4">
        <button className="pt-2 px-3 pb-3 leading-none bg-[--dark] text-white text-sm">
          create issue
        </button>

        <button
          title={listSize === 0 ? "maximize sidebar" : "minimize sidebar"}
          onClick={handleListSize}
        >
          {listSize === 0 ? (
            <GoScreenFull size={26} />
          ) : (
            <GoScreenNormal size={26} />
          )}
        </button>

        <button
          title={listVisibility === 0 ? "maximize sidebar" : "minimize sidebar"}
          onClick={handleListVisibility}
        >
          {listVisibility === 0 ? (
            <GoMoveToStart size={26} />
          ) : (
            <GoMoveToEnd size={26} />
          )}
        </button>
      </div>
    </div>
  );
};

export default IssueTrackingHeader;
