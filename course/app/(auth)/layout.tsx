const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="hidden md:flex h-full flex-col fixed inset-y-0 z-50"></div>
      {children}
    </div>
  );
};

export default AuthLayout;
