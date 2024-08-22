import React, { useEffect, useState } from 'react';

const DarkMode: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        // Check the current theme from local storage or default to system preference
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button 
            onClick={toggleDarkMode} 
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition duration-300"
            aria-label="Toggle Dark Mode"
        >
            {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-6.34l-.7-.7m-13.92 0l-.7-.7M16 12h1m-10 0H5m2.93-7.07l.7-.7M7.07 18.93l.7-.7M18.93 7.07l.7-.7M7.07 5.93l.7-.7M12 12a5 5 0 100-10 5 5 0 000 10z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-6.34l-.7-.7m-13.92 0l-.7-.7M16 12h1m-10 0H5m2.93-7.07l.7-.7M7.07 18.93l.7-.7M18.93 7.07l.7-.7M7.07 5.93l.7-.7M12 12a5 5 0 100-10 5 5 0 000 10z" />
                </svg>
            )}
        </button>
    );
};

export default DarkMode;
