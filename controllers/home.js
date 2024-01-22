module.exports = {
  getIndex: (req, res) => {
    let user = null;
    if (req.user) {
      user = req.user;
    }
    res.render("index.ejs", { user })
  }
}