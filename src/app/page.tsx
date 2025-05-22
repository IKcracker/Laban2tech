import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero from "./assets/hero.png";
import { Info_Card } from "@/_components";
import relume from "./assets/Relume.svg";
import avatar from "./assets/Avatar Image.png";
import { StarIcon } from "lucide-react";
export default function Home() {
  return (
    <div>
      <main className="flex px-4 md:px-6 lg:px-16 gap-4 min-h-screen items-center  mt-8 ">
        <div className="w-1/2  ">
          <Image
            alt="hero"
            src={hero}
            className="w-1/2 z-0  left-0 top-0 absolute h-screen object-cover   "
          />
        </div>
        <div className="flex-1">
          <h1 className="text-6xl tracking-normal font-normal">
            Empowering Youth Through Digital Skills Training
          </h1>
          <p className="mt-2 ml-2 text-base">
            At Laban2tech, we believe every young person deserves access to
            quality digital education. Our mission is to equip underserved youth
            with the skills they need to thrive in a technology-driven world.
          </p>
          <section className="flex ml-2 mt-4 gap-3">
            <Button>Learn More {">"}</Button>
            <Button variant="outline">Sign In</Button>
          </section>
        </div>
      </main>
      <div className="min-h-screen px-4 md:px-6 lg:px-16 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-center text-base">Empower</p>
          <h4 className="text-5xl text-center my-3 w-2/5">
            Unlock Your Digital Potential with Laban2tech
          </h4>
          <p className="w-3/5 text-center">
            At Laban2tech, we offer innovative programs designed to equip
            underserved youth with essential digital skills. Join us in bridging
            the digital divide and creating opportunities for a brighter future.
          </p>
        </div>
        <section className="flex mt-8  gap-12">
          <Info_Card
            image={hero}
            title="Comprehensive Coding and Programming Courses"
            paragraph="Learn the fundamentals of coding and software development."
          />
          <Info_Card
            image={hero}
            title="Creative Digital Design and Multimedia Training"
            paragraph="Explore the world of graphic design and video editing."
          />
          <Info_Card
            image={hero}
            title="Hands-On Workshops for Real-World Experience"
            paragraph="Participate in interactive sessions that enhance learning."
          />
        </section>
        <section className="flex ml-2 mt-4 gap-3">
          <Button>Learn More {">"}</Button>
          <Button variant="outline">Sign In</Button>
        </section>
      </div>
      <div className="min-h-screen px-4 md:px-6 lg:px-16 flex justify-center flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-center text-base">Empower</p>
          <h4 className="text-5xl text-center my-3 w-4/5">
            Transforming Lives Through Digital Skills Education
          </h4>
          <p className="w-3/5 text-center">
            At Laban2tech, we equip underserved youth with essential digital
            skills. Our innovative methods ensure engaging and effective
            learning experiences.
          </p>
        </div>
        <section className="flex mt-24  gap-12">
          <Info_Card
            image={relume}
            title="Comprehensive Coding and Programming Courses"
            paragraph="Learn the fundamentals of coding and software development."
          />
          <Info_Card
            image={relume}
            title="Creative Digital Design and Multimedia Training"
            paragraph="Explore the world of graphic design and video editing."
          />
          <Info_Card
            image={relume}
            title="Hands-On Workshops for Real-World Experience"
            paragraph="Participate in interactive sessions that enhance learning."
          />
        </section>
      </div>
      <div className="min-h-screen px-4 md:px-6 lg:px-16 bg-gray-300 relative flex justify-center flex-col items-center">
        <div className="flex gap-6 p-12 items-center">
          <div className="relative w-1/2 z-10">
            <h4 className="text-4xl  font-bold">
              Unlock Your Potential with Digital Skills
            </h4>
            <p className="my-6">
              Our programs equip students with essential digital skills. Gain
              confidence and open doors to new opportunities.
            </p>
            <div className="flex">
              <div className="w-1/2">
                <h4 className="text-2xl mb-3 font-semibold">
                  Skill Development
                </h4>
                <p>
                  Learn in-demand skills that enhance employability and career
                  growth.
                </p>
              </div>
              <div className="w-1/2">
                <h4 className="text-2xl mb-3 font-semibold">
                  Community Support
                </h4>
                <p>
                  Join a network of like-minded peers and mentors for guidance
                  and encouragement.
                </p>
              </div>
            </div>
          </div>
          <div className="py-24 w-1/2">
            <Image src={hero} className=" w-full h-full" alt="building" />
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-center h-96">
        <div className="gap-3  flex">
          <StarIcon color="#fff" size={32} />
          <StarIcon color="#fff" size={32} />
          <StarIcon color="#fff" size={32} />
        </div>
        <h3 className="text-white text-center my-12  w-1/2 text-2xl">
          {` "Laban2tech has transformed my understanding of technology. The skills
          I've gained here have opened new doors for my future."`}
        </h3>
        <div className=" flex text-white gap-8 ">
          <div className="flex pr-4 border-r-2 border-gray-700 gap-3 items-center">
            <Image src={avatar} alt="avatar" />
            <div className="">
              <p>Kutullo Moropane</p>
              <p>Student, Laban2tech</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p>Logo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
