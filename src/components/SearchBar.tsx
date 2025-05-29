import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type Props = {
  value: string;
  onChangeText: (value: string) => void;
};

const SearchBar = ({ value, onChangeText }: Props) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="神社仏閣名で検索"
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        className="h-8 w-full rounded-md border border-pine bg-white px-3 py-2 pr-10 text-sm shadow-sm md:w-80"
      />
      <MagnifyingGlassIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchBar;
