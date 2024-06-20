import { getMembers } from "@/lib/getMembers";
import React from "react";
import Member from "./about/Member";
import Link from "next/link";

const AboutUs: React.FC = () => {
  const members = getMembers(10);

  return (
    <section className="flex flex-col bg-white pt-20 text-lg md:text-xl">
      <div className="container mx-auto px-8 md:px-20">
        <p className="mx-auto max-w-5xl text-4xl leading-tight tracking-tight">
          <strong>
            Tempus is a leading innovator in the field of smartwatches.
          </strong>{" "}
          Our mission is to seamlessly integrate cutting-edge technology with
          elegant design, providing our customers with unparalleled convenience
          and style. Whether you&apos;re tracking fitness goals, staying
          connected on the go, or simply appreciating precision engineering,
          Tempus smartwatches are designed to elevate your experience. You can
          learn more about our story{" "}
          <Link className="underline" href="/about">
            here.
          </Link>
        </p>
      </div>
      <div className="container mx-auto mt-28 px-11 pb-20 text-center">
        <h2 className="text-4xl font-bold leading-tight tracking-tight">
          Our Team
        </h2>
        <p className="mx-auto mb-4 max-w-5xl text-xl">
          Our team is comprised of dedicated professionals who bring a wealth of
          experience and a passion for innovation. Meet some of the key members
          driving our success:
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-20 xl:grid-cols-5">
          {members.map((member) => (
            <Member key={member.id} {...member} />
          ))}
        </div>
        <button className="mt-10 text-black underline hover:text-black/80 focus:outline-none">
          <Link href="/teams">See All Our Team Members</Link>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full bg-black text-white lg:w-1/2">
          <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-12 text-center md:px-10 md:py-24 md:text-left lg:px-20 lg:py-36">
            <div>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                Our History
              </h2>
              <p className="text-lg font-normal leading-relaxed md:text-2xl">
                Tempus was founded in 2015 with a vision to create the
                world&apos;s most advanced smartwatch. Since then, we&apos;ve
                grown into a global brand known for our commitment to quality
                and innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-white text-black lg:w-1/2">
          <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-12 text-center md:px-10 md:py-24 md:text-left lg:px-20 lg:py-36">
            <div>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-black md:text-4xl lg:text-5xl">
                Our Culture
              </h2>
              <p className="text-lg font-normal leading-relaxed md:text-2xl">
                At Tempus, our culture revolves around fostering creativity,
                embracing diversity, and maintaining a collaborative spirit. We
                value integrity, passion, and a relentless pursuit of excellence
                in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
