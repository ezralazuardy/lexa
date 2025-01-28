import Script from "next/script";

export default function StatusPageWidget() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-bundle.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://unpkg.com/@statuspage/status-widget/dist/index.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://lexa.statuspage.io/embed/script.js"
        strategy="lazyOnload"
      />
      <statuspage-widget src={process.env.NEXT_PUBLIC_STATUS_PAGE_URL} />
    </>
  );
}
