import { useState } from "react";
import type { Shrine, ShrineStatus } from "../types/shrine";

type Props = {
  onAddShrine: (shrine: Shrine) => void;
};

const EntryForm = ({ onAddShrine }: Props) => {
  const statusOptions: ShrineStatus[] = ["visited", "wish"];

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<ShrineStatus>(statusOptions[1]);
  const [memo, setMemo] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ページの再読み込み防止
    if (!name.trim()) return;

    const newShrine: Shrine = {
      id: crypto.randomUUID(), // 一意のUUID作成
      name,
      location,
      status,
      memo,
      imageUrl,
    };

    onAddShrine(newShrine);

    // 初期化
    setName("");
    setLocation("");
    setStatus(statusOptions[1]);
    setMemo("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2">
        {/* 名前 */}
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-pine">
            ◆名前（必須）
          </label>
          <input
            id="name"
            type="text"
            placeholder="名前（必須）"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-goldish focus:invalid:ring-vermilion"
            required
          />
        </div>
        {/* 所在地 */}
        <div className="space-y-1">
          <label htmlFor="location" className="text-sm font-medium text-pine">
            ◆所在地
          </label>
          <input
            id="location"
            type="text"
            placeholder="所在地"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-goldish"
          />
        </div>
        {/* 訪問ステータス */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-pine">
            ◆訪問ステータス
          </label>
          <div className="flex items-center gap-4 text-sm">
            {statusOptions.map((option) => (
              <label key={option} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="status"
                  value={option}
                  checked={status === option}
                  onChange={(e) => setStatus(e.target.value as ShrineStatus)}
                  className=""
                />
                <span>{option === "visited" ? "訪問済" : "行きたい"}</span>
              </label>
            ))}
          </div>
        </div>
        {/* メモ */}
        <div className="space-y-1">
          <label htmlFor="memo" className="text-sm font-medium text-pine">
            ◆メモ
          </label>
          {/* <input
            id="memo"
            type="text"
            placeholder="メモ"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-goldish"
          /> */}
          <textarea
            id="memo"
            placeholder="自由にメモを入力してください"
            onChange={(e) => setMemo(e.target.value)}
            value={memo}
            rows={3}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-goldish"
          />
        </div>
        {/* 画像URL */}
        <div className="space-y-1">
          <label htmlFor="imageUrl" className="text-sm font-medium text-pine">
            ◆画像URL
          </label>
          <input
            id="imageUrl"
            type="text"
            placeholder="画像URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-goldish"
          />
        </div>
      </div>

      <div className="pb-2 pt-6">
        <button
          type="submit"
          className="w-full rounded-md bg-goldish px-6 py-2 text-base font-bold text-white shadow-md transition hover:text-ink"
        >
          <span className="tracking-widest">登&nbsp;&nbsp;録</span>
        </button>
      </div>
    </form>
  );
};

export default EntryForm;
