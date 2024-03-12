/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../helpers";

type Props = {
    className: string;
    innerPadding?: string;
};

const Pagination: React.FC<Props> = ({ className, innerPadding = "" }) => {
    return (
        <div >
            <ul className="pagination">
                <li className="page-item previous disabled">
                    <a href="#" className="page-link">
                        <i className="previous"></i>
                    </a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">
                        1
                    </a>
                </li>
                <li className="page-item active">
                    <a href="#" className="page-link">
                        2
                    </a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">
                        3
                    </a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">
                        4
                    </a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">
                        5
                    </a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">
                        6
                    </a>
                </li>
                <li className="page-item next">
                    <a href="#" className="page-link">
                        <i className="next"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export { Pagination };
