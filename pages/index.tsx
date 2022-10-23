import Head from "next/head";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

export default function Page() {
  return (
    <>
      <Head>
        <title>joshbrusa.com</title>
      </Head>
      <div className="page-title">Hello!</div>
      <div className="mt-2">
        Welcome to my personal portfolio. Thank you for stopping by. Below you
        will find some information about myself and above you can discover more
        about me.
      </div>
      <div className="mt-2 page-text-xl">Experience</div>
      <Experience
        role="Manufacturing Engineer"
        company="Greenheck"
        duration="08/2022 - Present"
        items={[
          "Develop processes, procedures and supporting documentation to enhance cost, quality and customer service while ensuring safety and compliance with government regulations. Major drivers include productivity, material utilization, value engineering, lead time management, schedule attainment, and improved throughput.",
          "Coordinate and implement training initiatives to support manufacturing.",
          "Participate in process improvement teams.",
          "Specify and justify capital expenditures.",
          "Purchase and implement tooling and equipment to support daily operations.",
          "Provide technical support and troubleshooting for manufacturing processes and equipment.",
          "Recognize and propose design changes to improve manufacturability.",
          "Support and participate in value engineering initiatives.",
          "Identify and implement improvements to material utilization, cell layout and machinery efficiency.",
          "Provide summarized data to influence key management decisions relating to budgeting, staffing, and capacity planning. ",
          "Participate in Lean initiatives.",
        ]}
      />
      <div className="mt-2 page-text-xl">Education</div>
      <Education
        school="UC Irvine"
        degree="BS Aerospace Engineering"
        duration="09/2017 - 06/2021"
        items={[
          "Awards: College of Engineering Dean's Honor List, UCI Engineering Conference Most Creative Air Mover Delegate ",
          "Projects: CanSat (Design-Build-Fly), Commercial Aircraft Design, Propeller Design, Arduino Robot Vehicle, Engineering Conference",
          "Publications: 2021 UCI CanSat Winter Design Review, Carbon Catcher Design",
        ]}
      />
      <div className="mt-2 page-text-xl">Skills</div>
      <Skills
        items={[
          "Full Stack Development",
          "REST APIs",
          "TypeScript",
          "Python",
          "SQL",
          "NoSQL",
        ]}
      />
    </>
  );
}
