"use client";

import { useCartStore } from "@/store/cartStore";

const products = [
  { id: "1", name: "MK Minimal 75%", price: 199 },
  { id: "2", name: "MK RGB Pro TKL", price: 229 },
];

export default function Shop() {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="p-12">
      <h2 className="text-3xl mb-6">Pre-Built Keyboards</h2>
      <div className="grid grid-cols-2 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border p-6 rounded-xl">
            <h3 className="text-xl">{p.name}</h3>
            <p>${p.price}</p>
            <button
              onClick={() => addItem(p)}
              className="mt-4 bg-black text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}