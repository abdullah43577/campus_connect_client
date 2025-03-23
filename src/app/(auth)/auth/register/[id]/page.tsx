import { GoogleIcon } from "@/public/icons/GoogleIcon";

export default function Register() {
  return (
    <form className="flex flex-col items-center justify-center">
      <h3 className="text-2xl font-bold text-center mb-16">
        Campus <span className="text-primary">Connect</span>
      </h3>

      <h1 className="font-bold text-4xl text-center mb-12">Sign Up to Campus Connect</h1>

      <div className="max-w-[578px] w-full space-y-6 mx-auto mb-8">
        <div>
          <p className="mb-2">First Name</p>
          <input placeholder="Enter first name" className="outline-none border-none bg-white w-full py-4 px-3 rounded-[8px]" />
        </div>

        <div>
          <p className="mb-2">Last Name</p>
          <input placeholder="Enter last name" className="outline-none border-none bg-white w-full py-4 px-3 rounded-[8px]" />
        </div>

        <div>
          <p className="mb-2">Email</p>
          <input placeholder="Enter email" type="email" className="outline-none border-none bg-white w-full py-4 px-3 rounded-[8px]" />
        </div>

        <div>
          <p className="mb-2">Phone Number</p>
          <input placeholder="Enter phone number" type="tel" className="outline-none border-none bg-white w-full py-4 px-3 rounded-[8px]" />
        </div>

        <div>
          <p className="mb-2">Password</p>
          <input placeholder="Enter password" type="password" className="outline-none border-none bg-white w-full py-4 px-3 rounded-[8px]" />
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
