"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./ui/tailwindcss-buttons";

export function TailwindcssButtons() {
  return (
    <div className="px-4 w-full">
      <Toaster position="top-center" />
      <div>
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx}>{button.component}</ButtonsCard>
        ))}
      </div>
    </div>
  );
}

export const buttons = [
  {
    name: "Border Magic",
    description: "Border Magic button for your website",
    showDot: false,
    component: (
      <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1.2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Résumé
        </span>
      </button>
    ),
  },
  // {
  //   name: "Shimmer",
  //   description: "Shimmer button for your website",
  //   showDot: false,
  //   component: (
  //     <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  //       Shimmer
  //     </button>
  //   ),
  //   code: `
  //       // Button code
  //       <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  //         Shimmer
  //       </button>

  //       // tailwind.config.js code
  //       {
  //         "animation": {
  //           shimmer: "shimmer 2s linear infinite"
  //         },
  //         "keyframes": {
  //           shimmer: {
  //             from: {
  //               "backgroundPosition": "0 0"
  //             },
  //             to: {
  //               "backgroundPosition": "-200% 0"
  //             }
  //           }
  //         }
  //       }
  //     `,
  // },
];
