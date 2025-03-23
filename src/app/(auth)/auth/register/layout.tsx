import { RegisterBG } from "@/public";
import Image from "next/image";

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen">
      <aside className="w-1/3 fixed flex-1">
        <Image src={RegisterBG} alt="register image background" className="h-full w-full object-cover" />

        <div className="absolute top-0 left-0 text-center text-white w-full h-full flex flex-col items-center justify-center">
          <h3 className="font-bold text-[32px] mb-6">Welcome Back</h3>
          <p className="mb-6">To keep connected with us provide us with your information</p>
          <button className="bg-[#FFFFFF66] cursor-pointer py-3 px-10 rounded-[8px]">Signin</button>
        </div>
      </aside>

      <aside className="w-2/3 px-20 py-16 ml-auto">{children}</aside>
    </main>
  );
}
