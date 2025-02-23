import {useReferralStore} from "@/stores/ReferralStore.ts";
import {Card, CardContent, CardHeader, CardTitle} from "@assets/components/shadcnui/card.tsx";
import {Button} from "@assets/components/shadcnui/button.tsx";
import {Plus, RefreshCcw} from "lucide-react";
import ReferralsDataTable from "@/components/dashboard/services/referral/ReferralsDataTable.tsx";
import ReferralCreateDialog from "@/components/dashboard/services/referral/dialog/ReferralCreateDialog.tsx";

export default function ReferralsPanel() {
    const {hydrateReferrals} = useReferralStore();

    return (
        <Card className="rounded-none">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                    <CardTitle>Your Referrals</CardTitle>
                </div>
                <div className="flex gap-1 flex-row">
                    <Button className="mr-1" variant="outline" onClick={() => hydrateReferrals()}>
                        <RefreshCcw/>
                    </Button>
                    <ReferralCreateDialog>
                        <Button className="bg-green-600 hover:bg-green-500" variant="outline" >
                            <Plus/>
                        </Button>
                    </ReferralCreateDialog>
                </div>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ReferralsDataTable></ReferralsDataTable>
            </CardContent>
        </Card>
    )
}