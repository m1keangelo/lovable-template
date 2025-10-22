import React from "react";

type UserContextType = {
  pro: boolean;
  setPro: (val: boolean) => void;
  togglePro: () => void;
};

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pro, setProState] = React.useState<boolean>(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("proMember") : null;
    return saved ? saved === "true" : false;
  });

  React.useEffect(() => {
    window.localStorage.setItem("proMember", pro ? "true" : "false");
  }, [pro]);

  const setPro = (val: boolean) => setProState(val);
  const togglePro = () => setProState((p) => !p);

  const value = React.useMemo(() => ({ pro, setPro, togglePro }), [pro]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const ctx = React.useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within UserProvider");
  }
  return ctx;
};