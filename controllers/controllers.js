// const prefix = `/`;
const path = require("path");

async function renderIndex(req, res) {
  // res.render('pages/index', {
  //   title: 'Latihan 11 - React Todolist CRA',
  //   layout: 'layout/main-layout',
  //   prefix,
  // })
  res.sendFile(path.join(__dirname, "build", "index.html"));
}

module.exports = { renderIndex };
