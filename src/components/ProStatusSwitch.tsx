import React from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useUser } from "../context/user-context";

const ProStatusSwitch: React.FC = () => {
  const { pro, setPro } = useUser();

  const handleChange = (checked: boolean) => {
    setPro(checked);
    toast.success(checked ? "Pro status enabled" : "Pro status disabled");
  };

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
      <div className="space-y-1">
        <Label className="text-base">Pro member</Label>
        <p className="text-sm text-muted-foreground">
          Toggle your local Pro membership status.
        </p>
      </div>
      <Switch
        checked={pro}
        onCheckedChange={handleChange}
        aria-label="Toggle Pro member"
      />
    </div>
  );
};

export default ProStatusSwitch;