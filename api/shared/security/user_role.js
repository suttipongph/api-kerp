let get_row_auth = (data_list) => {
  data_list.forEach((element) => {
    element["rowAuthorize"] = 4;
  });
};
module.exports = { get_row_auth };
