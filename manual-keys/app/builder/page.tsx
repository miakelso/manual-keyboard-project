"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

const questions = [
  {
    key: "usage",
    question: "Where will you use this keyboard most?",
    options: ["Work", "Gaming", "Home", "Creative"],
  },
  {
    key: "sound",
    question: "How should it sound?",
    options: ["Quiet", "Thocky", "Balanced", "Clicky"],
  },
  {
    key: "feel",
    question: "How should it feel?",
    options: ["Soft", "Responsive", "Firm", "Light"],
  },
  {
    key: "size",
    question: "How much desk space?",
    options: ["Full", "TKL", "75%", "65%"],
  },
  {
    key: "style",
    question: "What look fits your setup?",
    options: ["Minimal", "Industrial", "RGB", "Retro", "Colorful"],
  },
];

export default function Builder() {
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState<any>({});
  const addItem = useCartStore((s) => s.addItem);

  const current = questions[step];

  const selectOption = (option: string) => {
    setConfig({ ...config, [current.key]: option });
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-10">
        <h2 className="text-2xl mb-6">{current.question}</h2>
        <div className="flex flex-col gap-4">
          {current.options.map((opt) => (
            <button
              key={opt}
              onClick={() => selectOption(opt)}
              className="border p-4 rounded-xl hover:bg-black hover:text-white"
            >
              {opt}
            </button>
          ))}
        </div>
        {step === questions.length - 1 && (
          <button
            onClick={() =>
              addItem({
                id: Date.now().toString(),
                name: "Custom Keyboard",
                price: 249,
                config,
              })
            }
            className="mt-8 bg-black text-white px-6 py-3 rounded-xl"
          >
            Add to Cart
          </button>
        )}
      </div>

      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </div>
    </div>
  );
}