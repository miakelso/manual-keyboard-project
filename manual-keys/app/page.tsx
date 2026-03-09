import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png"; // Adjust the path as necessary
import React from 'react';

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/pre-built-keyboards">Pre-Built Keyboards</a>
          </li>
          <li>
            <a href="/custom-keyboards">Custom Keyboards</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/faqs">FAQs</a>
          </li>
          <li>
            <a href="/login">Login/Sign-Up</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-5xl font-bold mb-8">Manual Keys</h1>

        <p className="text-lg mb-10 text-gray-300">
          Premium Mechanical Keyboards — Prebuilt or Fully Custom
        </p>

        <div className="flex gap-6">
          <Link
            href="/shop"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200"
          >
            Shop Pre-Built Keyboards
          </Link>

          <Link
            href="/builder"
            className="px-6 py-3 bg-gray-700 rounded-xl font-semibold hover:bg-gray-600"
          >
            Build Your Own Keyboard
          </Link>
        </div>
      </main>
    </div>
  );
}