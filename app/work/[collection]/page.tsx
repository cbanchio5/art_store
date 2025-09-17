import { notFound } from "next/navigation";
import Image from "next/image";
import { myWork } from "@/Data/Data";
import SectionHeading from "@/app/components/Helper/SectionHeading";

export default function CollectionPage({ params }: { params: { collection: string } }) {
  const { collection } = params;

  const paintings = myWork.filter(
    (p) => p.collection.toLowerCase() === collection.toLowerCase()
  );

  if (paintings.length === 0) {
    notFound();
  }

  return (
    <section className="pt-[12vh] pb-20 bg-gradient-to-b from-[#e4ddd9] to-[#f4eef0] min-h-screen">
      <SectionHeading>{collection}</SectionHeading>

      <div className="w-[90%] sm:w-[85%] mx-auto mt-16 flex flex-col gap-16">
        {paintings.map((painting) => (
          <div key={painting.id} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
      
            {/* Painting Info - 40% width */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#292929] mb-4">
                {painting.title}
              </h3>
              <p className="text-[#99b2b9] text-sm md:text-base mb-2">{painting.medium}</p>
              <p className="text-[#99b2b9] text-sm md:text-base mb-4">{painting.dimensions}</p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{painting.description}</p>
            </div>
             {/* Image - 60% width */}
            <div className="relative w-full lg:w-[60%] h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden shadow-2xl">
              <Image
                src={painting.image}
                alt={painting.title}
                fill
                className="object-cover w-full h-full"
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
