"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="font-semibold uppercase text-teal-600 text-base tracking-wide ">
                        OUR POPULAR TRAINING PROGRAMS
                    </h2>
                    <h1 className="text-2xl md:text-4xl">Choose From Top Courses By LearnNex</h1>
                </div>
                <HoverEffect items={projects} />
            </div>
        </div>
    );
}
export const projects = [
    {
        id: 1,
        title: "Drone Engineering",
        company: "LearnNex",
        price: "₹10,999.00",
        discountPrice: "₹7,499.00",
        image: "/courses/drone.png",
    },
    {
        id: 2,
        title: "Business Wiz Program: Your Pathway to Entrepreneurial Excellence",
        company: "LearnNex",
        price: "₹11,599.00",
        discountPrice: "₹5,999.00",
        image: "/courses/business.webp",
    },
    {
        id: 3,
        title: "Tech Wiz Program: The Ultimate Gateway to Tech Mastery",
        company: "LearnNex",
        price: "₹25,000.00",
        discountPrice: "₹11,999.00",
        image: "/courses/tech.webp",
    },
    {
        id: 4,
        title: "Unity Certified User Programmer and VR developers",
        company: "LearnNex",
        price: "₹14,999.00",
        discountPrice: "₹9,999.00",
        image: "/courses/unity.png",
    },
    {
        id: 5,
        title: "Software Development by ITS",
        company: "LearnNex",
        price: "₹14,999.00",
        discountPrice: "₹9,999.00",
        image: "/courses/software.png",
    },
    {
        id: 6,
        title: "Cloud Computing by ITS",
        company: "LearnNex",
        price: "₹14,999.00",
        discountPrice: "₹9,999.00",
        image: "/courses/cloud.png",
    },
];
