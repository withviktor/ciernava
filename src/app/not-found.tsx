import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 h-screen w-full items-center justify-center">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rotate-6 flex-col items-center">
        <p className="text-2xl font-bold">Oh no, this page does not exist!</p>
      </div>
      <Button variant="outline" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
