import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero from "./assets/main.jpg";
import pic1 from "./assets/20231124_115809.jpg";
import pic2 from "./assets/20231124_131410.jpg";
import pic3 from "./assets/8G0A8515.jpg";
import pic4 from "./assets/IMG_0138.jpg";
import { Info_Card } from "@/_components";
import relume from "./assets/Relume.svg";
import avatar from "./assets/Avatar Image.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  StarIcon,
  X,
  YoutubeIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <main className="flex px-4 md:px-6 lg:px-16 gap-4 min-h-screen items-center  mt-8 ">
        <div className="w-1/2  ">
          <Image
            alt="hero"
            src={pic1}
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
            image={pic3}
            title="Creative Digital Design and Multimedia Training"
            paragraph="Explore the world of graphic design and video editing."
          />
          <Info_Card
            image={pic4}
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
            <Image
              src={pic2}
              alt="building"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
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
      <div className="bg-black flex px-4 md:px-6 lg:px-16 text-white  justify-center items-center h-96">
        <section className="w-1/2">
          <h2 className="text-3xl mb-4">Contact Us</h2>
          <p className="w-[70%] text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            commodi culpa necessitatibus, assumenda iusto quas tenetur quis
            corporis, laudantium, reiciendis repudiandae aperiam explicabo
            minima adipisci corrupti a quos numquam beatae?
          </p>
        </section>
        <section className="w-1/2 flex flex-col items-end">
          <div className="flex mb-3 flex-col w-1/2 gap-2">
            <label>Name</label>
            <input
              className="outline-none px-2 py-1 rounded-sm"
              type="text"
              placeholder="john"
            />
          </div>
          <div className="flex  mb-3 flex-col w-1/2 gap-2">
            <label>Email</label>
            <input
              className="outline-none px-2 py-1 rounded-sm"
              type="email"
              placeholder="john"
            />
          </div>
          <div className="flex mb-3 flex-col w-1/2 gap-2">
            <label>Message</label>
            <textarea className="outline-none px-2 py-1 rounded-sm min-h-30"></textarea>
          </div>
          <button className="w-1/2 p-2 rounded-md bg-white text-black font-bold">
            Submit
          </button>
        </section>
      </div>
      <div className="bg-black flex flex-col px-4 md:px-6 lg:px-16 text-white  justify-center items-center h-96">
        <div className="w-[100%] bg-gray-400 h-[60%] flex gap-64 rounded-md mb-6">
          <div className=" w-[50%] p-4">
            <h1 className="text-2xl font-bold text-black mb-5">Logo</h1>
            <p className="text-base text-gray-800 mb-2">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>
            <div className=" flex gap-3">
              <Input
                className=" border-2 border-gray-600"
                placeholder="Your email here"
                type="email"
              />
              <Button>Join</Button>
            </div>
            <p className="text-base text-gray-800 mt-2">
              By subscribing, you consent to our Privacy Policy and receiving
              updates from us.
            </p>
          </div>
          <div className="grid w-[50%] text-black p-4 grid-cols-3">
            <div>
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="flex flex-col gap-2 mt-4">
                <li>
                  <Link href="/#">About Us</Link>
                </li>
                <li>
                  <Link href="/#">Contact Us</Link>
                </li>
                <li>
                  <Link href="/#">Our Services</Link>
                </li>
                <li>
                  <Link href="/#">Blog Posts</Link>
                </li>
                <li>
                  <Link href="/#">FAQs</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Resources</h4>
              <ul className="flex flex-col gap-2 mt-4">
                <li>
                  <Link href="/#">E-books</Link>
                </li>
                <li>
                  <Link href="/#">Webinars</Link>
                </li>
                <li>
                  <Link href="/#">Case Studies</Link>
                </li>
                <li>
                  <Link href="/#">Newsletters</Link>
                </li>
                <li>
                  <Link href="/#">Workshops</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Connect With Us</h4>
              <ul className="flex flex-col gap-2 mt-4">
                <li>
                  <Link href="/#" className="flex gap-2">
                    <Facebook size={24} />
                    Facebook
                  </Link>
                </li>
                <li className="flex gap-2">
                  <Instagram size={24} />
                  <Link href="/#">Instagram</Link>
                </li>
                <li className="flex gap-2">
                  <X size={24} />
                  <Link href="/#">X</Link>
                </li>
                <li className="flex gap-2">
                  <Linkedin size={24} />
                  <Link href="/#">Linkedin</Link>
                </li>
                <li className="flex gap-2">
                  <YoutubeIcon size={24} />
                  <Link href="/#">Youtube</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-between">
          <p>© 2025 Laban2tech. All rights reserved.</p>
          <ul className="flex gap-3">
            <li className="underline">
              <Link href="/#">Privacy Policy</Link>
            </li>
            <li className="underline">
              <Link href="/#">Terms of Service </Link>
            </li>
            <li className="underline">
              <Link href="/#">Cookie Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
