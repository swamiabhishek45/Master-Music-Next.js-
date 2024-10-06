"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Expert Trainers",
        description:
            "Our courses are led by expert trainers with years of industry experience. They provide hands-on learning, real-world insights, and personalized guidance to help you master essential skills. With their expertise, you'll gain in-depth knowledge and practical skills to excel in your chosen field, ensuring a successful learning journey.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image src="/girl.png" alt="img" width={200} height={200} />
            </div>
        ),
    },
    {
        title: "Online Remote Learning",
        description:
            "Our online remote learning platform offers flexibility and convenience, allowing you to learn from anywhere at your own pace. With interactive lessons, live sessions, and real-time support, you’ll have access to high-quality education without the need to commute. Gain valuable skills and knowledge from the comfort of your home.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image src="/girl.png" alt="img" width={200} height={200} />
            </div>
        ),
    },
    {
        title: "Lifetime Access",
        description:
            "With lifetime access to our courses, you can revisit and review the materials whenever you need. This ensures you stay updated on the latest knowledge and skills, allowing you to learn at your own pace and continuously improve. Enjoy unlimited access to all resources, anytime and anywhere.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                <Image src="/girl.png" alt="img" width={200} height={200} />
            </div>
        ),
    },
    {
        title: "Certified Courses",
        description:
            "Our certified courses provide you with industry-recognized credentials upon completion. These certifications validate your skills and enhance your professional credibility, giving you a competitive edge in the job market. With our comprehensive curriculum and expert guidance, you'll gain the knowledge and certification needed to advance your career confidently.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image src="/girl.png" alt="img" width={200} height={200} />
            </div>
        ),
    },
];
export function StickyScrollReveal() {
    return (
        <div className="">
            
            <StickyScroll content={content} />
        </div>
    );
}
