export const assetUrl = (url?: string) => {
  if (!url || /^(https?:|data:|blob:|#)/i.test(url)) return url;
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/$/, "")}/${url.replace(/^\/+/, "")}`;
};
