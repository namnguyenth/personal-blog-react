/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../helpers";
import { Pagination } from "../pagination/pagination";

type Props = {
  className: string;
  innerPadding?: string;
};

const TablesList: React.FC<Props> = ({ className, innerPadding = "" }) => {
  return (
    <div className={`card ${className}`}>
      {/* <!--begin::Header--> */}
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            Campaign Leaders
          </span>
          <span className="text-muted mt-2 fw-bold fs-6">890,344 Sales</span>
        </h3>
        <div
          className="card-toolbar mr-auto input-group input-group-solid w-250px "
        >
          <span className="input-group-text" id="basic-addon1">
            <KTSVG
              className="svg-icon-1 svg-icon-dark"
              path="/media/icons/duotone/General/Search.svg"
            />
          </span>
          <input type="text" className="form-control ps-0 py-4 h-auto" placeholder="Search"
          />
        </div>
        {/* <input type="text" className="card-toolbar mr-auto form-control form-control-solid w-250px" placeholder="Search..."></input> */}
        <div className="card-toolbar">
          <ul className="nav nav-pills nav-pills-sm nav-light">
            <li className="nav-item">
              <a
                className="btn btn-primary nav-link py-2 px-4 fw-bolder me-2 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_1"
              >
                Export
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-primary nav-link py-2 px-4 fw-bolder me-2 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_2"
              >
                New Record
              </a>
            </li>

          </ul>
        </div>
      </div>
      {/* <!--end::Header--> */}

      {/* <!--begin::Body--> */}
      <div className="card-body pt-2 pb-0 mt-n3">
        <div className="tab-content mt-5" id="myTabTables1">
          {/* <!--begin::Tap pane--> */}
          <div className="py-5">
            <table className="table table-row-dashed table-row-gray-300 gy-7">
              <thead>
                <tr className="fw-bolder fs-6 text-gray-800">
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                  <td>
                    <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" title="Edit details">
                      <i className="fas fa-edit fs-3"></i>
                    </a>
                    <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" title="Edit details">
                      <i className="fas fa-trash fs-3"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011/07/25</td>
                  <td>$170,750</td>
                  <td>
                    <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" title="Edit details">
                      <i className="fas fa-edit fs-3"></i>
                    </a>
                    <a href="javascript:;" className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" title="Edit details">
                      <i className="fas fa-trash fs-3"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!--end::Tap pane--> */}
        </div>
      </div>

      {/* <!--begin::Footer--> */}
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
          </span>
          <span className="text-muted mt-2 fw-bold fs-6"></span>
        </h3>
        <div className="card-toolbar">
          <ul className="nav nav-pills nav-pills-sm nav-light">
            <Pagination className="" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export { TablesList };
