import {toast} from "sonner";
import {Button} from "@assets/components/shadcnui/button.tsx";

export default function Dashboard() {
    return (
        <>
            DASHBOARD
            <Button
                variant="outline"
                onClick={() =>
                    toast("Test event has been created", {
                        description: new Date().toISOString(),
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                    })
                }
            >
                Show Toast
            </Button>
        </>
    );
}