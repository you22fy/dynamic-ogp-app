"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("テストタイトル");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = `${window.location.origin}/test-ogp/${encodeURIComponent(
      title
    )}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("クリップボードへのコピーに失敗しました:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            動的OGP画像のサンプル
          </h1>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
              placeholder="タイトルを入力してください"
            />

            <button
              onClick={handleCopy}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {copied ? "コピーしました！" : "URLをコピー"}
            </button>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={`/api/og?title=${encodeURIComponent(title)}`}
              width={1200}
              height={630}
              alt="OGP Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
