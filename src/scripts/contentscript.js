import ext from "./utils/ext";
import storage from "./utils/storage";

function el(id) {
  return document.getElementById(id)
}

storage.get('account', function(resp) {
  var account = resp.account;
  if (!account || !account.username || !account.password) {
    return
  }
  if (!el('user_principal_name') || !el('J_FormNext')) {
    return
  }
  el('user_principal_name').value = account.username
  el('password_ims').value = account.password
  document.querySelector('.login-form').submit()
});