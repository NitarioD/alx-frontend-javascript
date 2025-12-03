import { RowID, RowElement } from "./interface";

declare function insertRow(row: RowElement): RowID;
declare function readRow(id: RowID): RowElement | null;
declare function updateRow(id: RowID, element: RowElement): boolean;
declare function deleteRow(id: RowID): boolean;
