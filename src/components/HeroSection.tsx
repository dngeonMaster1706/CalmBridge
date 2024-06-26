import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
export default function HeroSection() {
    return (
     <div
        className="h-auto md:h-[40rem] w-full  rounded-md flex flex-col items-center    justify-center relative overflow-hidden    mx-auto py-10 md:py-0"
     >
        <div
        className="p-4 relative z-10 w-full text-center"
        >   <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"

<<<<<<< HEAD
            >Master the ART of CONCENTRATION!!!!</h1>
=======
            >Master the ART of CONCENTRATION</h1>
>>>>>>> a54a807ee4c91009ff6801a583b4097071441d06
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Master the art of concentration to boost productivity and achieve your goals. Focus intently, filter out distractions, and create a conducive work environment. Elevate your efficiency and satisfaction in every task.</p>
            <div className="mt-4">
                <Link href={"/courses"}>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore
                    </Button>
                </Link>
            </div>
        </div>
     </div>
    );
  }
  