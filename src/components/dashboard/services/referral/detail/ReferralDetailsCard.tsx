import {Referral, ReferralCode} from "@/schemas/ReferralSchemas.ts";
import {Card, CardContent, CardFooter, CardHeader} from "@assets/components/shadcnui/card.tsx";
import {useReferralStore} from "@/stores/ReferralStore.ts";
import {useEffect, useState} from "react";
import {Button} from "@assets/components/shadcnui/button.tsx";
import ReferralDeleteConfirmationDialog
    from "@/components/dashboard/services/referral/dialog/ReferralDeleteConfirmationDialog.tsx";

export default function ReferralDetailsCard({ referralCode }: { referralCode: ReferralCode }) {
    const {referrals, getReferralByCode} = useReferralStore();
    const [referral, setReferral] = useState<Referral>();

    useEffect(() => {
        (async () => {
            const referral = await getReferralByCode(referralCode);
            if(referral) {
                setReferral(referral);
                return;
            }
        })();
    }, [getReferralByCode, referralCode, referrals, setReferral]);

    return <>
        {referral != undefined ?
            <Card className="rounded-none">
                <CardHeader></CardHeader>
                <CardContent>
                    <p>{referral.referral_id}</p>
                    <p>{referral.created_at}</p>
                    <p>{referral.code}</p>
                    <p>{referral.name}</p>
                    <p>{referral.disabled ? "YES" : "NO"}</p>
                    <p>{referral.updated_at}</p>
                    <p>{referral.url}</p>
                </CardContent>
                <CardFooter className="ml-auto gap-3">
                    <ReferralDeleteConfirmationDialog referral={referral}>
                        <Button variant="destructive">Delete</Button>
                    </ReferralDeleteConfirmationDialog>
                    <Button variant="default">Save</Button>
                </CardFooter>
            </Card>
        : null}
    </>
}