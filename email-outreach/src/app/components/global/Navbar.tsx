"use client";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Acme Corp</div>
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/templates" className="text-gray-700 hover:text-gray-900">Templates</Link>
          <Link href="/analytics" className="text-gray-700 hover:text-gray-900">Analytics</Link>
          <Link href="/settings" className="text-gray-700 hover:text-gray-900">Settings</Link>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">alisa@acme.com</span>
          <img className="w-8 h-8 rounded-full" src="/path/to/profile.jpg" alt="Profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;