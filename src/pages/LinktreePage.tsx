import LandingPageNavBar from "@/components/landing/LandingPageNavBar";
import WorkInProgress from "@/components/WorkInProgress";
import { OWNER_USERNAME } from "@/constants";
import { useParams } from "react-router-dom";

export default function LinktreePage() {
  const username = useParams<'username'>().username?.toLowerCase();

  return (
      <>
        {username == OWNER_USERNAME ? <LandingPageNavBar /> : null}
        <WorkInProgress />
      </>
  )
}
