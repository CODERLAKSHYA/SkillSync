// src/layouts/AuthLayout.jsx
function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
