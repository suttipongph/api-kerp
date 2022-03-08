let getCondition = (req) => {
  try {
    const authorization = req.headers["authorization"].split(" ");
    const company_uuid = authorization[1];
    const branch_uuid = authorization[2];
    let condintionList = [];
    let operatorList = [];
    let sqlCommand =
      "where company_uuid = " +
      "'" +
      company_uuid +
      "'" +
      " AND branch_uuid = " +
      "'" +
      branch_uuid +
      "'";
    req.body.conditions.forEach((element) => {
      let columnName = element.columnName;
      let value = "'" + element.value + "'";
      if (element.value) {
        value = "'" + element.value + "'";
      } else {
        value = null;
      }
      let operator = element.operator;
      let equalityOperator = element.equalityOperator;
      let command = columnName + equalityOperator + value;
      let operatorStr = operator;
      operatorList.push(operatorStr);
      condintionList.push(command);
    });
    condintionList.forEach((item, index) => {
      sqlCommand = sqlCommand + operatorList[index] + item;
    });
    if (company_uuid == undefined) {
      return "";
    } else {
      return sqlCommand;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

let getConditionFieldChange = (req) => {
  try {
    const authorization = req.headers["authorization"].split(" ");
    const company_uuid = authorization[1];
    const branch_uuid = authorization[2];

    let sqlCommand =
      "where company_uuid = " +
      "'" +
      company_uuid +
      "'" +
      " AND branch_uuid = " +
      "'" +
      branch_uuid +
      "'";

    if (company_uuid == undefined) {
      return "";
    } else {
      return sqlCommand;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
let getConditionCompany = (req) => {
  try {
    const authorization = req.headers["authorization"].split(" ");
    const company_uuid = authorization[1];
    const branch_uuid = authorization[2];
    let condintionList = [];
    let operatorList = [];
    let sqlCommand = "where company_uuid = " + "'" + company_uuid + "'";
    req.body.conditions.forEach((element) => {
      let columnName = element.columnName;
      let value = "'" + element.value + "'";
      let operator = element.operator;
      let equalityOperator = element.equalityOperator;
      let command = columnName + " " + equalityOperator + " " + value;
      let operatorStr = " " + operator + " ";
      operatorList.push(operatorStr);
      condintionList.push(command);
    });
    let i = 0;
    condintionList.forEach((item) => {
      if (i == 0) {
        sqlCommand = sqlCommand + " " + item;
      } else {
        sqlCommand = sqlCommand + " " + operatorList[i] + " " + item;
      }

      i = i + 1;
    });
    if (company_uuid == undefined) {
      return "";
    } else {
      return sqlCommand;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
let getConditionOnly = (req) => {
  try {
    let condintionList = [];
    let operatorList = [];
    let sqlCommand = "where ";
    req.body.conditions.forEach((element) => {
      let columnName = element.columnName;
      let value = "'" + element.value + "'";
      let operator = element.operator;
      let equalityOperator = element.equalityOperator;
      let command = columnName + " " + equalityOperator + " " + value;
      let operatorStr = " " + operator + " ";
      operatorList.push(operatorStr);
      condintionList.push(command);
    });
    let i = 0;
    condintionList.forEach((item) => {
      if (i == 0) {
        sqlCommand = sqlCommand + " " + item;
      } else {
        sqlCommand = sqlCommand + " " + operatorList[i] + " " + item;
      }

      i = i + 1;
    });
    if (sqlCommand != "where ") {
      return sqlCommand;
    } else {
      return "";
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
let getConditionCompanyAndBranch = (req) => {
  try {
    const authorization = req.headers["authorization"].split(" ");
    const company_uuid = authorization[1];
    const branch_uuid = authorization[2];
    let sqlCommand =
      "where company_uuid = " +
      "'" +
      company_uuid +
      "' AND branch_uuid = '" +
      branch_uuid +
      "'";

    if (company_uuid == undefined) {
      return "";
    } else {
      return sqlCommand;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
let toDateCurrectFormat = (date) => {
  try {
    if (date == null) {
      return null;
    } else {
      date = date
        .toString()
        .replace("-", "/")
        .replace("-", "/")
        .replace(" ", "/");
      return stringToDate(date, "dd/MM/yyyy", "/");
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
let toDateCurrectHip = (date) => {
  try {
    if (date == null) {
      return null;
    } else {
      // date = date
      //   .toString()
      //   .replace("-", "/")
      //   .replace("-", "/")
      //   .replace(" ", "/");
      return stringToDateHip(date, "dd/MM/yyyy", "/");
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
function stringToDateHip(_date, _format, _delimiter) {
  var formatLowerCase = _format.toLowerCase();
  var formatItems = formatLowerCase.split(_delimiter);
  var dateItems = _date.split(_delimiter);
  var monthIndex = formatItems.indexOf("mm");

  var dayIndex = formatItems.indexOf("dd");
  var yearIndex = formatItems.indexOf("yyyy");
  var month = parseInt(dateItems[monthIndex]);
  var formatedDate = `'${dateItems[yearIndex]}-${month}-${dateItems[dayIndex]}'`;
  return formatedDate;
}
function dateToString(_date) {
  var x = new Date(_date);
  var dd = x.getDate();
  var mm = x.getMonth() + 1;
  var yyyy = x.getFullYear();

  return dd + "/" + mm + "/" + yyyy;
}
function stringToDate(_date, _format, _delimiter) {
  var formatLowerCase = _format.toLowerCase();
  var formatItems = formatLowerCase.split(_delimiter);
  var dateItems = _date.split(_delimiter);
  var monthIndex = formatItems.indexOf("mm");

  var dayIndex = formatItems.indexOf("dd");
  var yearIndex = formatItems.indexOf("yyyy");
  var month = parseInt(dateItems[monthIndex]);
  month -= 1;
  var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
  return formatedDate;
}
function getTHBEdate(date) {
  return date.toLocaleDateString("th-be", "DD/MM/yyyy");
}
module.exports = {
  getCondition,
  getConditionCompany,
  getConditionOnly,
  toDateCurrectFormat,
  dateToString,
  getConditionCompanyAndBranch,
  getConditionFieldChange,
  toDateCurrectHip,
  getTHBEdate,
};
