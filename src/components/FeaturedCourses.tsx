'use client';
import roadmapData from "../data/roadmap.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

// Apana created datatype (Typescript)
interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
}

function FeaturedCourses() {
    const featuredCourses = roadmapData.roadmap.filter(
        (course: Course) => course.isFeatured
    );
    return (
        <div className="py-12 bg-gray-900">
            {/* first portion */}
            <div className="text-center">
                <h2 className="font-semibold text-3xl px-10 sm:p-0  sm:text-5xl text-teal-600 tracking-wide ">
                    Online{" "}
                    <span className="underline text-violet-400">Classes</span>{" "}
                    For Remote Learning
                </h2>
                <p className="text-gray-400 px-5 leading-8 mt-6 tracking-tight">
                    Redefining Excellence With Our Industry Best Learning
                    Modules Designed For The Future
                </p>
            </div>
            {/* second portion */}
            <div className="mt-10 mx-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center ">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm w-80 gap-2 sm:w-60 p-10 justify-center items-center">
                                <Image  
                                    src={course.image}
                                    alt="logo"
                                    height="44"
                                    width="44"
                                    className="object-contain"
                                />
                                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
                                    {course.title}
                                </p>

                                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                                    {course.description}
                                </p>
                                <Link
                                    href={`/courses/${course.slug}`}
                                    className="rounded-full  px-4 py-2 w-fit text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
                                >
                                    <span>50+ Programs</span>
                                </Link>
                            </BackgroundGradient>
                            
                        </div>
                    ))}
                </div>
            </div>
            {/*  third portion */}
            <div className="text-center mt-20">
                <Link
                    href="/courses"
                    className="px-4 py-2 bg-white rounded border border-neutral-600 text-neutral-700 transition duration-200 hover:bg-gray-200"
                >
                    View More
                </Link>
            </div>
        </div>
    );
}

export default FeaturedCourses;
