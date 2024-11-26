"use client";

import { useState, useEffect } from "react";

export default function TestOGP() {
  const [title, setTitle] = useState("テストタイトル");
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const ogImageUrl = `/api/og?title=${encodeURIComponent(title)}`;
  const fullOgImageUrl = `${baseUrl}${ogImageUrl}`;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">OGP画像テストページ</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          タイトル
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
          <h2 className="text-lg font-medium mb-2">生成されたOGP画像：</h2>
          <img
            src={ogImageUrl}
            alt="OGP Preview"
            className="w-full border rounded"
          />
        </div>

        <div className="border rounded p-4">
          <h2 className="text-lg font-medium mb-2">
            完全なOGP画像URL（OGPチェッカー用）：
          </h2>
          <code className="block bg-gray-100 p-2 rounded break-all">
            {fullOgImageUrl}
          </code>
        </div>

        <div className="border rounded p-4">
          <h2 className="text-lg font-medium mb-2">HTMLメタタグ：</h2>
          <code className="block bg-gray-100 p-2 rounded break-all">
            {`<meta property="og:image" content="${fullOgImageUrl}" />
<meta property="og:title" content="${title}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${baseUrl}" />`}
          </code>
        </div>

        <div className="mt-4 space-y-2">
          <h2 className="text-lg font-medium">OGPチェックツール：</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a
                href={`https://ogp.buta3.net/?url=${encodeURIComponent(
                  baseUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                OGP Checker で確認
              </a>
            </li>
            <li>
              <a
                href={`https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(
                  baseUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Facebook Debugger で確認
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
