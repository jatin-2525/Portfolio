/* Smart external-link helper.
 * Tries a normal new-tab open first. If the environment blocks popups
 * (sandboxed previews, strict browsers), it falls back to copying the
 * link to the clipboard and surfacing a toast so the link is never lost.
 */

type ToastFn = (msg: string) => void;
const subs: ToastFn[] = [];

export function toast(msg: string) {
  subs.forEach((f) => f(msg));
}

export function onToast(f: ToastFn) {
  subs.push(f);
  return () => {
    const i = subs.indexOf(f);
    if (i > -1) subs.splice(i, 1);
  };
}

export function copyText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch {
    /* no-op */
  }
  document.body.removeChild(ta);
  return Promise.resolve();
}

export function openExternal(url: string, label = "the link") {
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (win) return true;
  // Blocked — copy it and tell the user, so the link is never lost.
  const toCopy = url.startsWith("mailto:") ? url.replace(/^mailto:/, "") : url;
  copyText(toCopy)
    .then(() =>
      toast(
        url.startsWith("mailto:")
          ? `${label} couldn't open here — the email address is copied to your clipboard.`
          : `${label} was blocked by the browser — it's copied to your clipboard, just paste it in a new tab.`
      )
    )
    .catch(() => toast(`${label}: open it manually → ${url}`));
  return false;
}
