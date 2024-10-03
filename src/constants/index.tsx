


export const navLinks = [
  {
    url: "/",
    title: "Home"
  },
  {
    url: "/gift-registry",
    title: "Gift Registry"
  },
  {
    url: "/rsvp",
    title: "RSVP"
  },
]

export const styles = {
  boxWidth: "lg:max-w-[70%] w-full mx-auto",

  heading1: "font-montaga text-3xl lg:text-4xl text-primary uppercase",
  heading2: "font-montaga font-semibold text-4xl text-primary",
  heading3: "font-montaga font-semibold text-sm text-primary",
  paragraph: "font-montaga font-normal text-primary text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-6",

  pageHeading: "full md:w-[70%] container pt-10 lg:p-3",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};


export const textStyles = {


}
