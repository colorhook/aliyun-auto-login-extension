import ext from "./utils/ext";
import storage from "./utils/storage";

function el(id) {
  return document.getElementById(id)
}

if (location.href.indexOf("passport.aliyun.com") != -1) {
    // 主账号入口
    var links = document.querySelector('.login-links');
    var redirectEl = document.createElement('a');
    redirectEl.onclick = function() {
      top.location = "https://signin.aliyun.com/login.htm";
    }
    redirectEl.innerText = "子账号登录"
    redirectEl.style.cssText = "font-weight: 700;color: #f38; cursor: pointer"
    links.appendChild(redirectEl)
} else {
  // 子账号入口
  storage.get('account', function(resp) {
    var account = resp.account;
    if (!account || !account.username || !account.password) {
      return
    }
    if (el('user_principal_name')) {
      el('user_principal_name').value = account.username
    }
    if (el('password_ims')) {
      el('password_ims').value = account.password
    }

    // 如果是登出操作，则不再自动登录
    if (document.referrer.indexOf('passport.aliyun.com/logout.htm') != -1) {
      return;
    }
    if (document.querySelector('.login-form')) {
      document.querySelector('.login-form').submit()
    }
  });
}

