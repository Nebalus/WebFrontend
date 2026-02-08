import {Skeleton} from "@nebalus/ui";
import {TableCell, TableRow} from "@nebalus/ui";

export default function TableSkeleton({ rows = 5, columns = 5 }:{ rows: number, columns: number}) {
    return Array.from({ length: rows }).map((_, i) => (
        <TableRow key={i}>
            {Array.from({ length: columns }).map((_, j) => (
                <TableCell key={j}>
                    <Skeleton className="h-5" />
                </TableCell>
            ))}
        </TableRow>
    ));
}