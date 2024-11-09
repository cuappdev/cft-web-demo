import members, { Member } from "@/types/Member";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col justify-center p-16">
      <h1 className="text-2xl text-center">Members</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-2 flex flex-col gap-2 items-center">
          <Image src="/peter.png" alt="Peter Bidoshi" width={512} height={512} className="rounded-full w-72" />
          <h2 className="text-center text-xl font-bold">Peter Bidoshi</h2>
          <p className="text-center">iOS</p>
          <p className="text-center">Course Instructor</p>
        </div>
        <div className="p-2 flex flex-col gap-2 items-center">
          <Image src="/aayush.jpeg" alt="Aayush Agnihotri" width={512} height={512} className="rounded-full w-72" />
          <h2 className="text-center text-xl font-bold">Aayush Agnihotri</h2>
          <p className="text-center">Backend</p>
          <p className="text-center">Backend Lead</p>
        </div>
        <div className="p-2 flex flex-col gap-2 items-center">
          <Image src="/jennifer.jpg" alt="Jennifer Gu" width={512} height={512} className="rounded-full w-72" />
          <h2 className="text-center text-xl font-bold">Jennifer Gu</h2>
          <p className="text-center">iOS</p>
          <p className="text-center">Vice Team Lead</p>
        </div>
      </div>
    </div>
  );
}
