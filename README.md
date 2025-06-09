# React State Management Example

このプロジェクトは、React でのグローバル状態管理の実装例を示すサンプルアプリケーションです。Context API を使用してユーザー認証状態を管理する実装を行っています。

## 技術スタック

- React 18
- TypeScript
- Vite
- React Router v6
- Context API（状態管理）

## 機能概要

### 1. ログイン機能
- ユーザー名入力によるシンプルな認証
- グローバル状態でのユーザー情報管理
- ログイン後のページ遷移

### 2. ホーム画面
- Context API からのユーザー情報取得
- ログアウト機能
- ログアウト後のログインページへの遷移

## 実装の詳細

### グローバル状態管理（Context API）

`src/contexts/UserContext.tsx`にて、以下の機能を実装：

```typescript
type UserContextType = {
  username: string;
  login: (name: string) => void;
  logout: () => void;
};
```

- `username`: ログインユーザーの名前
- `login`: ユーザー名を保存する関数
- `logout`: ユーザー情報をクリアする関数

### ページコンポーネント

1. **LoginPage** (`src/pages/LoginPage.tsx`)
   - ユーザー名入力フォーム
   - バリデーション（空文字チェック）
   - ログイン処理とページ遷移

2. **HomePage** (`src/pages/HomePage.tsx`)
   - Context API からのユーザー情報取得
   - ログアウト処理
   - ユーザー名の表示

### ルーティング設定

`App.tsx`にて、React Router を使用して以下のルーティングを実装：

- `/login`: ログインページ
- `/home`: ホームページ
- `/`: ログインページへのリダイレクト

## プロジェクト構造

```
src/
  ├── contexts/      # Context API関連
  │   └── UserContext.tsx
  ├── pages/         # ページコンポーネント
  │   ├── LoginPage.tsx
  │   └── HomePage.tsx
  ├── App.tsx        # メインコンポーネント
  ├── App.css        # スタイル定義
  └── main.tsx       # エントリーポイント
```

## セットアップ方法

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 使用方法

1. アプリケーションを起動
2. ログインページでユーザー名を入力
3. ログインボタンをクリック
4. ホームページでユーザー名が表示されることを確認
5. ログアウトボタンでログアウト

## 学習ポイント

1. **Context API の基本**

   - コンテキストの作成と提供
   - カスタムフックの実装
   - 状態更新の方法

2. **React Router v6 の使用**

   - ルーティング設定
   - プログラムによるナビゲーション
   - リダイレクト処理

3. **TypeScript の活用**
   - 型定義
   - コンポーネントの型付け
   - コンテキストの型安全性