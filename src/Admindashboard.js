
import AdminProductList from './AdminProductList'; // 👈 add this at the top
const AdminDashboard = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen mt-[88px]">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-2xl text-center border-t-4 border-green-500">
        <h2 className="text-5xl font-bold text-gray-900 mb-8 font-playfair">
          Welcome, <span className="text-green-600">Admin!</span>
        </h2>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          <strong>Note:</strong> Full functionality for managing products or editing website content would require a secure backend
          database (e.g., Firestore) and API integration for data persistence. This demonstration focuses on the UI
          and client-side routing aspect of an admin panel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md border-l-4 border-blue-400">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
              Manage <span className="text-blue-600">Products</span>
            </h3>
            <p className="text-gray-700 mb-6">
              Add new products, edit existing ones, or remove items from your store.
              This feature would connect to your product database.
            </p>
            <button
              onClick={() => alert('Feature coming soon: Product Management (requires backend)!')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95"
            >
              Go to Product Management
            </button>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md border-l-4 border-yellow-400">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
              Edit <span className="text-yellow-600">Website Content</span>
            </h3>
            <p className="text-gray-700 mb-6">
              Update text, images, and sections across your website pages.
              This feature would interact with content management APIs.
            </p>
            <button
              onClick={() => alert('Feature coming soon: Website Content Editor (requires backend)!')}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95"
            >
              Go to Content Editor
            </button>
            <AdminProductList /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
