import { FC } from "react";
import Awards from "./components/sections/Awards";
import CareerObjective from "./components/sections/CareerObjective";
import ContactInformation from "./components/sections/ContactInformation/ContactInformation";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import WorkExperience from "./components/sections/WorkExperience/WorkExperience";

const Resume: FC = () => {
  return (
    <main className="page">
      <div className="side-panel">
        <ContactInformation />
        <Education />
        <Skills />
        <Awards />
      </div>
      <div className="main-panel">
        <CareerObjective />
        <WorkExperience />
      </div>
    </main>
  );
};
export default Resume;
