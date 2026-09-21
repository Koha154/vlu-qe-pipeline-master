// auth.js
// Simple authentication module used for demo/testing purposes.

// Danh sách tài khoản hợp lệ (username -> password)
const VALID_USERS = {
  admin: '9999',
};

// Danh sách tài khoản bị khóa
const LOCKED_ACCOUNTS = ['locked_user', 'banned_admin'];

/**
 * Kiểm tra đăng nhập.
 * @param {string} username
 * @param {string} password
 * @returns {boolean} true nếu đăng nhập thành công, false nếu thất bại.
 */
function login(username, password) {
  // Username hoặc password rỗng / không hợp lệ
  if (
    username === undefined ||
    username === null ||
    password === undefined ||
    password === null ||
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    username.trim() === ''
  ) {
    return false;
  }

  // Tài khoản bị khóa
  if (LOCKED_ACCOUNTS.includes(username)) {
    return false;
  }

  // Kiểm tra username có tồn tại
  if (!Object.prototype.hasOwnProperty.call(VALID_USERS, username)) {
    return false;
  }

  // So sánh mật khẩu (hỗ trợ cả mật khẩu chứa ký tự đặc biệt)
  return VALID_USERS[username] === password;
}

module.exports = { login, VALID_USERS, LOCKED_ACCOUNTS };
// updated login logic
