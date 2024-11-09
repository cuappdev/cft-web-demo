import MemberCard from "@/components/MemberCard";
import { Member, members } from "@/types/Member";

export default function Home() {

  return (
    <div className="flex flex-col justify-center p-16 gap-4">
      <h1 className="text-2xl text-center">Members</h1>
      <div className="grid grid-cols-3 gap-4">
        {members.map((member: Member) => (
          <MemberCard member={member} key={member.name} />
        ))}
      </div>
    </div>
  );
}
