import { MemberProps } from "@/lib/getMembers";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Member: React.FC<MemberProps> = ({ name, social, avatar, position }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-1 text-2xl font-medium">
      <Avatar className="relative h-36 w-36 sm:h-48 sm:w-48">
        <AvatarImage
          src={avatar}
          alt={`Profile picture of ${name}`}
          className="rounded-full object-cover"
        />
        <AvatarFallback>
          {name
            .split(" ")
            .map((word) => word.slice(0, 2))
            .join("")
            .toUpperCase()}
        </AvatarFallback>
      </Avatar>
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
