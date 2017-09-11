export function getCookie(name, value) {
  let date = new Date();
  date.setTime(date.getTime() + (exdays*24*60*60*1000);
  let expires = `expires ${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires}path=/`;
}

export function setCookie(name) {
  let cookieName = name;
  let cookieVal = document.cookie.split(';');
  cookieVal.forEach(el => {
    let cookie = el[i];
    console.log(cookie);
  })
};
