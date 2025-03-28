import React, { useState } from "react";
import "./SignUp.css"; // Import CSS

const SignUp = () => {
  // State lưu thông tin nhập từ form
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    captcha: "",
  });

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu đăng ký:", formData);
  };

  return (
    <div className="register-container">
      {/* Bên trái - Giới thiệu */}
      <div className="register-left">
        <h2>Chào mừng bạn!</h2>
        <p>Hãy tạo tài khoản để bắt đầu</p>
        <a href="/login">Quay lại đăng nhập</a>
      </div>

      {/* Bên phải - Form đăng ký */}
      <div className="register-right">
        <h2>Đăng ký</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Tên đăng nhập"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            {/* Điều khoản sử dụng */}
            <div className="terms">
              <input
                type="checkbox"
                id="terms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="terms">Tôi đồng ý với điều khoản sử dụng</label>
            </div>

            {/* Ô nhập mã captcha + Ảnh captcha */}
            <div className="captcha-container">
              <input
                type="text"
                name="captcha"
                placeholder="Mã captcha"
                value={formData.captcha}
                onChange={handleChange}
                required
                className="captcha-input"
              />
              <img
                src="https://via.placeholder.com/100x40" // Thay bằng link ảnh captcha thật
                alt="Captcha"
                className="captcha-image"
              />
            </div>

            <button type="submit">Đăng ký</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
