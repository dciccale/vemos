let queryParamString = window.location.search;
let queryParams = new URLSearchParams(queryParamString);

if (window.location.host === 'vemos.org') {
  let browser = window.browser || window.chrome;
  let version = browser.runtime.getManifest().version;
  window.VEMOS_VERSION = version;
} else if (queryParams.get("vemos-id")) {
  window.VEMOS_PEER_ID = queryParams.get("vemos-id");
  let url = new URL(window.location.href);
  url.searchParams.delete("vemos-id");
  window.history.replaceState(
    window.history.state,
    window.document.title,
    url.toString()
  );
} else {
  console.log("No peer id");
}

