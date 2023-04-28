import React, { createContext, useState, useEffect } from "react";
import { getStatuses } from "./calls";
import { useAuthUser } from "react-auth-kit";

interface Status {
  id: number;
  entity: string;
  value: string;
}

interface AppContextProps {
  statuses: Status[];
}

export const StatusContext = createContext<AppContextProps>({
  statuses: [],
});

const StatusContextProvider = ({ children }: any) => {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const auth = useAuthUser();
  const [email, setEmail] = useState<any>(null);

  const doGetStatuses = async () => {
    const response = await getStatuses();

    if (!response.success) {
      return response;
    }

    setStatuses(response.data.content);
  };

  useEffect(() => {
    const email = auth()?.email;
    setEmail(email);
  }, [auth]);

  useEffect(() => {
    let isMounted = true;

    if (email && isMounted) {
      doGetStatuses();
    }

    return () => {
      isMounted = false;
    };
  }, [email]);
  return (
    <StatusContext.Provider value={{ statuses }}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusContextProvider;
