import { type Metadata } from "next";
import { BlurFade } from "~/components/magicui/blur-fade";

export const metadata: Metadata = {
  title: "Products — Viktor",
};

export default function ProductsPage() {
  return (
    <main>
      <div className="container mx-auto flex flex-col">
        <BlurFade inView>
          <p className="text-lg text-gray-400">Oh no!</p>
        </BlurFade>
        <BlurFade inView>
          <div>
            <h1 className="max-w-lg text-[2.5rem] leading-snug">
              {"There are no products available at the moment."}
            </h1>
          </div>
        </BlurFade>
      </div>
    </main>
  );
}
