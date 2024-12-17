import ReferralAnalyticsCard from "@/components/dashboard/services/referral/ReferralAnalyticsCard";
import ReferralsCard from "@/components/dashboard/services/referral/ReferralsCard";

export default function ReferralsBoard() {
    return (
        <>
            <ReferralAnalyticsCard></ReferralAnalyticsCard>
            <ReferralsCard></ReferralsCard>
        </>
    );
}