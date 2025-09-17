import Link from "next/link";
import SectionHeading from "../components/Helper/SectionHeading";
import { myWork } from "@/Data/Data";

export default function WorkPage() {
  const collections = Array.from(new Set(myWork.map((p) => p.collection)));

  return (
    <section className="pt-[12vh] pb-20 min-h-screen bg-gradient-to-b from-[#e4ddd9] to-[#f4eef0]">
      <SectionHeading>My Work</SectionHeading>

      <div className="w-[90%] sm:w-[85%] mx-auto mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {collections.map((col) => (
          <Link
            key={col}
            href={`/work/${col.toLowerCase()}`}
            className="
              group relative flex flex-col items-center justify-center
              rounded-3xl overflow-hidden
              bg-gradient-to-br from-[#e4ddd9] via-[#cb9398]/30 to-[#99b2b9]/20
              shadow-lg hover:shadow-2xl
              transition-all duration-500
              p-8 md:p-10
              hover:scale-105
              text-center
            "
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#292929] mb-2 transition-colors duration-300 group-hover:text-[#cb9398]">
              {col}
            </h3>
            <p className="text-[#292929]/80 text-sm md:text-base transition-colors duration-300 group-hover:text-[#292929]">
              View the {col} collection.
            </p>

            {/* Subtle hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
