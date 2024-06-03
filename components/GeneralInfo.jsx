import React from 'react'

export default function GeneralInfo() {
  return (
    <div className="grid mt-16 lg:px-16 px-8 gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-center">
        <div className='flex flex-col justify-center gap-3 items-center h-72 shadow-lg p-4 hover:shadow-xl w-full '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

    <h1 className='text-2xl text-center'> משלוח עד הבית    
    </h1>
    <p className='text-center'>משלוח תוך 2-4 ימים 
משלוח חינם בהזמנה מעל 299₪</p>
    </div>
    <div className='flex flex-col justify-center gap-3 items-center h-72 shadow-lg p-4 hover:shadow-xl w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
    <h1 className='text-2xl text-center'>שירות החלפות   
    </h1>
    <p className='text-center'>החלפה/החזרה 
        תוך 14 ימים מיום קבלת המשלוח</p>
    </div>
        
        <div className='flex flex-col justify-center gap-3 items-center h-72 shadow-lg p-4 hover:shadow-xl w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>

    <h1 className='text-2xl text-center'>תשלום מאובטח   
    </h1>
    <p className='text-center'>תשלום מאובטח בביט/פייפאל/אשראי</p>
    </div>
       
        
        <div className='flex flex-col justify-center gap-3 items-center h-72 shadow-lg p-4 hover:shadow-xl w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>


    <h1 className='text-2xl text-center'>שירות לקוחות   
    </h1>
    <p className='text-center'>שעות פעילות שירות לקוחות
א׳-ה׳ 9:30-17:30
        </p>
    </div>
        
    </div>
  )
}
