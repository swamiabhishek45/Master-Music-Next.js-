import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
    return (
        <>
            <div className="h-auto md:h-[45rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
                <div className="p-4 relative z-10 w-full text-center">
                    <h1 className="mt-20 md:mt-0 w-full text-4xl md:text-7xl bg-clip-text text-transparent font-bold bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Master the Art of Music
                    </h1>
                    <p className="py-5 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel et aut minima rem dolore sed optio velit, aliquam
                        esse numquam, reiciendis, reprehenderit libero dolores
                        nihil. At vitae dicta iusto{" "}
                    </p>
                    <div>
                        <Link href={"/courses"}>
                            <Button
                                borderRadius="1.75rem"
                                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                            >
                                Explore courses
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
