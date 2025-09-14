import { type PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      forcedTheme="dark"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
