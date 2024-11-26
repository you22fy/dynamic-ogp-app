"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TestOGPGenerator() {
  const [title, setTitle] = useState("テストタイトル");
  const router = useRouter();

  const ogImageUrl = `/api/og?title=${encodeURIComponent(title)}`;
  const shareableUrl = `/test-ogp/${encodeURIComponent(title)}`;

  const handlePreview = () => {
    router.push(shareableUrl);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">OGP画像生成・テストツール</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          記事タイトル
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="space-y-4">
        <div className="border rounded p-4">
          <h2 className="text-lg font-medium mb-2">OGP画像プレビュー：</h2>
          <img
            src={ogImageUrl}
            alt="OGP Preview"
            className="w-full border rounded"
          />
        </div>

        <div className="border rounded p-4">
          <h2 className="text-lg font-medium mb-2">シェア用URL：</h2>
          <code className="block bg-gray-100 p-2 rounded break-all">
            {window.location.origin + shareableUrl}
          </code>
        </div>

        <button
          onClick={handlePreview}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          実際のページをプレビュー
        </button>

        <div className="border rounded p-4">
          <h2 className="text-lg font-medium mb-2">使い方：</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>上記のフォームでタイトルを入力</li>
            <li>「実際のページをプレビュー」をクリック</li>
            <li>表示されたページのURLをSNSでシェア</li>
            <li>シェアされたURLには正しいOGP情報が含まれています</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
