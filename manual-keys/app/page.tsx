import Link from "next/link";

export default function Home() {
  return (
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
  );
}