export default function Header() {

    return (
        <header className="sticky top-0 z-50 bg-gray-800">
        <nav className="container mx-auto">
            <div className="flex items-center justify-between h-20">
            <div className="w-2/5 h-full shrink-0 overflow-hidden">
                <img
                className="h-full w-full transform object-none object-center scale-120"
                src="/src/assets/amanda_reilly_logo.png"
                alt="Logo"
                />
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Home
                </a>

                <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    About
                </a>

                <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Services
                </a>

                <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Contact
                </a>
                </div>
            </div>
            </div>
        </nav>
        </header>
    )
}
