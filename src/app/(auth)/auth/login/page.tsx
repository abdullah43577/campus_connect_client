"use client";

import { LoginBG } from "@/public";
import { GoogleIcon } from "@/public/icons/GoogleIcon";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHandleErrors } from "lib/handleErrors";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { loginSchema } from "state/schema/authSchema";
import { z } from "zod";

type FormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });
  const handleErrors = useHandleErrors();

  const handleFormSubmit = async function (data: FormValues) {
    try {
      // OP here
      console.log(data);
    } catch (error) {
      handleErrors(error);
    }
  };

  return (
    <main className="flex min-h-screen">
      <form className="flex flex-col items-center justify-center w-2/3 px-20 py-16 mr-auto" onSubmit={handleSubmit(handleFormSubmit)}>
        <h3 className="text-2xl font-bold text-center mb-16">
          Campus <span className="text-primary">Connect</span>
        </h3>

        <h1 className="font-bold text-4xl text-center mb-12">Login to Campus Connect</h1>

        <div className="max-w-[578px] w-full space-y-6 mx-auto mb-8">
          <div>
            <label htmlFor="Email">Email</label>
            <input placeholder="Enter email" type="email" className="outline-none border-none bg-white w-full py-4 px-3 rounded-[8px] mt-2" {...register("email", { required: true })} />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="Password">Password</label>
            <input placeholder="Enter password" type="password" className="outline-none border-none bg-white w-full py-4 px-3 rounded-[8px] mt-2" {...register("password", { required: true })} />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
          </div>
        </div>

        <button className="bg-primary rounded-[8px] py-3 px-24 text-white mb-6 cursor-pointer">Login</button>

        <p className="text-gray-600 mb-6">Or</p>

        <div className="flex items-center justify-center bg-white rounded-[8px] w-full max-w-[371px] py-3 cursor-pointer gap-2">
          <GoogleIcon /> Login with Google
        </div>
      </form>

      <aside className="w-1/3 fixed flex-1 right-0 top-0">
        <div className="w-full h-full bg-[rgba(0,0,0,0.2)] z-10 absolute top-0 right-0" />
        <Image src={LoginBG} alt="register image background" className="h-full w-full object-cover" priority />

        <div className="absolute top-0 left-0 text-center text-white w-full h-full flex flex-col items-center justify-center z-20">
          <h3 className="font-bold text-[32px] mb-6">Hello Friend</h3>
          <p className="mb-6">To keep connected with us provide us with your information</p>

          <Link href="/auth/register/account-type">
            <button className="bg-[#FFFFFF66] cursor-pointer py-3 px-10 rounded-[8px]">Signup</button>
          </Link>
        </div>
      </aside>
    </main>
  );
}
