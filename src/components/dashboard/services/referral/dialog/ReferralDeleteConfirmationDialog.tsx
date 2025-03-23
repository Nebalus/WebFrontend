import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@assets/components/shadcnui/dialog.tsx";
import {Button} from "@assets/components/shadcnui/button.tsx";
import {ReactElement, useState} from "react";
import {useReferralStore} from "@/stores/ReferralStore.ts";
import {Referral} from "@/schemas/ReferralSchemas.ts";
import {toast} from "sonner";

export interface ReferralDeleteConfirmationDialogProps {
    children: ReactElement;
    referral: Referral;
}

export default function ReferralDeleteConfirmationDialog({ children, referral }: ReferralDeleteConfirmationDialogProps) {
    const {deleteReferral} = useReferralStore();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <span onClick={(event) => event.stopPropagation()}>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild onClick={() => setIsOpen(true)}>
                    {children}
                </ DialogTrigger>
                <DialogContent className="sm:max-w-[425px]" onClick={(event) => event.stopPropagation()}>
                    <DialogHeader>
                        <DialogTitle>Delete {referral.label ? referral.label : "a referral"}</DialogTitle>
                        <DialogDescription>
                            Please confirm that you want to delete {referral.label ? referral.label : "this referral"}
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button variant="destructive" onClick={() => {
                            setIsDeleting(true);
                            deleteReferral(referral.code)
                            .then((bool) => {
                                setIsDeleting(false);
                                if (bool) {
                                    setIsOpen(false);
                                    toast("Referral Deleted",{
                                        description: "The referral has been deleted",
                                    });
                                    return;
                                }
                                toast("Failed to delete referral", {
                                    description: "An error occurred while deleting the referral"
                                });
                            });
                        }}>{isDeleting ? "Deleting" : "Delete"}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </span>
    );
}