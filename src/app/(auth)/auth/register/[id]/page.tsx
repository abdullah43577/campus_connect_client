"use client";

import { GoogleIcon } from "@/public/icons/GoogleIcon";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHandleErrors } from "lib/handleErrors";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signupSchema } from "state/schema/authSchema";
import { z } from "zod";

type FormValues = z.infer<typeof signupSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(signupSchema),
  });
  const handleErrors = useHandleErrors();
  const [passwordInputType, setPasswordInputType] = useState<"password" | "text">("password");

  const handleFormSubmit = async function (data: FormValues) {
    try {
      // OP here
      console.log(data);
    } catch (error) {
      handleErrors(error);
    }
  };

  return (
    <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit(handleFormSubmit)}>
      <h3 className="text-2xl font-bold text-center mb-16">
        Campus <span className="text-primary">Connect</span>
      </h3>

      <h1 className="font-bold text-4xl text-center mb-12">Sign Up to Campus Connect</h1>

      <div className="max-w-[578px] w-full space-y-6 mx-auto mb-8">
        <div>
          <label htmlFor="First Name">First Name</label>
          <input placeholder="Enter first name" className="outline-none border-none bg-white w-full py-4 px-3 mt-2 rounded-[8px]" {...register("first_name", { required: true })} />
          {errors.first_name && <p className="mt-1 text-sm text-red-600">{errors.first_name.message}</p>}
        </div>

        <div>
          <label htmlFor="Last Name">Last Name</label>
          <input placeholder="Enter last name" className="outline-none border-none bg-white w-full py-4 px-3 mt-2 rounded-[8px]" {...register("last_name", { required: true })} />
          {errors.last_name && <p className="mt-1 text-sm text-red-600">{errors.last_name.message}</p>}
        </div>

        <div>
          <label htmlFor="Email">Email</label>
          <input placeholder="Enter email" type="email" className="outline-none border-none mt-2 bg-white w-full py-4 px-3 rounded-[8px]" {...register("email", { required: true })} />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="Phone Number">Phone Number</label>
          <input placeholder="Enter phone number" type="tel" className="outline-none border-none mt-2 bg-white w-full py-4 px-3 rounded-[8px]" {...register("phone_number", { required: true })} />
          {errors.phone_number && <p className="mt-1 text-sm text-red-600">{errors.phone_number.message}</p>}
        </div>

        <div>
          <label htmlFor="Pasword">Password</label>
          <input placeholder="Enter password" type={passwordInputType} className="outline-none border-none mt-2 bg-white w-full py-4 px-3 rounded-[8px]" {...register("password", { required: true })} />
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
        </div>
      </div>

      <button className="bg-primary rounded-[8px] py-3 px-24 text-white mb-6 cursor-pointer">Sign Up</button>

      <p className="text-gray-600 mb-6">Or</p>

      <div className="flex items-center justify-center bg-white rounded-[8px] w-full max-w-[371px] py-3 cursor-pointer gap-2">
        <GoogleIcon /> Sign up with Google
      </div>
    </form>
  );
}
