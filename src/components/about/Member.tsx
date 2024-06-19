import { MemberProps } from "@/lib/getMembers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Member: React.FC<MemberProps> = ({ name, social, avatar, position }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-1 text-2xl font-medium">
      <div className="relative h-36 w-36 sm:h-48 sm:w-48">
        <Image
          src={avatar}
          alt={name}
          className="rounded-full object-cover"
          fill
        />
      </div>
      <div className="text-center">{name}</div>
      <div className="text-center">{position}</div>
      <div className="text-center">
        <Link
          href={`https://twitter.com/${social}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social}
        </Link>
      </div>
    </div>
  );
};

export default Member;
