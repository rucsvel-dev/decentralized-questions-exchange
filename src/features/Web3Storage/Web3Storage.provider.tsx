import { useState, useMemo, useEffect, FC, ReactNode } from "react";
import { Web3Storage } from "web3.storage";
import { ipfsToken } from "config";

import Web3StorageContext from "./Web3Storage.context";

const Web3StorageProvider: FC<{children: ReactNode}> = ({ children }) => {
  const storageProvider = new Web3Storage({ token: ipfsToken });

  const web3StorageApi = useMemo(
    () => ({
        storageProvider
    }),
    [storageProvider]
  );

  return (
    <Web3StorageContext.Provider value={web3StorageApi}>{children}</Web3StorageContext.Provider>
  );
};

export default Web3StorageProvider;
