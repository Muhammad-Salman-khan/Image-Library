import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="max-w-screen flex justify-center align-middle items-center  min-h-screen text-white bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#0a0a04]">
      <div className="flex items-center align-middle justify-center gap-3">
        <Loader2 className="w-8 h-8 animate-spin  duration-75 font-extrabold text-white" />
        <span className="text-xl tracking-wide font-extrabold text-white">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
