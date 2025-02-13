import {useReferralStore} from "@/stores/ReferralStore.ts";
import {useForm} from "react-hook-form";
import {CreateReferralForm, CreateReferralFormSchema} from "@/schemas/Forms/ReferralFormSchemas.ts";
import {zodResolver} from "@hookform/resolvers/zod";
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
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@assets/components/shadcnui/form.tsx";
import ReferralsTable from "@/components/dashboard/services/referral/ReferralsTable.tsx";
import {Input} from "@assets/components/shadcnui/input.tsx";
import {Checkbox} from "@assets/components/shadcnui/checkbox.tsx";
import {toast} from "sonner";

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
        console.log(data);
        toast("Referral created", {
            description: "The referral has been created successfully"
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
                            <Button className="bg-green-600 hover:bg-green-500" variant="outline" >
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
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="shadcn" {...field} value={field.value ?? ""}/>
                                                </FormControl>
                                                <FormDescription>
                                                    This is your public display name.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="pointer"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="shadcn" {...field} value={field.value ?? ""}/>
                                                </FormControl>
                                                <FormDescription>
                                                    This is your public display name.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="disabled"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                                </FormControl>
                                                <FormDescription>
                                                    Is this referral disabled?
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <DialogFooter>
                                        <Button type="submit" className="bg-green-600">Create</Button>
                                    </DialogFooter>
                                    <Button type="submit" className="bg-green-600">Create</Button>
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