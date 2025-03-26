import { Link, useLocation } from 'react-router-dom';
import { SlashIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const noBreadcrumbPaths = ['/login', '/home', '/'];

    if (noBreadcrumbPaths.includes(location.pathname)) {
        return null;
    }

    return (
        <nav className="flex items-center text-sm py-4 px-20">
            <ol className="flex items-center space-x-2">
                <li>
                    <Link to="/home" className="text-gray-600 hover:text-gray-900">
                        Home
                    </Link>
                </li>
                <li className="flex items-center">
                    <SlashIcon className="h-4 w-4 text-gray-400 mx-2" />
                    {
                        pathnames.map((path, index) => {
                            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathnames.length - 1;
                            const pathName = decodeURIComponent(path.replace(/-/g, ' '));
                            return (
                                <React.Fragment key={path}>
                                    {isLast ? (
                                        <span className="text-gray-500 capitalize">{pathName}</span>
                                    ) : (
                                        <>
                                            <Link
                                                to={routeTo}
                                                className="text-gray-600 hover:text-gray-900 capitalize"
                                            >
                                                {pathName}
                                            </Link>
                                            <SlashIcon className="h-4 w-4 text-gray-400 mx-2" />
                                        </>
                                    )}
                                </React.Fragment>
                            );
                        })
                    }
                </li>
            </ol>
        </nav>
    );
}