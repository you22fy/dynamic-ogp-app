import { useConfig } from "nextra-theme-docs";

export default {
  head: () => {
    const { title } = useConfig();
    return (
      <>
        <meta
          property="og:image"
          content={`https://dynamic-ogp-j3qp6awp6-you22fys-projects.vercel.app/api/og?title=${title}`}
        />
      </>
    );
  },
  useNextSeoProps: () => ({
    defaultTitle: "nextra-ogp-sample",
    titleTemplate: "nextra-ogp-sample",
    description: "nextra-ogp-sample",
    openGraph: {
      url: "https://dynamic-ogp-j3qp6awp6-you22fys-projects.vercel.app",
      description: "nextra-ogp-sample",
    },
  }),
};
