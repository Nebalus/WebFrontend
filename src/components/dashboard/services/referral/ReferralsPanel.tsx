import {useReferralStore} from "@/stores/ReferralStore.ts";
import {useForm} from "react-hook-form";
import {CreateReferralForm, CreateReferralFormSchema} from "@/schemas/Forms/ReferralFormSchemas.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "@assets/hooks/use-toast.ts";
import {Card, CardContent, CardHeader, CardTitle} from "@assets/components/shadcnui/card.tsx";
import {Button} from "@assets/components/shadcnui/button.tsx";
import {Plus, RefreshCcw} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@assets/components/shadcnui/dialog.tsx";
import {Form} from "@assets/components/shadcnui/form.tsx";
import ReferralsTable from "@/components/dashboard/services/referral/ReferralsTable.tsx";

export default function ReferralsPanel() {
    const {hydrateReferrals} = useReferralStore();

    const form = useForm<CreateReferralForm>({
        resolver: zodResolver(CreateReferralFormSchema),
        defaultValues: {
            name: "TEST",
            pointer: "https://nebalus.dev",
            disabled: false
        },
    })

    function onSubmit(data: CreateReferralForm) {
        console.log("TEST");

        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
            ),
        })
    }

    return (
        <Card>
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                    <CardTitle>Your Referrals</CardTitle>
                </div>
                <div>
                    <Button className="mr-1" variant="outline" onClick={() => hydrateReferrals()}>
                        <RefreshCcw/>
                    </Button>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-green-600 hover:bg-green-500" variant="outline">
                                <Plus/>
                            </Button>
                        </ DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Create a referral</DialogTitle>
                                <DialogDescription>
                                    Here you can create a new referral
                                </DialogDescription>
                            </DialogHeader>
                            <Form>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                                    <DialogFooter>
                                        <Button type="submit" className="bg-green-600">Create</Button>
                                    </DialogFooter>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ReferralsTable></ReferralsTable>
            </CardContent>
        </Card>
    )
}