import { Member } from "@/types/Member";
import Image from "next/image";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard(props: MemberCardProps) {

  const { member } = props;

  return (
    <div className="p-2 flex flex-col gap-2 items-center">
      <Image src={`/${member.image}`} alt={member.name} width={512} height={512} className="rounded-full w-72" />
      <h2 className="text-center text-xl font-bold">{member.name}</h2>
      <p className="text-center">{member.subteam}</p>
      <p className="text-center">{member.position}</p>
    </div>
  );
}