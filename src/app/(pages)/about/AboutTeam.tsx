import Member from "@/components/about/Member";
import { getMembers } from "@/lib/getMembers";

export default function AboutTeam() {
  const members = getMembers(10);
  return (
    <div className="bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-4xl font-bold">Our Team</h2>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-20 xl:grid-cols-5">
          {members.map((member) => (
            <Member key={member.id} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
