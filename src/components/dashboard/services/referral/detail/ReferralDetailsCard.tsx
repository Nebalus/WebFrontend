import {ReferralCode} from "@/schemas/ReferralSchemas.ts";
import {Card} from "@assets/components/shadcnui/card.tsx";

export default function ReferralDetailsCard({ referralCode }: { referralCode: ReferralCode }) {

    return <>
        <Card className="rounded-none">
            {referralCode}
        </Card>
    </>
}