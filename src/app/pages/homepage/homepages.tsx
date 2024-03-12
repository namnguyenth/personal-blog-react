import React from "react";
import { EngageWidget5 } from "../../../_start/partials/widgets/engage/EngageWidget5";
import { TablesList } from "../../../_start/partials/widgets/tables-list/TablesList";


export function HomePages() {
    return <>
        {/* begin::Row */}
        <div className="row g-0 g-xl-5 g-xxl-12">
            <div className="col-xl-12">
                <TablesList className="card-stretch mb-5 mb-xxl-12" />
            </div>
        </div>
        {/* end::Row */}
    </>
}