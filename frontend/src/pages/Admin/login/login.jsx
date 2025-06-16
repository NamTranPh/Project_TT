import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError({});

    setTimeout(() => {
      const newErrors = {};
      if (!email) newErrors.email = "Email không được để trống";
      if (!password) newErrors.password = "Mật khẩu không được để trống";

      if (Object.keys(newErrors).length > 0) {
        setError(newErrors);
        setIsLoading(false);
      } else {
        navigate("/admin/dashboard");
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Chào mừng bạn đến với hệ thống
      </h2>

      <div className="bg-white shadow p-6 rounded-lg w-full max-w-md">
        <h4 className="text-center text-xl text-gray-600 font-semibold mb-4">
          Đăng nhập
        </h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2 outline-none focus:ring focus:ring-blue-200"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              autoFocus
            />
            {error.email && (
              <div className="text-red-500 text-sm mt-1">{error.email}</div>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Mật khẩu</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border rounded px-3 py-2 pr-10 outline-none focus:ring focus:ring-blue-200"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
                title="Hiển thị mật khẩu"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            {error.password && (
              <div className="text-red-500 text-sm mt-1">{error.password}</div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="rememberMe" className="form-checkbox" />
            <label htmlFor="rememberMe" className="text-sm">
              Ghi nhớ tài khoản
            </label>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? "Đang xử lý..." : "Login"}
            </button>
          </div>
        </form>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        Hệ thống quản trị bán hàng. <br />
        Liên hệ admin để được cung cấp tài khoản và trợ giúp đăng nhập.
      </div>
    </div>
  );
}
