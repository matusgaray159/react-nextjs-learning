export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
            <div className="container mx-auto px-4 py-6">
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    &copy; {currentYear} Learning Project. Built with Next.js & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}