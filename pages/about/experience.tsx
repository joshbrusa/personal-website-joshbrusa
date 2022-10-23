import Head from "next/head";
import Experience from "../../components/about/Experience";

export default function Page() {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <div className="page-title">Experience</div>
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
    </>
  );
}
