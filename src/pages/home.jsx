
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Example Navbar */}
      <nav className="p-4 bg-white shadow-md">
        
        <div className="container flex items-center justify-between mx-auto">
          <div className="text-xl font-bold text-indigo-600 underline">MySite</div>
          <div>
            <a href="/login" className="px-4 py-2 mr-2 text-gray-700 rounded hover:bg-gray-100">Login</a>
            <a href="/register" className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700">Register</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container px-6 py-16 mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 md:text-6xl">
          Welcome to Our Platform
        </h1>
        <p className="mt-4 text-lg text-gray-600 md:text-xl">
          We provide the best solutions for your needs. Explore what we have to offer.
        </p>
        <button className="px-8 py-3 mt-8 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
          Get Started
        </button>
      </header>
    </div>
  );
};

export default Home;