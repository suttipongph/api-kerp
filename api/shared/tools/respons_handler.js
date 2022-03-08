let getErrorCreate = (message, req, res) => {
  let errorRespons = {};
  errorRespons["headers"] = req.headers;
  errorRespons["name"] = req.name;
  errorRespons["ok"] = req.ok;
  errorRespons["status"] = req.status;
  errorRespons["statusText"] = req.statusText;
  errorRespons["url"] = req.url;
  let errorMessage = {};
  errorMessage["code"] = "10001";
  errorMessage["errorMessage"] = ["LABEL.ERROR"];
  errorMessage["errorParameter"] = [];
  errorMessage["rowParameter"] = [];
  errorMessage["message"] = message;
  errorMessage["source"] = "source";
  errorMessage["stackTrace"] = "stackTrace";
  errorMessage["messageList"] = [];

  errorRespons["error"] = errorMessage;
  res.status(500).json(errorRespons);
};
let getErrorEdit = (message, req, res) => {
  let errorRespons = {};
  errorRespons["headers"] = req.headers;
  errorRespons["name"] = req.name;
  errorRespons["ok"] = req.ok;
  errorRespons["status"] = req.status;
  errorRespons["statusText"] = req.statusText;
  errorRespons["url"] = req.url;
  let errorMessage = {};
  errorMessage["code"] = "10001";
  errorMessage["errorMessage"] = ["LABEL.ERROR"];
  errorMessage["errorParameter"] = [];
  errorMessage["rowParameter"] = [];
  errorMessage["message"] = message;
  errorMessage["source"] = "source";
  errorMessage["stackTrace"] = "stackTrace";
  errorMessage["messageList"] = [];

  errorRespons["error"] = errorMessage;
  res.status(500).json(errorRespons);
};
let getErrorDelete = (message, req, res) => {
  let errorRespons = {};
  errorRespons["headers"] = req.headers;
  errorRespons["name"] = req.name;
  errorRespons["ok"] = req.ok;
  errorRespons["status"] = req.status;
  errorRespons["statusText"] = req.statusText;
  errorRespons["url"] = req.url;
  let errorMessage = {};
  errorMessage["code"] = "10001";
  errorMessage["errorMessage"] = ["LABEL.ERROR"];
  errorMessage["errorParameter"] = [];
  errorMessage["rowParameter"] = [];
  errorMessage["message"] = message;
  errorMessage["source"] = "source";
  errorMessage["stackTrace"] = "stackTrace";
  errorMessage["messageList"] = [];

  errorRespons["error"] = errorMessage;
  res.status(500).json(errorRespons);
};
let getErrorList = (message, req, res) => {
  let errorRespons = {};
  errorRespons["headers"] = req.headers;
  errorRespons["name"] = req.name;
  errorRespons["ok"] = req.ok;
  errorRespons["status"] = req.status;
  errorRespons["statusText"] = req.statusText;
  errorRespons["url"] = req.url;
  let errorMessage = {};
  errorMessage["code"] = "10001";
  errorMessage["errorMessage"] = ["LABEL.ERROR"];
  errorMessage["errorParameter"] = [];
  errorMessage["rowParameter"] = [];
  errorMessage["message"] = message;
  errorMessage["source"] = "source";
  errorMessage["stackTrace"] = "stackTrace";
  errorMessage["messageList"] = [];

  errorRespons["error"] = errorMessage;
  res.status(500).json(errorRespons);
};
let getErrorDropdown = (message, req, res) => {
  let errorRespons = {};
  errorRespons["headers"] = req.headers;
  errorRespons["name"] = req.name;
  errorRespons["ok"] = req.ok;
  errorRespons["status"] = req.status;
  errorRespons["statusText"] = req.statusText;
  errorRespons["url"] = req.url;
  let errorMessage = {};
  errorMessage["code"] = "10001";
  errorMessage["errorMessage"] = ["LABEL.ERROR"];
  errorMessage["errorParameter"] = [];
  errorMessage["rowParameter"] = [];
  errorMessage["message"] = message;
  errorMessage["source"] = "source";
  errorMessage["stackTrace"] = "stackTrace";
  errorMessage["messageList"] = [];

  errorRespons["error"] = errorMessage;
  res.status(500).json(errorRespons);
};
let getErrorView = (message, req, res) => {
  let errorRespons = {};
  errorRespons["headers"] = req.headers;
  errorRespons["name"] = req.name;
  errorRespons["ok"] = req.ok;
  errorRespons["status"] = req.status;
  errorRespons["statusText"] = req.statusText;
  errorRespons["url"] = req.url;
  let errorMessage = {};
  errorMessage["code"] = "10001";
  errorMessage["errorMessage"] = ["LABEL.ERROR"];
  errorMessage["errorParameter"] = [];
  errorMessage["rowParameter"] = [];
  errorMessage["message"] = message;
  errorMessage["source"] = "source";
  errorMessage["stackTrace"] = "stackTrace";
  errorMessage["messageList"] = [];

  errorRespons["error"] = errorMessage;
  res.status(500).json(errorRespons);
};
module.exports = {
  getErrorCreate,
  getErrorEdit,
  getErrorDelete,
  getErrorList,
  getErrorDropdown,
  getErrorView,
};
