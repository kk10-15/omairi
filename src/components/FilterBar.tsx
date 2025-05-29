import type { ShrineStatus } from "../types/shrine";

type FilterOption = ShrineStatus | "all";

type Props = {
  currentFilter: FilterOption;
  onChangefilter: (option: FilterOption) => void;
};

const filterOptions: (ShrineStatus | "all")[] = ["all", "visited", "wish"];

const FilterBar = ({ currentFilter, onChangefilter }: Props) => {
  return (
    <div className="flex gap-2">
      {filterOptions.map((option) => (
        <button
          key={option}
          onClick={() => onChangefilter(option)}
          className={`rounded-3xl border px-3 py-1 text-sm ${
            currentFilter === option
              ? "border-pine bg-pine text-white"
              : "border-pine bg-white text-pine"
          }`}
        >
          {option === "all"
            ? "すべて"
            : option === "wish"
              ? "行きたい"
              : "訪問済"}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
