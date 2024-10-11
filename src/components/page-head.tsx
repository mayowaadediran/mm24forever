import React from 'react'

type PageHeadProps = {
  title: string;

}

const PageHead = ({ title }: PageHeadProps) => {
  return (
    <div className={`full md:w-[70%] my-0 mx-auto pt-20 pb-16 lg:pt-32 lg:pb-30`}>
      <h1 className={`font-sans text-4xl lg:text-5xl font-bold text-primary uppercase text-center`}>
        {title}
      </h1>
    </div>
  )
}

export default PageHead