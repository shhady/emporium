import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return <div dir='ltr'className='h-screen w-full flex flex-col gap-10 justify-center items-center'>
    <h1>Sign In</h1><SignIn /></div>
}

export default SignInPage;