// Update this page (the content is just a fallback if you fail to update the page)

import { MadeWithDyad } from "@/components/made-with-dyad";
import ProBadge from "@/components/ProBadge";
import ProStatusSwitch from "@/components/ProStatusSwitch";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-4xl font-bold">Welcome to Your Blank App</h1>
          <ProBadge />
        </div>
        <p className="text-xl text-gray-600">
          Start building your amazing project here!
        </p>
        <div className="mx-auto max-w-md">
          <ProStatusSwitch />
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;