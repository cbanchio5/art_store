'use client'
'use client'
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="w-full scroll-mt-32 pt-[12vh] md:pt-[15vh] min-h-screen relative bg-gradient-to-b from-[#e4ddd9] to-[#f4eef0] flex items-center"
    >
      <div className="flex flex-col md:flex-row justify-between w-11/12 md:w-4/5 mx-auto items-center gap-12 relative z-10">

        {/* Text Section */}
        <div className="backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl flex-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#292929] mb-6">
            I am Anael Perrotat Barrera, an artist from Argentina based in Paris.
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#292929] leading-relaxed tracking-wide">
            My work unfolds within a universe shaped by the unconscious, the dream, and the symbolic. <br /><br />
            I am drawn to figures that feel timeless: archetypes, mythic presences, fragments of memory and imagination. Through painting, I create characters that become vessels for complex emotions such as desire, fear, and wonder. These figures are not illustrations of stories, but openings into them, images that invite viewers to recognize echoes of their own inner landscapes. <br /><br />
            I work primarily with acrylic and oil pastel on canvas, in a process that is intuitive and exploratory. Color, gesture, and form emerge as if guided by something hidden. My goal is not to resolve mysteries but to give them shape, so that art can serve as a meeting point between the visible and the invisible.
          </p>
        </div>

        {/* Portrait Image */}
        <div className="hidden lg:block relative w-[280px] h-[400px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#cb9398]">
          <Image
            src="/images/profile.jpeg"
            alt="profile photo"
            fill
            className="object-cover w-full h-full opacity-95"
          />
          {/* Soft overlay to enhance fade effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent rounded-3xl pointer-events-none"></div>
        </div>


      </div>
    </section>
  );
}

export default About;
