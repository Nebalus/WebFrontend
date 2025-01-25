import { useLocation } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@assets/components/shadcnui/breadcrumb";
import { Fragment } from "react";
import {APP_DASHBOARD_PATH} from "@/constants.ts";

export function DashboardDynamicBreadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x && x !== Array.from(APP_DASHBOARD_PATH).filter(char => char !== "/").join(''));

    const format = (s: string) => {
        return (s.charAt(0).toUpperCase() + s.slice(1)).replace("_", " ").replace("-", " ");
    };

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={APP_DASHBOARD_PATH}>
                        Dashboard
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {pathnames.map((name, index) => {
                    const routeTo = APP_DASHBOARD_PATH + `${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <Fragment key={routeTo}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>{format(name)}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={routeTo}>
                                        {format(name)}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
