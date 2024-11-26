type GenerateMetadataProps = {
  params: Promise<{ title: string }>;
};

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const { title } = await params;
  const decodedTitle = decodeURIComponent(title);
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

export default function Page() {
  return <div>OGP Test Page</div>;
}
