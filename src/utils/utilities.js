export function getCookie(name) {
  let cookieName = name;
  let cookieVal = document.cookie.split(';');
  let cookie;
  cookieVal.forEach(i => {
    cookie = i;
    return cookie;
  });
  return cookie;
};

export function setCookie(name, value) {
  let date = new Date();
  date.setTime(date.getTime() + (date*24*60*60*1000));
  let expires = `expires ${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires}path=/`;
}
