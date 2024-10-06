"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <div
                className={cn(
                    "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
                    className
                )}
            >
                <Menu setActive={setActive}>
                    <Link href={"/"}>
                        <MenuItem
                            setActive={setActive}
                            active={active}
                            item="Home"
                        ></MenuItem>
                    </Link>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Our Courses "
                    >
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/courses">
                                All Courses
                            </HoveredLink>
                            <HoveredLink href="/">
                                Basic Music Theory
                            </HoveredLink>
                            <HoveredLink href="/courses">
                               Advanced Composition
                            </HoveredLink>
                            <HoveredLink href="/courses">
                               Music Production
                            </HoveredLink>
                        </div>

                        {/* <div className=" text-sm grid grid-cols-2 gap-10 p-4 w-60 md:w-full">
                            <ProductItem
                                title="Algochurn"
                                href="https://algochurn.com"
                                src="/"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Algochurn"
                                href="https://algochurn.com"
                                src="/"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Algochurn"
                                href="https://algochurn.com"
                                src="/"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Algochurn"
                                href="https://algochurn.com"
                                src="/"
                                description="Prepare for tech interviews like never before."
                            />
                        </div> */}
                    </MenuItem>
                    <Link href="/contact">
                        <MenuItem
                            setActive={setActive}
                            active={active}
                            item="Contact Us"
                        ></MenuItem>
                    </Link>
                </Menu>
            </div>
        </>
    );
}
