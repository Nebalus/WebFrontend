import ReferralClickAnalyticsCard from "@/components/dashboard/services/referral/details/ReferralClickAnalyticsCard.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {ReferralCodeSchema} from "@/schemas/ReferralSchemas.ts";
import {APP_DASHBOARD_PATH} from "@/constants.ts";
import {useEffect} from "react";

export default function ReferralsDetailsBoard() {
    const navigate = useNavigate();
    const referralCode = ReferralCodeSchema.safeParse(useParams<{ referral_code: string }>().referral_code);

    useEffect(() => {
        if (!referralCode.success) {
            navigate(APP_DASHBOARD_PATH + 'referrals');
        }
    }, [referralCode, navigate]);

    if (!referralCode.success) {
        return null;
    }

    return (
        <>
            <ReferralClickAnalyticsCard referralCode={referralCode.data}/>
        </>
    );
}