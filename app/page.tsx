import MemberCard from "@/components/MemberCard";
import { peter, aayush, jennifer } from "@/types/Member";

export default function Home() {

  return (
    <div className="flex flex-col justify-center p-16 gap-4">
      <h1 className="text-2xl text-center">Members</h1>
      <div className="grid grid-cols-3 gap-4">
        <MemberCard member={peter} />
        <MemberCard member={aayush} />
        <MemberCard member={jennifer} />
      </div>
    </div>
  );
}
