import React from 'react'

type PageHeadProps = {
  title: string;
  description: string;
}

const PageHead = ({ title, description }: PageHeadProps) => {
  return (
    <div className={`full md:w-[70%] my-0 mx-auto pt-20 pb-10 lg:pt-32 lg:pb-24`}>
      <h1 className={`font-sans text-4xl lg:text-5xl font-bold text-primary uppercase text-center`}>
        {title}
      </h1>
      <div className='text-center mt-10 lg:w-[70%] my-0 mx-auto'>
        <h2 className={`font-montaga text-lg font-medium lg:text-xl text-primary`}>
          {description}
        </h2>
      </div>
    </div>
  )
}

export default PageHead