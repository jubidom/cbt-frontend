import { useState } from "react";

function SignalStatus() {
  const [isActive, setIsActive] = useState(true);
  return isActive ? <Online /> : <Offline />;
}

function Online() {
  return (
    <span className="flex items-center gap-1 text-gray-600 text-xs bg-[rgba(0,230,0,0.4)] px-2 py-0.5 rounded-3xl">
      <span className="w-2 h-2 rounded-full bg-green-700 "></span>
      Online
    </span>
  );
}

function Offline() {
  return (
    <span className="flex items-center gap-1 text-gray-600 text-xs bg-[rgba(162,157,157,0.84)] px-2 py-0.5 rounded-3xl">
      <span className="w-2 h-2 rounded-full bg-black "></span>
      Offline
    </span>
  );
}

export default SignalStatus;
