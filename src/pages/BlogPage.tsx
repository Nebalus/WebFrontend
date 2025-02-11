import LandingPageNavBar from "@/components/landing/LandingPageNavBar";
import WorkInProgress from "@/components/WorkInProgress";
//import { useParams } from "react-router-dom";

export default function BlogPage() {
  //const blog_id = useParams<'blog_id'>().blog_id;

  return (
      <>
        <LandingPageNavBar />
        <WorkInProgress />
      </>
  )
}
