import React from 'react';

function Header() {
  return (
    <header className="bg-green-600 p-4 text-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dev Lucas Romero</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:underline hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:underline hover:text-gray-300">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
