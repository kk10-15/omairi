# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

# omairi.（おまいりドット）

神社やお寺をブックマークして管理できる、シンプルなWebアプリです。
行きたい場所や、訪問済みの場所を記録しておけるので、おまいりの記録・計画にぴったり！

## デモページ

[▶ omairi.を使ってみる](https://kk10-15.github.io/omairi/)

## 使用技術

React + TypeScript<br>
Vite<br>
Tailwind CSS<br>
GitHub Pages で公開

## 開発経緯

React と TypeScript の学習を目的として、
ローカルストレージやステータス管理、入力フォームを取り入れたアプリを作成しました。
今回は特に各入力項目や訪問ステータス等あらゆるステータス管理の使い方や、
各セクションごとのコンポーネント化について学びを深めました。
また、TailwindCSSのレイアウト設計・スタイル調整に慣れるため、
レスポンシブ対応やhoverエフェクトなど、UIデザインにも力を入れました。

## 機能一覧

ブックマーク登録（名前/所在地/ステータス/メモ/画像）<br>
登録済み一覧の表示<br>
ステータス（訪問済/行きたい）の切替<br>
絞り込み機能<br>
キーワード検索機能<br>
ローカルストレージ保存

## 今後の改善ポイント（メモ）

編集機能の追加<br>
UIデザインのブラッシュアップ<br>
SP表示での最適化<br>
アニメーション演出の追加
