"use client";

import { CookiesProvider } from "react-cookie";
import React, { ReactNode } from "react";

const ReactCookiesProvider = ({
  children,
}: {
  children: Readonly<ReactNode>;
}) => {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      {children}
    </CookiesProvider>
  );
};

export default ReactCookiesProvider;
