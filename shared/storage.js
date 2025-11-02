// Shared storage file — both upper & lower use this
function saveScanData(data) {
  let records = JSON.parse(localStorage.getItem("dashboardData")) || [];
  records.push(data);
  localStorage.setItem("dashboardData", JSON.stringify(records));
}

function getAllData() {
  return JSON.parse(localStorage.getItem("dashboardData")) || [];
}
