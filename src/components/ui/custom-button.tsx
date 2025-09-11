import { Button } from "./button";

export const CustomButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      size="lg"
      className="bg-brand hover:bg-brand/80 text-brand-foreground text-md rounded-full px-12 py-8 shadow-md transition-all duration-300 hover:scale-105"
    >
      {children}
    </Button>
  );
};
