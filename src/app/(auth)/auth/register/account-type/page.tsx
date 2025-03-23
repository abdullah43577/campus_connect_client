"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AccountType() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    if (selectedType.length) router.push(`/auth/register/${selectedType}`);
  }, [selectedType]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="font-bold text-4xl text-center text-black mb-8">Select Your Account Type</h1>
      <div className="flex flex-col md:flex-row gap-6 max-w-[600px] w-full">
        {/* Event Organizer Card */}
        <div className="flex-1 bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-105 border border-primary" onClick={() => setSelectedType("event-organizer")}>
          <h2 className="text-2xl font-bold text-primary mb-4">Event Organizer</h2>
          <p className="text-[#7e7e7e] text-center">Host amazing events and manage attendees effortlessly.</p>
        </div>

        {/* Attendee Card */}
        <div className="flex-1 bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-105 border border-primary" onClick={() => setSelectedType("attendee")}>
          <h2 className="text-2xl font-bold text-primary mb-4">Attendee</h2>
          <p className="text-[#7e7e7e] text-center">Join exciting events and connect with organizers seamlessly.</p>
        </div>
      </div>
    </div>
  );
}
