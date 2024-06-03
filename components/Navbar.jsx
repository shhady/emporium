'use client'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs"
import { auth, useAuth, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation"
import Link from 'next/link'
import { Heart } from 'lucide-react'
import SecondNav from './SecondNav'
import { brands } from './product-form/arrays'

const DropdownMenu = () => {
  return (
    <div className="relative inline-block text-left">
      <UserButton afterSignOutUrl="/" />
      {/* <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1">
          <Link href="/profile" passHref>
            <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit Profile</span>
          </Link>
          <Link href="/add-details" passHref>
            <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Add Details</span>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {user} = useUser()
  const {userId} = useAuth()
  console.log(userId);
 
  const pathname = usePathname()
  console.log(pathname.split('/')[1]);
 
  return (
    <header className={`bg-white ${pathname === '/' ? ('fixed'):('sticky')} w-full  shadow-lg top-10 z-50 transition duration-150`} dir='ltr'>
      <nav className="mx-auto flex items-center justify-between lg:p-8 p-4 lg:px-8 text-white" aria-label="Global">
      <div className="flex lg:hidden justify-center items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
            </svg>
            <Heart color='black'/>
      </div>

        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-8 w-auto" src="/logo.png" alt="" width={100} height={50}/>
          </Link>
        </div>
        
        <div className="flex lg:hidden gap-3">
        <div>
                <Link
                  href="/sign-in"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium font-sans leading-7 text-black hover:bg-gray-50"
                >
                     {user ? (  <UserButton afterSignOutUrl="/"/>
            ):(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>)}
                </Link>
                
              </div>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

       
      <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5">
      <Heart color='black'/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-800">
            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
            </svg>
          
      {user ? (   <DropdownMenu />
            ):(
          <Link href="/sign-in" className="text-lg font-medium font-sans leading-6 text-black">
            התחברות 
          </Link>
        )} 
        
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-60" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt=""
              />
            </Link>
            
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-24">
              
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium font-sans font-sans leading-7 text-gray-900 hover:bg-gray-50"
                >
                  עמוד הבית
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium font-sans font-sans leading-7 text-gray-900 hover:bg-gray-50"
                >
                  נשים
                </Link>
                <Link
                  href="/men"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium font-sans leading-7 text-gray-900 hover:bg-gray-50"
                >
                  גברים
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium font-sans leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ילדים
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium font-sans leading-7 text-gray-900 hover:bg-gray-50">
                        מותגים
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {brands.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                           
                            href={'/'}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium font-sans leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              
              <div className="py-6">
              {user ? (  <div className='flex items-center justify-start gap-3'><UserButton afterSignOutUrl="/"/> {user.fullName}</div>
            ):(
          <Link href="/sign-in" className="text-lg font-medium font-sans leading-6 text-black">
            התחברות 
          </Link>
        )} 
        
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {user ? (null):(
      <Link href="/sign-in" className="flex items-center justify-center bg-black bg-opacity-60 text-white sticky top-0  z-50 h-8">חדשים ? הירשמו וקבלו עד 50% הנחה</Link>

      )}
    </header>
  )
}


// {pathname:`${pathname}`,query:{name:'shirts'}}