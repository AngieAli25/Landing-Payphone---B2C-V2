"use client";

import { useEffect } from "react";

function getConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem("cookie-consent") === "true";
  } catch {
    return false;
  }
}

export function Analytics() {
  useEffect(() => {
    if (!getConsent()) return;
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    if (!gtmId) return;

    // Inject GTM
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    const s = document.createElement("script");
    s.appendChild(document.createTextNode(script.innerHTML));
    document.head.appendChild(s);

    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);
  }, []);

  return null;
}

