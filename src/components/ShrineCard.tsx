import type { Shrine } from "../types/shrine";

type Props = {
  shrine: Shrine;
  onDeleteShrine: (id: string) => void;
  onToggleStatus: (id: string) => void;
};

const ShrineCard = ({ shrine, onDeleteShrine, onToggleStatus }: Props) => {
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
      <div className="mb-4 aspect-[4/3]">
        <img
          src={
            shrine.imageUrl ||
            "https://placehold.jp/cccccc/969696/400x300.png?text=No+Image"
          }
          alt={`${shrine.name}の画像`}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="flex-grow space-y-2 pl-2">
        <h3 className="text-xl font-bold tracking-wide">
          <span className="border-l-8 border-goldish pl-2">{shrine.name}</span>
        </h3>
        <p className="text-sm">
          <span className="font-semibold text-gray-400">所在地：</span>
          {shrine.location || "未設定"}
        </p>

        <p className="text-sm">
          <span className="font-semibold text-gray-400">ステータス：</span>
          <span
            className={`${shrine.status === "visited" ? "text-pine" : "text-goldish"} font-semibold`}
          >
            {shrine.status === "visited" ? "訪問済" : "行きたい"}
          </span>
        </p>
        <p className="relative whitespace-pre-line pl-9 text-sm leading-relaxed">
          <span className="absolute left-0 top-0 font-semibold text-gray-400">
            メモ：
          </span>
          {shrine.memo || "なし"}
        </p>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={() => onToggleStatus(shrine.id)}
          className="inline-flex w-32 items-center justify-center rounded-md border border-goldish bg-white px-4 py-1 text-center text-goldish shadow-sm transition hover:bg-goldish hover:text-white"
        >
          {shrine.status === "visited" ? "未訪問に戻す" : "訪問済にする"}
        </button>
        <button
          onClick={() => onDeleteShrine(shrine.id)}
          className="rounded-md border bg-vermilion px-3 py-1 text-sm text-white shadow-sm transition hover:bg-ink"
        >
          削除
        </button>
      </div>
    </div>
  );
};

export default ShrineCard;
