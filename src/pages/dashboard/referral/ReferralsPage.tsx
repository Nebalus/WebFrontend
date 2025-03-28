import {useReferralStore} from "@/stores/ReferralStore.ts";
import {Card, CardContent, CardHeader, CardTitle} from "@assets/components/shadcnui/card.tsx";
import {Button} from "@assets/components/shadcnui/button.tsx";
import {Plus, RefreshCcw} from "lucide-react";
import ReferralsDataTable from "@/features/referral/ReferralsDataTable.tsx";
import ReferralCreateModal from "@/features/referral/modal/ReferralCreateModal.tsx";

export default function ReferralsPage() {
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
                    <ReferralCreateModal>
                        <Button className="bg-green-600 hover:bg-green-500" variant="outline" >
                            <Plus/>
                        </Button>
                    </ReferralCreateModal>
                </div>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ReferralsDataTable></ReferralsDataTable>
            </CardContent>
        </Card>
    )
}