export const KEY_LOCAL_STORAGE_TOKEN = (function() {
  const suffix = process.env.VUE_APP_TOKEN_SUFFIX;
  return `wave-writer-token-${suffix}`;
})();
export const KEY_LOCAL_STORAGE_USERINFO = `userInfo`;
