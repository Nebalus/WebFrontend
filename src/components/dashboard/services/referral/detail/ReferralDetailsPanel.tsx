import ReferralClickAnalyticsCard from "@/components/dashboard/services/referral/detail/ReferralClickAnalyticsCard.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {ReferralCodeSchema} from "@/schemas/ReferralSchemas.ts";
import {APP_DASHBOARD_PATH} from "@/constants.ts";
import {useEffect} from "react";
import ReferralDetailsCard from "@/components/dashboard/services/referral/detail/ReferralDetailsCard.tsx";
import {useReferralStore} from "@/stores/ReferralStore.ts";

export default function ReferralsDetailsBoard() {
    const navigate = useNavigate();
    const params = useParams<{ referral_code: string }>();
    const referralCode = ReferralCodeSchema.safeParse(params.referral_code);
    const {getReferralByCode} = useReferralStore();

    useEffect(() => {
        if (!referralCode.success) {
            navigate(APP_DASHBOARD_PATH + 'referrals');
            return;
        }
        (async () => {
            const referral = await getReferralByCode(referralCode.data);
            if(!referral) {
                navigate(APP_DASHBOARD_PATH + 'referrals');
                return;
            }
        })();
    }, [referralCode, navigate, getReferralByCode]);

    if (!referralCode.success) {
        return null;
    }

    return (
        <>
            <ReferralClickAnalyticsCard referralCode={referralCode.data}/>
            <ReferralDetailsCard referralCode={referralCode.data}/>
        </>
    );
}