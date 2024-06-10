
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div  dir='ltr'className='h-screen w-full flex flex-col gap-10 justify-center items-center'><SignIn /></div>;
}