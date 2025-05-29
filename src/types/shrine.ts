export type ShrineStatus = 'visited' | 'wish';

export type Shrine = {
  id: string; // id
  name: string; // 名前（必須）
  location?: string; // 所在地（任意）
  status: ShrineStatus; // 訪問ステータス（訪問済/行きたい）
  memo?: string; // メモ（任意）
  imageUrl?: string; // 画像URL（任意）
};
