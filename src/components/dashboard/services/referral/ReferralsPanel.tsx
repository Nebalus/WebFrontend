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
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@assets/components/shadcnui/form.tsx";
import ReferralsDataTable from "@/components/dashboard/services/referral/ReferralsDataTable.tsx";
import {Input} from "@assets/components/shadcnui/input.tsx";
import {Checkbox} from "@assets/components/shadcnui/checkbox.tsx";
import {toast} from "sonner";
import {DialogClose} from "@radix-ui/react-dialog";
import { APP_FRONTEND_FULL_PATH } from "@/constants";

export default function ReferralsPanel() {
    const {hydrateReferrals, createReferral} = useReferralStore();

    const form = useForm<CreateReferralForm>({
        resolver: zodResolver(CreateReferralFormSchema),
        defaultValues: {
            name: "",
            pointer: "",
            disabled: false
        },
    })

    function onSubmit(data: CreateReferralForm) {
        createReferral(data);
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
                                                <FormLabel>Referral Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Example Referral" {...field} value={field.value ?? ""} type="text"/>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="pointer"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Pointer</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={APP_FRONTEND_FULL_PATH} {...field} value={field.value ?? ""} type="url"/>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="disabled"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Disabled</FormLabel>
                                                <FormControl>
                                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button type="submit" className="bg-green-600">Create</Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ReferralsDataTable></ReferralsDataTable>
            </CardContent>
        </Card>
    )
}