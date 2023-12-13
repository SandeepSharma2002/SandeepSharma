"use client"
import React, { createContext, useContext, useState } from "react";

type PendingContextProviderProps = {
    children: React.ReactNode;
  };

  type PendingContextType = {
    Pending:Boolean;
    setPending: React.Dispatch<React.SetStateAction<any>>;
  };

export const PendingContext = createContext<PendingContextType | null>(null);

export const PendingContextProvider = ({
  children,
}: PendingContextProviderProps) =>
{
    const [Pending,setPending] = useState(false);
    return (
        <PendingContext.Provider
          value={{
            Pending , setPending
          }}
        >
          {children}
        </PendingContext.Provider>
      );
}

export const usePending=()=>
{const context = useContext(PendingContext);

    if (context === null) {
      throw new Error(
        "PendingContext must be used within an PendingContextProvider"
      );
    }

    return context;
}