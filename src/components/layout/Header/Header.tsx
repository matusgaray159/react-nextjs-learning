'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
    label: string;
    href: string;
    external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 dark:border-gray-800 dark:bg-gray-950/95">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo / Brand */}
                <Link 
                    href="/"
                    className="text-xl font-bold text-gray-900 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                >
                    Learning Project
                </Link>

                {/* Navigation */}
                <nav>

                    <ul className="flex items-center gap-6">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-sm font-medium transition-colors",
                                            isActive
                                                ? "text-gray-900 dark:text-white"
                                                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        )}
                                        {...(item.external && {
                                            target: '_blank',
                                            rel: 'noopener noreferrer'
                                        })}>
                                            {item.label}
                                    </Link> 
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}