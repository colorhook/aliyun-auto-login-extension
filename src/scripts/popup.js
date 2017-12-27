import ext from "./utils/ext";
import storage from "./utils/storage";

storage.get('account', function(resp) {
  var account = resp.account;
  document.getElementById('username').value = account.username
  document.getElementById('password').value = account.password
});

document.getElementById('save').addEventListener('click', function(e) {
  var account = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
  }
  storage.set({ account: account }, function() {
    window.close()
  });
})