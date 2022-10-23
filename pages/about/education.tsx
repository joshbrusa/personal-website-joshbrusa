import Head from "next/head";
import Education from "../../components/about/Education";

export default function Page() {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <div className="page-title">Education</div>
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
    </>
  );
}
