import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center flex-col ">
                    <Image
                        src="/banner.png"
                        alt="banner"
                        width={300}
                        height={300}
                    />
                    <p className="m-4 text-center">
                        Experience innovation, learn with purpose, and step into
                        a future of boundless possibilities. LearnNex is not
                        just a platform; it’s your launchpad to tech stardom.
                        Seize the opportunity – join us today!
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="">
                            <Link href="https" className="">
                                <Image
                                    src="/icons/fb.svg"
                                    alt=""
                                    width={34}
                                    height={34}
                                />
                            </Link>
                        </div>
                        <div className="">
                            <Link href="https" className="">
                                <Image
                                    src="/icons/insta.svg"
                                    alt=""
                                    width={34}
                                    height={34}
                                />
                            </Link>
                        </div>
                        <div className="">
                            <Link href="https" className="">
                                <Image
                                    src="/icons/x.svg"
                                    alt=""
                                    width={34}
                                    height={34}
                                />
                            </Link>
                        </div>
                        <div className="">
                            <Link href="https" className="">
                                <Image
                                    src="/icons/linkedin.svg"
                                    alt=""
                                    width={34}
                                    height={34}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text-white text-lg font-semibold mb-4">
                        Useful Links
                    </h2>
                    <ul className="">
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                About Our Platform
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Growth & Operations Intern
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Refund Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-violet-400 text-center text-lg font-semibold mb-4">
                        Subscribe Now!
                    </h2>
                    <div className="flex space-x-4">
                        <p className="text-center">
                            Don’t miss out on our future updates! Get subscribed
                            now!
                        </p>
                    </div>
                    <div className="mt-4 flex justify-center items-center">
                        <input type="text" placeholder="Enter your mail here" className="p-4 text-black rounded-l-full" />
                        <button className="p-4 bg-violet-400 text-black rounded-r-full">Submit</button>
                    </div>
                </div>
                {/* <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        Contact Us
                    </h2>
                    <p>New Delhi, India</p>
                    <p>Delhi 10001</p>
                    <p>Email: info@musicschool.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div> */}
            </div>
            <p className="text-center text-xs pt-8 font-semibold">
                ©2023 - 2024. LearnNex. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;
