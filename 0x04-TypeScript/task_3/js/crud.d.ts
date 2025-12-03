import { RowID, RowElement } from "./interface";

declare function insertRow(row: RowElement): number;
declare function readRow(id: RowID): RowElement | null;
declare function updateRow(rowId: RowID, row: RowElement): boolean;
declare function deleteRow(rowId: RowID): void;
