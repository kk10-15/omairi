import type { Shrine } from "../types/shrine";
import ShrineCard from "./ShrineCard";

type Props = {
  shrines: Shrine[];
  onDeleteShrine: (id: string) => void;
  onToggleStatus: (id: string) => void;
};

const ShrineList = ({ shrines, onDeleteShrine, onToggleStatus }: Props) => {
  return (
    <section className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
      {shrines.map((shrine) => (
        <ShrineCard
          key={shrine.id}
          shrine={shrine}
          onDeleteShrine={onDeleteShrine}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </section>
  );
};
export default ShrineList;
