// auth.smoke.test.js
// Smoke Test: chỉ kiểm tra 1 kịch bản quan trọng nhất - đăng nhập đúng.

const { login } = require('./auth');

test('đăng nhập thành công với admin/123 trả về true', () => {
  expect(login('admin', '123')).toBe(true);
});
