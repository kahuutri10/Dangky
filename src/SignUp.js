import React from "react";
import "./SignUp.css"; // Import file CSS

const SignUp = () => {
  return (
    <div className="signup-container">
      {/* Phần bên trái */}
      <div className="signup-left">
        <h1>Chào mừng bạn!</h1>
        <p>Hãy tạo tài khoản để bắt đầu</p>
        <p>
          Đã có tài khoản? <a href="#">Quay lại đăng nhập</a>
        </p>
      </div>

      {/* Phần bên phải */}
      <div className="signup-right">
        <div className="signup-form">
          <h2>Đăng ký</h2>

          {/* Form */}
          <form>
            <div className="form-group">
              <label>Họ và tên</label>
              <input type="text" placeholder="Nhập họ và tên" />
            </div>

            <div className="form-group">
              <label>Tên đăng nhập</label>
              <input type="text" placeholder="Nhập tên đăng nhập" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Nhập email của bạn" />
            </div>

            <div className="form-group">
              <label>Nhập mật khẩu</label>
              <input type="password" placeholder="Nhập mật khẩu" />
            </div>

            <div className="form-group">
              <label>Xác nhận mật khẩu</label>
              <input type="password" placeholder="Xác nhận lại mật khẩu" />
            </div>

            {/* Checkbox */}
            <div className="checkbox-group">
              <input type="checkbox" />
              <span>
                Tôi đồng ý với{" "}
                <a href="#" className="text-indigo-400">
                  điều khoản sử dụng
                </a>
              </span>
            </div>

            {/* Captcha */}
            <div className="form-group captcha-group">
              <label>Mã captcha</label>
              <input type="text" placeholder="Nhập captcha" />
              <img
                src="https://www.google.com/recaptcha/api/image"
                alt="captcha"
              />
            </div>

            {/* Nút đăng ký */}
            <button className="signup-button">Đăng ký</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
