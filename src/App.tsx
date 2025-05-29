import Header from "./components/Header";
import EntryForm from "./components/EntryForm";
import FilterBar from "./components/FilterBar";
import ShrineList from "./components/ShrineList";
import { useEffect, useState } from "react";
import type { Shrine, ShrineStatus } from "./types/shrine";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [shrines, setShrines] = useState<Shrine[]>(() => {
    const stored = localStorage.getItem("shrines");
    return stored ? JSON.parse(stored) : [];
  });
  const [filter, setFilter] = useState<ShrineStatus | "all">("all"); // フィルター（訪問ステータス）
  const [searchTerm, setSearchTerm] = useState(""); // 検索ワード

  // 登録操作
  const handleAddShrine = (newShrine: Shrine) =>
    setShrines([...shrines, newShrine]);

  // 削除操作
  const handleDeleteShrine = (id: string) => {
    setShrines(shrines.filter((shrine) => shrine.id !== id));
  };

  // ステータス切替
  const handleToggleStatus = (id: string) => {
    const updated: Shrine[] = shrines.map((shrine) =>
      shrine.id === id
        ? {
            ...shrine,
            status: shrine.status === "visited" ? "wish" : "visited",
          }
        : shrine,
    );
    setShrines(updated);
  };

  // フィルター
  const filterdShrine = shrines
    .filter((shrine) => (filter === "all" ? true : shrine.status === filter))
    .filter(
      (shrine) =>
        shrine.name.includes(searchTerm) ||
        shrine.location?.includes(searchTerm),
    );

  // 入力データ保存
  useEffect(() => {
    localStorage.setItem("shrines", JSON.stringify(shrines));
  }, [shrines]);

  return (
    <div className="min-h-screen bg-parchment p-4 text-ink">
      <Header />
      <main className="flex flex-col gap-8 px-2 pt-20 md:flex-row">
        {/* 左カラム（登録フォーム） */}
        <section className="relative w-full space-y-4 self-start rounded-md border border-pine p-4 shadow-md md:sticky md:top-24 md:w-1/3">
          <h2 className="mb-2 text-xl font-bold">≪ブックマーク登録≫</h2>
          <EntryForm onAddShrine={handleAddShrine} />
        </section>

        {/*右カラム（絞り込み + 一覧） */}
        <section className="w-full space-y-4 md:w-2/3">
          <div className="flex flex-col flex-wrap gap-3 rounded-md p-3 shadow-inner ring-1 ring-gray-300/70 md:max-w-fit md:flex-row md:items-center md:gap-4">
            <h2 className="text-lg font-bold text-gray-500">絞り込み</h2>
            <FilterBar currentFilter={filter} onChangefilter={setFilter} />
            <SearchBar value={searchTerm} onChangeText={setSearchTerm} />
          </div>
          <h2 className="mb-2 text-xl font-bold">≪ブックマーク一覧≫</h2>
          <ShrineList
            shrines={filterdShrine}
            onDeleteShrine={handleDeleteShrine}
            onToggleStatus={handleToggleStatus}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
