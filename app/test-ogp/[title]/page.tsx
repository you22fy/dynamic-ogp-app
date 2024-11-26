// app/test-ogp/[title]/page.tsx
export async function generateMetadata({
  params,
}: {
  params: { title: string };
}) {
  const decodedTitle = decodeURIComponent(params.title);
  return {
    title: decodedTitle,
    openGraph: {
      title: decodedTitle,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(decodedTitle)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function ArticlePage({ params }: { params: { title: string } }) {
  const decodedTitle = decodeURIComponent(params.title);
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{decodedTitle}</h1>
      <p>この記事のコンテンツがここに表示されます。</p>
    </div>
  );
}
