const express = require("express");
const jwt = require("jsonwebtoken");

const route = express();
//#region Require Section
const branch_router = require("./api/branch_routing");
const department_router = require("./api/department_route");
const job_level_router = require("./api/job_level_route");
const authen_router = require("./api/authen_route");
const category_router = require("./api/category_route");
const time_ticket_routing = require("./api/timeticket_trans_routing");
const position_routing = require("./api/position_routing");
const assessment_trans_router = require("./api/assessment_trans_routing");
const employee_router = require("./api/employee_routing");
const asset_category_routing = require("./api/asset_category_routing");
const assets_router = require("./api/assets_routing");
const company_category_routing = require("./api/company_category_routing");
const contact_router = require("./api/contact_routing");
const emergency_contact_routing = require("./api/emergency_contact_routing");
const education_router = require("./api/education_routing");
const nationality_routing = require("./api/nationality_routing");
const leave_trans_routing = require("./api/leave_trans_routing");
const certificate_trans_routing = require("./api/certificate_trans_routing");
const sparepart_routing = require("./api/spareparts_routing");
const customer_type_router = require("./api/customer_type_routing");
const employee_category_routing = require("./api/employee_category_routing");
const blacklist_routing = require("./api/blacklist_routing");
const status_routing = require("./api/status_routing");
const customer_branch_routing = require("./api/customer_branch_routing");
const unit_routing = require("./api/unit_routing");
const leave_trans_type_routing = require("./api/leave_trans_type_routing");
const contact_person_routing = require("./api/contact_person_routing");
const customer_routing = require("./api/customer_routing");
const customer_category_routing = require("./api/customer_category_routing");
const position_tarns_routing = require("./api/position_trans_routing");
const district_routing = require("./api/district_routing");
const warningtrans_routing = require("./api/warning_trans_routing");
const worktime_type_routing = require("./api/worktime_type_routing");
const backtowork_routing = require("./api/backtowork_routing");
const training_tarns_routing = require("./api/training_trans_routing");
const training_tarns_detail_routing = require("./api/training_trans_detail_routing");
const salary_routing = require("./api/salary_routing");
const country_routing = require("./api/country_routing");
const province_routing = require("./api/province_routing");
const subDistrict_routing = require("./api/sub_district_routing");
const access_right_routing = require("./api/access_rights_routing");
const register_station_routing = require("./api/register_station_routing");
const role_ronting = require("./api/role_routing");
const timeticket_routing = require("./api/timeticket_routing");
const employee_status_routing = require("./api/employee_status_routing");
const certificate_type_routing = require("./api/certificate_type_routing");
const assessment_trans_type_routing = require("./api/assessment_trans_type_routing");
const document_status_routing = require("./api/document_status_routing");
const contact_type_routing = require("./api/contact_type_routing");
const job_description_routing = require("./api/job_description_routing");
const welfare_routing = require("./api/welfare_routing");
const user_routing = require("./api/user_routing");
const attachment_routing = require("./api/attachment_routing");
const suplier_routing = require("./api/suplier_routing");
const supplier_branch_routing = require("./api/supplier_branch_routing");
const supplier_category_routing = require("./api/supplier_category_routing");
const resign_routing = require("./api/resign_routing");
const supplier_routing = require("./api/supplier_routing");
const access_routing = require("./api/access_routing");
const subscribe_trans_routing = require("./api/subscribe_trans_routing");
const probation_trans_routing = require("./api/probation_trans_routing");
const salarytrans_routing = require("./api/salary_trans_routing");
const subscribe_routing = require("./api/subscribe_routing");
const feature_routing = require("./api/feature_routing");
const dashboard_routing = require("./api/dashboard_routing");
const overtime_routing = require("./api/overtime_routing");
const job_trans_routing = require("./api/job_trans_routing");
const job_routing = require("./api/job_routing");
const transfer_routing = require("./api/transfer_trans_routing");
const bookmarkdocument_template = require("./api/bookmarkdocument_template_routing");
const RevisionTimeTrans_routing = require("./api/revision_time_trans_routing");
const inventorytransection_routing = require("./api/inventorytransection_routing");
const part_routing = require("./api/part_routing");
const warehouse = require("./api/warehouse_routing");
const item_category_tabel_routing = require("./api/item_category_tabel_routing");
const stockcut_routing = require("./api/stockcut_routing");
const stockin_routing = require("./api/stockin_routing");
const stockout_routing = require("./api/stockout_routing");
const stockreturn_routing = require("./api/stockreturn_routing");
const workexperience_routing = require("./api/work_experiencen_routing");
const legalPunishment_routing = require("./api/legal_punishment_routing");
const book_bank_routing = require("./api/book_bank_routing");
const bank_routing = require("./api/bank_routing");
const relative = require("./api/relative_routing");
const company_routing = require("./api/company_routing");
const worktime_trans_routing = require("./api/worktime_trans_routing");
const reject_trans_routing = require("./api/reject_trans_routing");
const legalPunishmentDetail_routing = require("./api/legal_punishment_detail_routing");
const purchase = require("./api/purchase_line_routing");
const router = require("./api/stockcut_routing");
const purchase_header = require("./api/purchase_header_routing");
const punishment_trans_routing = require("./api/punishment_trans_routing");
const punishment_type_routing = require("./api/punishment_type_routing");
const social_security_routing = require("./api/social_security_routing");
//#endregion
//#region
route.use("/api/branch", authenticateToken, branch_router);
route.use("/api/department", authenticateToken, department_router);
route.use("/api/JobLevel", authenticateToken, job_level_router);
route.use("/api/auth", authen_router);
route.use("/api/position", authenticateToken, position_routing);
route.use("/api/AssessmentTrans", authenticateToken, assessment_trans_router);
route.use("/api/category", authenticateToken, category_router);
route.use("/api/TimeticketTrans", authenticateToken, time_ticket_routing);
route.use("/api/employee", authenticateToken, employee_router);
route.use("/api/ResignStatusEmployee", authenticateToken, resign_routing);
route.use("/api/AssetCategory", authenticateToken, asset_category_routing);
route.use("/api/assets", authenticateToken, assets_router);
route.use("/api/CompanyCategory", authenticateToken, company_category_routing);
route.use("/api/contact", authenticateToken, contact_router);
route.use("/api/CertificateType", authenticateToken, certificate_type_routing);
route.use("/api/ContactType", authenticateToken, contact_type_routing);
route.use("/api/Attachment", authenticateToken, attachment_routing);
route.use("/api/Suplier", authenticateToken, suplier_routing);
route.use(
  "/api/EmergencyContact",
  authenticateToken,
  emergency_contact_routing
);
route.use("/api/Education", authenticateToken, education_router);
route.use("/api/Nationality", authenticateToken, nationality_routing);
route.use("/api/BlackList", authenticateToken, blacklist_routing);
route.use("/api/PositionTrans", authenticateToken, position_tarns_routing);
route.use("/api/LeaveTransType", authenticateToken, leave_trans_type_routing);
route.use("/api/LeaveTrans", authenticateToken, leave_trans_routing);
route.use("/api/PositionTarns", authenticateToken, position_tarns_routing);
route.use("/api/LeaveTransType", authenticateToken, leave_trans_type_routing);
route.use("/api/ContactPerson", authenticateToken, contact_person_routing);
route.use("/api/Customer", authenticateToken, customer_routing);
route.use("/api/CustomerBranch", authenticateToken, customer_branch_routing);
route.use("/api/District", authenticateToken, district_routing);
route.use("/api/RegisterStation", authenticateToken, register_station_routing);
route.use("/api/District", authenticateToken, district_routing);
route.use("/api/WarningTrans", authenticateToken, warningtrans_routing);
route.use("/api/WorktimeType", authenticateToken, worktime_type_routing);
route.use("/api/BackToWork", authenticateToken, backtowork_routing);
route.use(
  "/api/SupplierCategory",
  authenticateToken,
  supplier_category_routing
);
route.use(
  "/api/SupplierCategory",
  authenticateToken,
  supplier_category_routing
);
route.use("/api/SupplierBranch", authenticateToken, supplier_branch_routing);
route.use("/api/Supplier", authenticateToken, supplier_routing);
route.use(
  "/api/CustomerCategory",
  authenticateToken,
  customer_category_routing
);
route.use("/api/PositionTarns", authenticateToken, position_tarns_routing);
route.use("/api/Spareparts", authenticateToken, sparepart_routing);
route.use("/api/CustomerType", authenticateToken, customer_type_router);
route.use("/api/Unit", authenticateToken, unit_routing);
route.use(
  "/api/EmployeeCategory",
  authenticateToken,
  employee_category_routing
);
route.use("/api/Status", authenticateToken, status_routing);
route.use(
  "/api/CertificateTrans",
  authenticateToken,
  certificate_trans_routing
);

route.use(
  "/api/PositionTarns",
  authenticateToken,
  training_tarns_detail_routing
);
route.use("/api/TrainingTrans", authenticateToken, training_tarns_routing);
route.use(
  "/api/TrainingTransDetail",
  authenticateToken,
  training_tarns_detail_routing
);
route.use("/api/Salary", authenticateToken, salary_routing);
route.use("/api/country", authenticateToken, country_routing);
route.use("/api/province", authenticateToken, province_routing);
route.use("/api/district/", authenticateToken, district_routing);
route.use("/api/subdistrict", authenticateToken, subDistrict_routing);
route.use("/api/AccessRights", authenticateToken, access_right_routing);
route.use("/api/role", authenticateToken, role_ronting);
route.use("/api/Timeticket", authenticateToken, timeticket_routing);
route.use("/api/EmployeeStatus", authenticateToken, employee_status_routing);
route.use(
  "/api/AssessmentTransType",
  authenticateToken,
  assessment_trans_type_routing
);
route.use("/api/DocumentStatus", authenticateToken, document_status_routing);
route.use("/api/JobDescription", authenticateToken, job_description_routing);
route.use("/api/User", authenticateToken, user_routing);
route.use("/api/Welfare", authenticateToken, welfare_routing);
route.use("/api/Employee", authenticateToken, employee_router);
route.use("/api/Resign", authenticateToken, resign_routing);
route.use("/api/Access", authenticateToken, access_routing);
route.use("/api/SubscribeTrans", authenticateToken, subscribe_trans_routing);
route.use("/api/Probationtrans", authenticateToken, probation_trans_routing);
route.use("/api/SalaryTrans", authenticateToken, salarytrans_routing);
route.use("/api/Subscribe", authenticateToken, subscribe_routing);
route.use("/api/Feature", authenticateToken, feature_routing);
route.use("/api/dashboard", authenticateToken, dashboard_routing);
route.use("/api/Overtime", authenticateToken, overtime_routing);
route.use("/api/JobTrans", authenticateToken, job_trans_routing);
route.use("/api/Job", authenticateToken, job_routing);
route.use("/api/TransferTrans", authenticateToken, transfer_routing);
route.use(
  "/api/Inventorytransection",
  authenticateToken,
  inventorytransection_routing
);
route.use("/api/Part", authenticateToken, part_routing);
route.use("/api/Stockcut", authenticateToken, stockcut_routing);
route.use("/api/Stockin", authenticateToken, stockin_routing);
route.use("/api/Stockout", authenticateToken, stockout_routing);
route.use("/api/Stockreturn", authenticateToken, stockreturn_routing);
route.use("/api/Bookbank", authenticateToken, book_bank_routing);
route.use("/api/Bank", authenticateToken, bank_routing);
route.use(
  "/api/ItemCategoryTabel",
  authenticateToken,
  item_category_tabel_routing
);
route.use(
  "/api/BookmarkdocumentTemplate",
  authenticateToken,
  bookmarkdocument_template
);

route.use(
  "/api/RevisionTimeTrans",
  authenticateToken,
  RevisionTimeTrans_routing
);
route.use("/api/warehouse", authenticateToken, warehouse);
route.use("/api/WorkExperience", authenticateToken, workexperience_routing);
route.use("/api/LegalPunishment", authenticateToken, legalPunishment_routing);
route.use("/api/relative", authenticateToken, relative);
route.use("/api/Company", authenticateToken, company_routing);
route.use("/api/worktimetrans", authenticateToken, worktime_trans_routing);
route.use(
  "/api/LegalPunishmentDetail",
  authenticateToken,
  legalPunishmentDetail_routing
);
route.use("/api/PurchaseLine", authenticateToken, purchase);
route.use("/api/PurchaseHeader", authenticateToken, purchase_header);

route.use("/api/RejectTrans", authenticateToken, reject_trans_routing);
route.use(
  "/api/Copy-Work-time-trans",
  authenticateToken,
  worktime_trans_routing
);
route.use(
  "/api/Copy-Work-time-trans",
  authenticateToken,
  worktime_trans_routing
);
route.use("/api/PunishmentTrans", authenticateToken, punishment_trans_routing);
route.use("/api/PunishmentType", authenticateToken, punishment_type_routing);
route.use("/api/SocialSecurity", authenticateToken, social_security_routing);
//#endregion
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (authHeader == null) {
    throw new Error();
  }
  const token = authHeader.split(" ")[0];

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}
module.exports = route;
