import { defaultLocaleHome } from "@/i18n/paths";

export default function RootPage() {
  const target = defaultLocaleHome();

  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${target}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(target)});`,
        }}
      />
      <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
        <p>
          <a href={target}>进入作品集 →</a>
        </p>
      </main>
    </>
  );
}
