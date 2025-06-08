import Headline from "./components/typo/Headline.typo.components";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex w-screen items-center justify-center">
      <Headline className="font-outfit mt-4 md:mt-8 xl:mt-12">
        Portfolio
      </Headline>
    </div>
  );
}
