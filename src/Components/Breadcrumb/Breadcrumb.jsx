import { Link, useLocation, useParams } from 'react-router-dom';
import { SlashIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function Breadcrumb() {
    const location = useLocation();
    const { categorySlug } = useParams();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const noBreadcrumbPaths = ['/login', '/home', '/'];

    if (noBreadcrumbPaths.includes(location.pathname)) {
        return null;
    }


    const formatBreadcrumbName = (slug) => {
        return slug
            .replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <nav className="flex items-center text-sm py-4 px-4 sm:px-6 lg:px-20">
            <ol className="flex items-center space-x-2">
                <li>
                    <Link to="/home" className="text-gray-600 hover:text-gray-900">
                        Home
                    </Link>
                </li>
                <SlashIcon className="h-4 w-4 text-gray-400 mx-1" />

                {pathnames.map((path, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const pathName = formatBreadcrumbName(path);


                    if (path === 'products' && categorySlug) {
                        return null;
                    }

                    return (
                        <React.Fragment key={path}>
                            {isLast ? (
                                <span className="text-gray-500">{pathName}</span>
                            ) : (
                                <>
                                    <Link
                                        to={routeTo}
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        {pathName}
                                    </Link>
                                    <SlashIcon className="h-4 w-4 text-gray-400 mx-1" />
                                </>
                            )}
                        </React.Fragment>
                    );
                })}
            </ol>
        </nav>
    );
}