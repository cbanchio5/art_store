'use client'
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[10vh] h-screen relative'>
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-black font-bold">
              I am Anael Perrotat Barrera,
            </h1>
            <p className='mt-6 text-md md:text-base text-black leading-relaxed'>
              an artist from Argentina based in Paris. My work unfolds within a universe shaped by the unconscious, the dream, and the symbolic. <br /><br />
              I am drawn to figures that feel timeless: archetypes, mythic presences, fragments of memory and imagination. Through painting, I create characters that become vessels for complex emotions such as desire, fear, and wonder. These figures are not illustrations of stories, but openings into them, images that invite viewers to recognize echoes of their own inner landscapes. <br /><br />
              I work primarily with acrylic and oil pastel on canvas, in a process that is intuitive and exploratory. Color, gesture, and form emerge as if guided by something hidden. My goal is not to resolve mysteries but to give them shape, so that art can serve as a meeting point between the visible and the invisible.
            </p>
          </div>

          {/* Portrait Image */}
          <div className='mx-auto hidden lg:block'>
            <div className='relative w-[280px] h-[400px] rounded-[2rem] overflow-hidden border-4 border-black shadow-xl'>
              <Image
                src="/images/profile.jpeg"
                alt="profile photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
