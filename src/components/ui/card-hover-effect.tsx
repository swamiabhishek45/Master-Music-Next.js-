import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        id: number;
        title: string;
        company: string;
        price: string;
        discountPrice: string;
        image: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href="https://swamiabhishek45.vercel.app"
                    key={item.id}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <div className="sm:h-96">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={500}
                                height={500}
                                className="object-cover rounded-t-2xl"
                            />
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>By {item.company}</CardDescription>
                        </div>
                        <hr />
                        <div className="flex my-5 justify-between items-center">
                            <div className="flex gap-3 sm:flex-row">
                                <p className="line-through text-gray-600">
                                    {item.price}
                                </p>
                                <p>{item.discountPrice}</p>
                            </div>
                            <button className="border p-2 px-3 flex gap-2  rounded-full hover:text-black hover:bg-white ">
                                <Image
                                    src="/cart.png"
                                    alt="cart"
                                    width={24}
                                    height={24}
                                    className="hover:invert"
                                />
                                <p className="text-sm">Add to Cart</p>
                            </button>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4
            className={cn(
                "text-zinc-100 font-bold tracking-wide mt-4",
                className
            )}
        >
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "my-4 text-zinc-400 tracking-wide leading-relaxed text-sm ",
                className
            )}
        >
            {children}
        </p>
    );
};
