import { websiteName } from "@/data/base";
import { Metadata } from "next";
import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";

const pageTitle = "Resume";
const fullTitle = websiteName + " - " + pageTitle;

export const metadata: Metadata = {
  title: fullTitle,
  description:
    "Download my resume (as of Feb 2025). It is available in latex format.",
  keywords:
    "education, learning, knowledge, skills, books, certifications, school, resume, career",
};

const Resume = () => {
  return (
    <>
      <div className="container mx-auto px-4 pb-7">
        <ReturnHomeButton />

        <h1>Download my resume (Feb 2025)</h1>
        <p className="pb-4">
          <span className="text-red-500 font-bold">Disclaimer:</span> If you would like to
          me update my resume, please kindly{" "}
          <a href="/connect-with-me"><span className="text-blue-500">reach out to me</span></a>
        </p>
        <iframe
          src="/Tom_Zhang_Resume_Feb2025.pdf"
          width="75%"
          height="800px"
          title="My Resume"
        ></iframe>
      </div>
    </>
  );
};

export default Resume;
