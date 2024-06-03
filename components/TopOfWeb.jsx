"use client"
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function TopOfWeb() {
    const {user} = useUser()
  return (
    <>
    {!user && <Link href='/sign-in' className="flex items-center justify-center bg-black text-white h-8">חדשים ? הירשמו וקבלו עד 50% הנחה</Link>}
    {/* <div style={{position:'sticky' ,top:"0", height:"96px", backgroundImage:`url('/logo2.png')`, backgroundRepeat:'repeat-x',backgroundSize:'300px', zIndex:'30'}}></div> */}
    </>
  )
}
