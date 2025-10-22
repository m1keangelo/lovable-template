import React from "react";
import { Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useUser } from "../context/user-context";

const ProBadge: React.FC = () => {
  const { pro } = useUser();
  if (!pro) return null;

  return (
    <Badge className="inline-flex items-center gap-1 bg-yellow-500 text-black hover:bg-yellow-400">
      <Crown className="h-4 w-4" />
      Pro
    </Badge>
  );
};

export default ProBadge;