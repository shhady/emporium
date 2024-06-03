import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    // <!-- Footer section with social media icons and newsletter sign-up -->
    <footer
      className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white mt-8">
      <div className="container px-6 pt-6">
        {/* <!-- Newsletter sign-up form --> */}
        <div>
          <form action="">
            <div
              className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:mb-6 md:ms-auto">
                <p>
                  <strong>כל ההמראות והנחיתות אצלכם במייל</strong>
                </p>
              </div>
    
              {/* <!-- Newsletter sign-up input field --> */}
              <div className="relative md:mb-6" data-twe-input-wrapper-init>
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInputEmail"
                  placeholder="Email address" />
              </div>
    
              {/* <!-- Newsletter sign-up submit button --> */}
              <div className="mb-6 md:me-auto">
                <button
                  type="submit"
                  className="inline-block rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                  data-twe-ripple-init
                  data-twe-ripple-color="light">
                  הרשמה
                </button>
              </div>
            </div>
          </form>
        </div>
    
        {/* <!-- Copyright information --> */}
        <div className="mb-6">
          <p>
          אני רוצה לקבל מידע ופרסום על הטבות, עדכונים וקולקציות חדשות באמצעי התקשרות והטכנולוגיה השונים כגון: דוא"ל/ SMS /WhatsApp ועוד. כפוף ובהתאם לתנאי התקנון
          </p>
        </div>
    
        {/* <!-- Links section --> */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">עזרה</h5>
    
            <ul className="mb-0 list-none">
              <li>
                <Link href="#!">משלוחים</Link>
              </li>
              <li>
                <Link href="#!">החזרות/החלפות</Link>
              </li>
              <li>
                <Link href="#!">ביטול עסקה</Link>
              </li>
              <li>
                <Link href="#!">יצירת קשר</Link>
              </li>
            </ul>
          </div>
    
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">emporium</h5>
    
            <ul className="mb-0 list-none">
              <li>
                <Link href="#!">אודות</Link>
              </li>
              <li>
                <Link href="#!">תקנון</Link>
              </li>
              <li>
                <Link href="#!">הצהרת נגישות</Link>
              </li>
              <li>
                <Link href="#!">תנאי שימוש ומדיניות</Link>
              </li>
              <li>
                <Link href="#!">פרטיות</Link>
              </li>
            </ul>
          </div>
    
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">My emporium</h5>
    
            <ul className="mb-0 list-none">
              <li>
                <Link href="#!">ההזמנות שלי</Link>
              </li>
              <li>
                <Link href="#!">MY LIST</Link>
              </li>
              <li>
                <Link href="#!">התחברות</Link>
              </li>
              <li>
                <Link href="#!">Link 4</Link>
              </li>
            </ul>
          </div>
    
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">FOLLOW US</h5>
           
            <ul className="mb-0 list-none flex justify-center items-center gap-3">
              <li>
           
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512">
                <path
                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          
    
              </li>
              <li>
           
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
         
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    
      {/* <!-- Copyright section --> */}
      <div className="w-full bg-black/5 p-4 text-center">
        © 2023 Copyright:
        <Link className="font-semibold" href="https://tw-elements.com/"
          >TW Elements</Link>
      </div>
    </footer>
  )
}
