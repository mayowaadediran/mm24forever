


export const navLinks = [
  {
    url: "/",
    title: "Home"
  },
  {
    url: "/our-story",
    title: "Our Story"
  },
  {
    url: "/gallery",
    title: "Gallery"
  },
  {
    url: "/itinerary",
    title: "Itinerary"
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

  heading1: "font-montaga text-2xl lg:text-4xl text-primary uppercase",
  heading2: "font-montaga  text-xl font-semibold text-primary",
  heading3: "font-montaga font-bold text-sm text-primary",
  paragraph: "font-montaga font-normal text-white text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-6",

  pageHeading: "full md:w-[70%] pt",

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



export const images = [""]