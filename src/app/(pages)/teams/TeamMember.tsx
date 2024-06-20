import Member from "@/components/about/Member";
import { getMembers } from "@/lib/getMembers";

export default function TeamMember() {
  const members = getMembers(50);

  return (
    <div className="container mx-auto mt-28 px-11 pb-20 text-center">
      <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight">
        All Team Members
      </h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {members.map((member) => (
          <Member key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}
