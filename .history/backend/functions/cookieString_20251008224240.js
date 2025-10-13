// Helper functions
module.exports.getCookieString = (jar, url) => {
  return jar.getCookiesSync(url).map(c => `${c.key}=${c.value}`).join('; ');
};

module.exports.storeCookies = (jar, url, response) => {
  const setCookieHeader = response.headers['set-cookie'];
  if (setCookieHeader) {
    setCookieHeader.forEach(cookie => {
      jar.setCookieSync(cookie, url);
    });
  }
};