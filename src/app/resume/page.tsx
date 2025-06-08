import { websiteName } from "@/data/base";
import { Metadata } from "next";
import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";

const pageTitle = "Resume";
const fullTitle = websiteName + " - " + pageTitle;

export const metadata: Metadata = {
  title: fullTitle,
  description:
    "Download my resume. It is available in latex format.",
  keywords:
    "education, learning, knowledge, skills, books, certifications, school, resume, career",
  openGraph: {
    images: [
      {
        url: "https://tomzhang.info/og-images/ogi_resume.jpg",
        width: 1120,
        height: 630,
        alt: "Tom Zhang's Personal Website",
      },
    ],
  },
};

const Resume = () => {
  return (
    <>
      <div className="container mx-auto px-4 pb-7">
        <ReturnHomeButton />

        <h1>Download my resume</h1>
        <p className="pb-4">
          <span className="text-red-500 font-bold">Disclaimer:</span> If you would like to
          me explain further, please kindly{" "}
          <a href="/connect-with-me"><span className="text-blue-500">reach out to me</span></a>
        </p>
        <iframe
          src="./Tom Zhang - Resume.pdf"
          width="75%"
          height="800px"
          title="My Resume"
        ></iframe>
      </div>
    </>
  );
};

export default Resume;
