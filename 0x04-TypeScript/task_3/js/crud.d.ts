import { RowID, RowElement } from "./interface";

declare function insertRow(row: RowElement): number;
declare function readRow(id: RowID): RowElement | null;
declare function updateRow(id: RowID, element: RowElement): boolean;
declare function deleteRow(id: RowID): void;
