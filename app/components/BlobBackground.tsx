"use client";

export default function BlobBackground() {
  return (
    <div className="absolute inset-0 -z-10 blur-2xl">
        {/* Left blob - positioned more to the left and top */}
        <div
        className="animate-blob-move absolute left-40 top-36 sm:left-30 sm:top-4
            w-[20rem] sm:w-[38rem] aspect-[1155/678] 
            rotate-[30deg] 
            bg-gradient-to-tr from-[#C599B6] to-[#FAD0C4] 
            dark:from-[#72BAA9] dark:to-[#D5E7B5]
            opacity-80"
        style={{
            clipPath:
            "polygon(25% 15%, 75% 25%, 85% 45%, 70% 75%, 45% 85%, 20% 70%, 15% 45%, 30% 25%)",
        }}
        />
        {/* Right blob - positioned more to the right and bottom */}
        <div
        className="animate-blob-move absolute right-8 bottom-16 sm:right-16 sm:bottom-34
        w-[20rem] sm:w-[28rem] aspect-[1155/678] 
            rotate-[30deg] 
            bg-gradient-to-tr from-[#e87b8c] to-[#f19f77] 
            dark:from-[#474E93] dark:to-[#7E5CAD] 
            opacity-80"
        style={{
            clipPath:
            "polygon(30% 10%, 70% 15%, 85% 40%, 80% 70%, 50% 85%, 20% 75%, 10% 45%, 25% 20%)",
        }}
        />
        {/* Optional third blob for more visual interest - centered but offset */}
        <div
        className="animate-blob-move absolute right-25 bottom-25 sm:right-0 sm:bottom-14
        w-[10rem] sm:w-[20rem] aspect-[1155/678] 
            rotate-[60deg]
            bg-gradient-to-tr from-[#e04552] to-[#f5b100] 
            dark:from-[#9333ea] dark:to-[#4f46e5]
            opacity-80"
        style={{
            clipPath:
            "polygon(35% 20%, 65% 15%, 80% 35%, 75% 65%, 45% 80%, 25% 70%, 20% 40%, 40% 25%)",
        }}
        />
    </div>
    );
}
