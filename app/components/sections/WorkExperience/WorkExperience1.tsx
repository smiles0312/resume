import { FC } from "react";
import BulletItem from "../../common/BulletItem";
import TimeOrPlaceItem, {
  TimeOrPlaceItemType,
} from "../../common/TimeOrPlaceItem";

const WorkExperience1: FC = () => {
  return (
    <div>
      <div className="title">Senior Front-End Engineer</div>
      <div className="text-highlight">Carfax, Inc.</div>

      <div className="work-experience-detail">
        <TimeOrPlaceItem
          type={TimeOrPlaceItemType.TIME}
          item="August 2016 - Present"
        />
        <TimeOrPlaceItem type={TimeOrPlaceItemType.PLACE} item="Columbia, MO" />
      </div>

      <div className="responsibilities">
        {RESPONSIBILITIES.map((skill: string, idx: number) => (
          <BulletItem key={idx} item={skill} />
        ))}
      </div>
    </div>
  );
};
export default WorkExperience1;

const RESPONSIBILITIES = [
  "Collaborated closely with developers, architects, cloud engineers, support teams, security teams to develop, design and test scalable, efficient and maintainable dealer-focused web application using React, MobX, Typescript, CSS for mobile, tablet and desktop layouts.",
  "Optimized and enhanced user experience by implementing, measuring, monitoring and analyzing performance metrics insights provided by Adobe Analytics, Google Analytics and New Relic.",
  "Collaborated with developers, architects, cloud engineers to develop and integrate web services using REST and GraphQL",
  "Mentored 4 new junior front-end developers, enabling them to expand skillset and achieve professional growth and personal goals.",
  "Worked with Quality Assurance to get new pages/products tested, and addressed any issues within 48 hours.",
  "Led front-end fit and finish, from pixel perfect layouts to animations, ensuring a polished experience is delivered to our customers.",
  "Integrated several chart libraries such as Apexcharts.js, D3, chart.js to illustrate dealership trending performance and return value in graphic form.",
  "Led the web content accessibility corporate-wide initiative to analyze, convert and ensure all front-end components adhere to the WCAG 2.2 standards.",
  "Contributed to the ideation, concept development, and implementation of visual design concepts.",
  "Introduced a content management system (Contentful) that allows non-technical users to create, manage and publish digital web content without the need to deploy code changes resulting in a much smoother, quicker release schedule.",
  "Volunteered as Security officer to analyze, assess and correct dealer-facing web application vulnerabilities by adhering to Open Web Application Security Project (OWASP) standards.",
];
