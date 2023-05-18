import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  // Authentication check logic
  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <div>
      <Navbar />
      {isAuthenticated ? (
        <>{children}</>
      ) : (
        <div>
          <h1>You are not authenticated</h1>
          {/* Redirect or show login/register components */}
        </div>
      )}
      {/* Additional MainLayout elements */}
    </div>
  );
};

export default MainLayout;