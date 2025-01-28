import Script from "next/script";

export default function StatusPageWidget() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-bundle.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://unpkg.com/@statuspage/status-widget/dist/index.js"
        strategy="beforeInteractive"
      />
      <statuspage-widget src={process.env.NEXT_PUBLIC_STATUS_PAGE_URL} />
    </>
  );
}
