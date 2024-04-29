"use client";

import { IPagination } from "@/app/lib/definitions/common";
import Button from "../atoms/Button";

export default function Pagination({ prev, next, onClick }: IPagination) {
  const defaultClassName = "bg-gray-700 py-3 px-8 rounded-xl";
  const disabledClassName = "disabled:opacity-50 cursor-not-allowed";

  const getClassName = (condition: boolean) =>
    `${defaultClassName} ${condition ? disabledClassName : ""}`;

  return prev || next ? (
    <section className="col-span-2 flex justify-center">
      <div className="gap-10 flex p-4">
        <Button
          disabled={!prev}
          onClick={() => onClick(prev)}
          className={getClassName(!prev)}
          text="Prev"
        />
        <Button
          disabled={!next}
          onClick={() => onClick(next)}
          className={getClassName(!next)}
          text="Next"
        />
      </div>
    </section>
  ) : null;
}
