import {ReactElement, useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@assets/components/shadcnui/dialog.tsx";
import {Button} from "@assets/components/shadcnui/button.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@assets/components/shadcnui/form.tsx";
import {Input} from "@assets/components/shadcnui/input.tsx";
import {APP_FRONTEND_FULL_PATH} from "@/constants.ts";
import {Checkbox} from "@assets/components/shadcnui/checkbox.tsx";
import {useForm} from "react-hook-form";
import {CreateReferralForm, CreateReferralFormSchema} from "@/schemas/Forms/ReferralFormSchemas.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {ReferralStoreActionResponse} from "@/schemas/ZustandSchemas.ts";
import {toast} from "sonner";
import {useReferralStore} from "@/stores/ReferralStore.ts";

export interface ReferralCreateDialogProps {
    children: ReactElement;
}

export default function ReferralCreateDialog({ children }: ReferralCreateDialogProps) {
    const {createReferral} = useReferralStore();
    const [createReferralModalOpen, setCreateReferralModalOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    const form = useForm<CreateReferralForm>({
        resolver: zodResolver(CreateReferralFormSchema),
        defaultValues: {
            name: "",
            url: "",
            disabled: false
        },
    })

    async function onSubmit(data: CreateReferralForm) {
        setIsCreating(true);
        await createReferral(data)
            .then((test: ReferralStoreActionResponse) => {
                setIsCreating(false);
                if(test.success) {
                    form.reset();
                    setCreateReferralModalOpen(false);
                    toast("Referral created", {
                        className: "",
                        description: ""
                    })
                    return;
                }

                toast("An Error occurred while create an Referral", {
                    className: "bg-red-500",
                    description: test.error_message
                })
            });
    }

    return (
        <span onClick={(event) => event.stopPropagation()}>
            <Dialog open={createReferralModalOpen} onOpenChange={setCreateReferralModalOpen}>
                <DialogTrigger asChild>
                    {children}
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
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Referral Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Example Referral" {...field} value={field.value ?? ""}
                                                   type="text"/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="url"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Url</FormLabel>
                                        <FormControl>
                                            <Input placeholder={APP_FRONTEND_FULL_PATH} {...field}
                                                   value={field.value ?? ""} type="url"/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="disabled"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Disabled</FormLabel>
                                        <FormControl>
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <Button type="submit" className="bg-green-600"
                                        disabled={isCreating}> {isCreating ? "Creating" : "Create"} </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </span>
    );
}