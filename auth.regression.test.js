// auth.regression.test.js
// Regression Test: kiểm tra đầy đủ các trường hợp ngoại lệ.

const { login } = require('./auth');

describe('login() - Regression Tests', () => {
  test('đăng nhập đúng vẫn hoạt động bình thường (baseline)', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('sai mật khẩu -> trả về false', () => {
    expect(login('admin', 'wrongpassword')).toBe(false);
  });

  test('username rỗng -> trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('username chỉ chứa khoảng trắng -> trả về false', () => {
    expect(login('   ', '123')).toBe(false);
  });

  test('username không tồn tại -> trả về false', () => {
    expect(login('unknown_user', '123')).toBe(false);
  });

  test('password chứa ký tự đặc biệt nhưng không khớp -> trả về false', () => {
    expect(login('admin', '!@#$%^&*()')).toBe(false);
  });

  test('password đúng nhưng chứa thêm ký tự đặc biệt -> trả về false', () => {
    expect(login('admin', '123!@#')).toBe(false);
  });

  test('tài khoản bị khóa (locked_user) -> trả về false dù đúng thông tin', () => {
    expect(login('locked_user', '123')).toBe(false);
  });

  test('tài khoản bị khóa khác (banned_admin) -> trả về false', () => {
    expect(login('banned_admin', 'anypassword')).toBe(false);
  });

  test('username là null -> trả về false', () => {
    expect(login(null, '123')).toBe(false);
  });

  test('password là null -> trả về false', () => {
    expect(login('admin', null)).toBe(false);
  });

  test('username là undefined -> trả về false', () => {
    expect(login(undefined, '123')).toBe(false);
  });

  test('password là undefined -> trả về false', () => {
    expect(login('admin', undefined)).toBe(false);
  });

  test('username không phải kiểu string (number) -> trả về false', () => {
    expect(login(12345, '123')).toBe(false);
  });

  test('phân biệt hoa/thường trong username -> trả về false', () => {
    expect(login('Admin', '123')).toBe(false);
  });
});
