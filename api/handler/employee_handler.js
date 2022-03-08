const mTools = require("../shared/tools/tools");
const mAuth = require("../services/authen_services");
let getIndexCreate = (req) => {
  try {
    var data = toCreateModel(req);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getIndexEdit = (req) => {
  try {
    var data = toEditModel(req);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getIndexEditSalary = (req) => {
  try {
    var data = toEditSalaryModel(req);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getIndexEditBacktowork = (req) => {
  try {
    var data = toEditModelBacktowork(req);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getIndexEditComplate = (req) => {
  try {
    var data = toEditModelComplate(req);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysCreate = (req) => {
  try {
    let keyList = [];
    keyList.push("employee_code");
    keyList.push("nick_name");
    keyList.push("title");
    keyList.push("first_name");
    keyList.push("last_name");
    keyList.push("marital_status");
    keyList.push("children");
    keyList.push("birth_date");
    keyList.push("gender");
    keyList.push("nationality_uuid");
    keyList.push("card_id");
    keyList.push("phone_number");
    keyList.push("email");
    keyList.push("current_address");
    keyList.push("contact_uuid");
    keyList.push("emergency_contact_uuid");
    keyList.push("address_uuid");
    keyList.push("job_level_uuid");
    keyList.push("position_uuid");
    keyList.push("department_uuid");
    keyList.push("employee_status");
    keyList.push("salary_uuid");
    keyList.push("start_date");
    keyList.push("remark");
    keyList.push("welfare_uuid");
    keyList.push("social_security_uuid");
    keyList.push("company_uuid");
    keyList.push("branch_uuid");
    keyList.push("is_active");
    keyList.push("create_by");
    keyList.push("create_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    keyList.push("employee_type");
    keyList.push("recommender_employee_uuid");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysEdit = (req) => {
  try {
    let keyList = [];
    keyList.push("employee_uuid");
    keyList.push("employee_code");
    keyList.push("nick_name");
    keyList.push("title");
    keyList.push("first_name");
    keyList.push("last_name");
    keyList.push("marital_status");
    keyList.push("children");
    keyList.push("birth_date");
    keyList.push("gender");
    keyList.push("nationality_uuid");
    keyList.push("card_id");
    keyList.push("phone_number");
    keyList.push("email");
    keyList.push("current_address");
    keyList.push("contact_uuid");
    keyList.push("emergency_contact_uuid");
    keyList.push("address_uuid");
    keyList.push("job_level_uuid");
    keyList.push("position_uuid");
    keyList.push("department_uuid");
    keyList.push("employee_status");
    keyList.push("salary_uuid");
    keyList.push("start_date");
    keyList.push("remark");
    keyList.push("welfare_uuid");
    keyList.push("social_security_uuid");
    keyList.push("update_by");
    keyList.push("update_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    keyList.push("employee_type");
    keyList.push("recommender_employee_uuid");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};

let getKeysEditSalary = (req) => {
  try {
    let keyList = [];
    keyList.push("employee_uuid");
    keyList.push("salary_uuid");
    keyList.push("update_by");
    keyList.push("update_date");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysEditBacktowork = (req) => {
  try {
    let keyList = [];
    keyList.push("employee_uuid");
    keyList.push("employee_status");
    keyList.push("update_by");
    keyList.push("update_date");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysEditComplate = (req) => {
  try {
    let keyList = [];
    keyList.push("employee_uuid");
    keyList.push("employee_status");
    keyList.push("update_by");
    keyList.push("update_date");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getRoWAuth = (list) => {
  list.forEach((element) => {
    element["rowAuthorize"] = 4;
  });
};
let getSqlCreate = (req) => {
  try {
    const keys = getKeysCreate(req);
    const index = getIndexCreate(req);
    return (
      "INSERT INTO employee_table (" +
      keys +
      ") values (" +
      index +
      ") RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDelete = (model) => {
  return "UPDATE employee_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE employee_uuid = $4 RETURNING *";
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_employee_table_dropdown " + mTools.getCondition(req)
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlEdit = (req) => {
  try {
    const keys = getKeysEdit(req);
    const index = getIndexEdit(req);
    return (
      "UPDATE employee_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE employee_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlEditSalary = (req) => {
  try {
    const keys = getKeysEditSalary(req);
    const index = getIndexEditSalary(req);
    return (
      "UPDATE employee_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE employee_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlEditBacktowork = (req) => {
  try {
    const keys = getKeysEditBacktowork(req);
    const index = getIndexEditBacktowork(req);
    return (
      "UPDATE employee_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE employee_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlEditComplate = (req) => {
  try {
    const keys = getKeysEditComplate(req);
    const index = getIndexEditComplate(req);
    return (
      "UPDATE employee_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE employee_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return "SELECT * FROM vw_employee_table_list " + mTools.getCondition(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlListResign = (req) => {
  try {
    return (
      "SELECT * FROM vw_employee_resign_table_list " + mTools.getCondition(req)
    );
  } catch (e) {
    throw new Error(e.message);
  }
};

let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_employee_table_item WHERE employee_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlViewToDoListEmp = (model) => {
  try {
    return "SELECT * FROM vw_employee_table_todolist WHERE employee_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.employee_code);
    valuelist.push(data.nick_name);
    valuelist.push(data.title);
    valuelist.push(data.first_name);
    valuelist.push(data.last_name);
    valuelist.push(data.marital_status);
    valuelist.push(data.children);
    valuelist.push(mTools.toDateCurrectFormat(data.birth_date));
    valuelist.push(data.gender);
    valuelist.push(data.nationality_uuid);
    valuelist.push(data.card_id);
    valuelist.push(data.phone_number);
    valuelist.push(data.email);
    valuelist.push(data.current_address);
    valuelist.push(data.contact_uuid);
    valuelist.push(data.emergency_contact_uuid);
    valuelist.push(data.address_uuid);
    valuelist.push(data.job_level_uuid);
    valuelist.push(data.position_uuid);
    valuelist.push(data.department_uuid);
    valuelist.push(data.employee_status);
    valuelist.push(data.salary_uuid);
    valuelist.push(mTools.toDateCurrectFormat(data.start_date));
    valuelist.push(data.remark);
    valuelist.push(data.welfare_uuid);
    valuelist.push(data.social_security_uuid);
    valuelist.push(data.company_uuid);
    valuelist.push(data.branch_uuid);
    valuelist.push(data.is_active);
    valuelist.push(data.create_by);
    valuelist.push(data.create_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    valuelist.push(data.employee_type);
    valuelist.push(data.recommender_employee_uuid);
    return valuelist;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesDelete = (req) => {
  try {
    const update_date = new Date().toISOString();
    const key = req.body.primaryKey;
    let valuelist = [];
    valuelist.push(false);
    valuelist.push(mAuth.getUserNameFromToken(req));
    valuelist.push(update_date);
    valuelist.push(key);
    return valuelist;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesEdit = (model) => {
  try {
    var data = toEditModel(model);
    let valuelist = [];
    valuelist.push(data.employee_uuid);
    valuelist.push(data.employee_code);
    valuelist.push(data.nick_name);
    valuelist.push(data.title);
    valuelist.push(data.first_name);
    valuelist.push(data.last_name);
    valuelist.push(data.marital_status);
    valuelist.push(data.children);
    valuelist.push(mTools.toDateCurrectFormat(data.birth_date));
    valuelist.push(data.gender);
    valuelist.push(data.nationality_uuid);
    valuelist.push(data.card_id);
    valuelist.push(data.phone_number);
    valuelist.push(data.email);
    valuelist.push(data.current_address);
    valuelist.push(data.contact_uuid);

    valuelist.push(data.emergency_contact_uuid);
    valuelist.push(data.address_uuid);
    valuelist.push(data.job_level_uuid);
    valuelist.push(data.position_uuid);
    valuelist.push(data.department_uuid);
    valuelist.push(data.employee_status);
    valuelist.push(data.salary_uuid);
    valuelist.push(mTools.toDateCurrectFormat(data.start_date));
    valuelist.push(data.remark);
    valuelist.push(data.welfare_uuid);
    valuelist.push(data.social_security_uuid);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    valuelist.push(data.employee_type);
    valuelist.push(data.recommender_employee_uuid);
    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};
let getValuesEditSalary = (model) => {
  try {
    var data = toEditSalaryModel(model);
    let valuelist = [];
    valuelist.push(data.employee_uuid);
    valuelist.push(data.salary_uuid);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};
let getValuesEditBacktowork = (model) => {
  try {
    var data = toEditModelBacktowork(model);
    let valuelist = [];
    valuelist.push(data.employee_uuid);
    valuelist.push(data.employee_status);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};
let getValuesEditComplate = (model) => {
  try {
    var data = toEditModelComplate(model);
    let valuelist = [];
    valuelist.push(data.employee_uuid);
    valuelist.push(data.employee_status);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};
let toCreateModel = (req) => {
  try {
    const create_date = new Date().toISOString();
    var model = {};
    model.employee_code = req.body["employee_code"];
    model.nick_name = req.body["nick_name"];
    model.title = req.body["title"];
    model.first_name = req.body["first_name"];
    model.last_name = req.body["last_name"];
    model.marital_status = req.body["marital_status"];
    model.children = req.body["children"];
    model.birth_date = req.body["birth_date"];
    model.gender = req.body["gender"];
    model.nationality_uuid = req.body["nationality_uuid"];
    model.card_id = req.body["card_id"];
    model.phone_number = req.body["phone_number"];
    model.email = req.body["email"];
    model.current_address = req.body["current_address"];
    model.contact_uuid = req.body["contact_uuid"];

    model.emergency_contact_uuid = req.body["emergency_contact_uuid"];
    model.address_uuid = req.body["address_uuid"];
    model.job_level_uuid = req.body["job_level_uuid"];
    model.position_uuid = req.body["position_uuid"];
    model.department_uuid = req.body["department_uuid"];
    model.employee_status = req.body["employee_status"];
    model.salary_uuid = req.body["salary_uuid"];
    model.start_date = req.body["start_date"];
    model.remark = req.body["remark"];
    model.welfare_uuid = req.body["welfare_uuid"];
    model.social_security_uuid = req.body["social_security_uuid"];
    model.company_uuid = req.body["company_uuid"];
    model.branch_uuid = req.body["branch_uuid"];
    model.is_active = true;
    model.create_by = mAuth.getUserNameFromToken(req);
    model.create_date = create_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    model.employee_type = req.body["employee_type"];
    model.recommender_employee_uuid = req.body["recommender_employee_uuid"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toDropdown = (modelList) => {
  try {
    let optionList = [];
    modelList.forEach((model) => {
      let value = model["employee_uuid"];
      let label = getLabel(model);
      let rowData = model;
      let dropdownModel = {
        value: value,
        label: label,
        rowData: rowData,
      };
      optionList.push(dropdownModel);
    });
    return optionList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLabel = (model) => {
  try {
    return (
      model["employee_code"] +
      " - " +
      model["first_name"] +
      "  " +
      model["last_name"]
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.employee_uuid = req.body["employee_uuid"];
    model.employee_code = req.body["employee_code"];
    model.nick_name = req.body["nick_name"];
    model.title = req.body["title"];
    model.first_name = req.body["first_name"];
    model.last_name = req.body["last_name"];
    model.marital_status = req.body["marital_status"];
    model.children = req.body["children"];
    model.birth_date = req.body["birth_date"];
    model.gender = req.body["gender"];
    model.nationality_uuid = req.body["nationality_uuid"];
    model.card_id = req.body["card_id"];
    model.phone_number = req.body["phone_number"];
    model.email = req.body["email"];
    model.current_address = req.body["current_address"];
    model.contact_uuid = req.body["contact_uuid"];
    model.emergency_contact_uuid = req.body["emergency_contact_uuid"];
    model.address_uuid = req.body["address_uuid"];
    model.job_level_uuid = req.body["job_level_uuid"];
    model.position_uuid = req.body["position_uuid"];
    model.department_uuid = req.body["department_uuid"];
    model.employee_status = req.body["employee_status"];
    model.salary_uuid = req.body["salary_uuid"];
    model.start_date = req.body["start_date"];
    model.remark = req.body["remark"];
    model.welfare_uuid = req.body["welfare_uuid"];
    model.social_security_uuid = req.body["social_security_uuid"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    model.employee_type = req.body["employee_type"];
    model.recommender_employee_uuid = req.body["recommender_employee_uuid"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlEditDep = (req) => {
  try {
    const keys = getKeysEditDep(req);
    const index = getIndexEditDep(req);
    return (
      "UPDATE employee_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE employee_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysEditDep = (req) => {
  try {
    let keyList = [];
    keyList.push("employee_uuid");
    keyList.push("department_uuid");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getIndexEditDep = (req) => {
  try {
    var data = toEditDepModel(req);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditDepModel = (req) => {
  try {
    var model = {};
    model.employee_uuid = req.body["employee_uuid"];
    model.department_uuid = req.body["department_new"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};

let toEditSalaryModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.employee_uuid = req.body["employee_uuid"];
    model.salary_uuid = req.body["salary_new"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModelBacktowork = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.employee_uuid = req.body["employee_uuid"];
    model.employee_status = req.body["employee_status"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModelComplate = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.employee_uuid = req.body["employee_uuid"];
    model.employee_status = req.body["employee_status"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesEditDep = (model) => {
  try {
    var data = toEditDepModel(model);
    let valuelist = [];
    valuelist.push(data.employee_uuid);
    valuelist.push(data.department_uuid);

    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};

let getSqlEditProbation = (req) => {
  try {
    const keys = getKeysEditProbation();
    const index = getIndexEditProbation(req);
    return (
      "UPDATE employee_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE employee_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlEditPosition = (req) => {
  try {
    const keys = getKeysEditPosition();
    const index = getIndexEditPosition(req);

    return (
      "UPDATE employee_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE employee_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysEditPosition = () => {
  try {
    let keyList = [];
    keyList.push("employee_uuid");
    keyList.push("position_uuid");
    keyList.push("update_by");
    keyList.push("update_date");

    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysEditProbation = () => {
  try {
    let keyList = [];
    keyList.push("employee_uuid");
    keyList.push("employee_status");
    keyList.push("update_by");
    keyList.push("update_date");

    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getIndexEditProbation = (req) => {
  try {
    var data = toEditProbationModel(req);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getIndexEditPosition = (req) => {
  try {
    var data = toEditPositionModel(req);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditProbationModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.employee_uuid = req.body["employee_uuid"];
    model.employee_status = req.body["employee_status"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;

    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditPositionModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.employee_uuid = req.body["employee_uuid"];
    model.position_uuid = req.body["position_new"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;

    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesEditProbation = (model) => {
  try {
    var data = toEditProbationModel(model);
    let valuelist = [];
    valuelist.push(data.employee_uuid);
    valuelist.push(data.employee_status);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};
let getValuesEditPosition = (model) => {
  try {
    var data = toEditPositionModel(model);
    let valuelist = [];
    valuelist.push(data.employee_uuid);
    valuelist.push(data.position_uuid);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};

let getSqlGetLastEmpCode = (req) => {
  return (
    "SELECT * FROM vw_employee_table_item " +
    mTools.getConditionCompanyAndBranch(req) +
    " ORDER BY employee_code DESC LIMIT 1"
  );
};
let getSqlViewByCode = (req) => {
  try {
    return (
      "SELECT * FROM vw_employee_table_item " +
      mTools.getConditionCompanyAndBranch(req) +
      " AND employee_code = $1"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};

let getSqlGetLastDayEmpCode = (req) => {
  return (
    "SELECT * FROM vw_employee_table_item " +
    mTools.getConditionCompanyAndBranch(req) +
    " AND employee_code LIKE '2%' ORDER BY employee_code DESC LIMIT 1"
  );
};

let getSqlGetLastMonthEmpCode = (req) => {
  return (
    "SELECT * FROM vw_employee_table_item " +
    mTools.getConditionCompanyAndBranch(req) +
    " AND employee_code LIKE '1%' ORDER BY employee_code DESC LIMIT 1"
  );
};

module.exports = {
  toDropdown,
  getKeysEdit,
  getValuesEdit,
  getIndexEdit,
  getKeysCreate,
  getValuesCreate,
  getValuesDelete,
  getIndexCreate,
  getSqlCreate,
  getSqlEdit,
  getSqlList,
  getSqlDelete,
  getSqlView,
  getSqlDropdown,
  getRoWAuth,
  getValuesEditDep,
  getSqlEditDep,
  getSqlEditSalary,
  getValuesEditSalary,
  getValuesEditProbation,
  getSqlEditProbation,
  getValuesEditBacktowork,
  getSqlEditBacktowork,
  getValuesEditComplate,
  getSqlEditComplate,
  getSqlEditPosition,
  getKeysEditPosition,
  getIndexEditPosition,
  getValuesEditPosition,
  getSqlListResign,
  getSqlGetLastEmpCode,
  getSqlViewByCode,
  getSqlGetLastDayEmpCode,
  getSqlGetLastMonthEmpCode,
  getSqlViewToDoListEmp,
};
