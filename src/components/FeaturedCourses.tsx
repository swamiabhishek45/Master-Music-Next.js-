'use client';
import courseData from "../data/music_courses.json";
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
    const featuredCourses = courseData.courses.filter(
        (course: Course) => course.isFeatured
    );
    return (
        <div className="py-12 bg-gray-900">
            {/* first portion */}
            <div className="text-center">
                <h2 className="font-semibold uppercase text-teal-600 text-base tracking-wide ">
                    Featured Courses
                </h2>
                <p className="text-3xl sm:text-4xl leading-8 mt-2 tracking-tight font-extrabold">
                    Learn With the Best
                </p>
            </div>
            {/* second portion */}
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center ">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm p-5 justify-center items-center">
                                {/* <Image
                                    src={`/jordans.webp`}
                                    alt="jordans"
                                    height="200"
                                    width="200"
                                    className="object-contain"
                                /> */}
                                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                    {course.title}
                                </p>

                                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                                    {course.description}
                                </p>
                                <Link
                                href={`/courses/${course.slug}`} className="rounded-full  px-4 py-2 w-fit text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                    <span>Learn More  </span>
                                    
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
