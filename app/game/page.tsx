import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
      <main className="flex flex-col text-center items-center gap-5">
        <div>
            <h1 className="text-4xl font-bold">
                How attractive do you think this person is?
            </h1>
        </div>
        <div>
            {/* photos */}
            <div className="w-60 aspect-square 
            bg-gray-100 dark:bg-gray-900 
            rounded-md
            flex justify-center 
            items-center
            ">
                <span className="text-black dark:text-white">Photo here</span>
            </div>
        </div>

        <div>
            {/* rankings */}
            <div className="flex justify-center items-center gap-5">
                <button className="px-4 py-2 border-2 rounded-full ">1</button>
                <button className="px-4 py-2 border-2 rounded-full ">2</button>
                <button className="px-4 py-2 border-2 rounded-full ">3</button>
                <button className="px-4 py-2 border-2 rounded-full ">4</button>
                <button className="px-4 py-2 border-2 rounded-full ">5</button>

            </div>
        </div>

      </main>
    );
  }
  