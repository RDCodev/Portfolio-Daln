import type React from "react";
import { SWRConfig } from "swr";

export const SWRProvider: React.FC = ({ ...props }) => (
  <SWRConfig
    { ...props }
  />
);