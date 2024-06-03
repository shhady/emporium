import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { brands } from './product-form/arrays';
function generateCategoryLink(pathname, category) {
    return `/${pathname.split('/')[1]}/${category}`;
}

const categories = ['shoes', 'swimwear', 'pants', 'shirts', 'tshirts']
export default function SecondNav() {
    const pathname = usePathname();

    return (
        <Popover.Group className="hidden lg:flex lg:gap-x-12 border-t-2 justify-center items-center p-0" dir='ltr'>
            <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-lg font-weight-400 font-sans leading-6 text-black py-2 px-4 rounded">
                    מותגים
                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </Popover.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4 flex flex-wrap" dir="ltr">
                            {brands.map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                >
                                    <Link href={item.name} passHref className="block font-medium font-sans text-black">
                                       {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
            {categories.map((category) => (
                <Link key={category} href={generateCategoryLink(pathname, category)}>
                    <div className={`text-lg font-weight-400 font-sans leading-6 text-black ${pathname.split('/')[2] === category ? 'bg-slate-100' : ''} py-2 px-4 rounded`}>
                        {category === 'shoes' && 'נעליים'}
                        {category === 'swimwear' && 'בגדי ים'}
                        {category === 'pants' && 'מכנסיים'}
                        {category === 'shirts' && 'מכופתרות'}
                        {category === 'tshirts' && 'חולצות'}
                    </div>
                </Link>
            ))}
        </Popover.Group>
    );
}
