"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";


export default function Footer() {
    const { t } = useTranslation();

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/b4d-sarl/",
            icon: "/images/LinkedIn.png",
            color: "hover:text-blue-600"
        },
        {
            name: "Facebook",
            href: "https://web.facebook.com/profile.php?id=61580434651179",
            icon: "/images/fb.png",
            color: "hover:text-blue-600"
        }

    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                {/* Grid with Logo, Contact, Links, and Social */}
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div>
                        <Image
                            src="/logobiochar.png"
                            alt="B4D Logo"
                            width={200}
                            height={80}
                            className="mb-4"
                        />
                        <p className="text-gray-400">{t("footer.description")}</p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t("footer.contact")}</h3>
                        <div className="space-y-2 text-gray-400">
                            <>
                                {t("line1")} <br />
                                {t("line2")} <br />
                                {t("line3")} <br />
                                {t("line4")}
                            </>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t("footer.links")}</h3>
                        <div className="space-y-2">
                            <Link
                                href="/about"
                                className="block text-gray-400 hover:text-white transition-colors"
                            >
                                {t("nav.about")}
                            </Link>
                            <Link
                                href="/projects"
                                className="block text-gray-400 hover:text-white transition-colors"
                            >
                                {t("nav.projects")}
                            </Link>
                            <Link
                                href="/contact"
                                className="block text-gray-400 hover:text-white transition-colors"
                            >
                                {t("nav.contact")}
                            </Link>
                            <Link
                                href="/blog"
                                className="block text-gray-400 hover:text-white transition-colors"
                            >
                                {t("nav.blog")}
                            </Link>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            {t("followUs")}
                        </h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 rounded-full bg-gray-800 text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${social.color}`}
                                    aria-label={`Follow us on ${social.name}`}
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.name}
                                        width={20}
                                        height={20}
                                        className="w-5 h-5"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-6 px-4">
                    <p className="text-center text-sm sm:text-base text-gray-400">
                        © {new Date().getFullYear()} B4D Sarl
                    </p>
                </div>
            </div>
        </footer>
    );
}