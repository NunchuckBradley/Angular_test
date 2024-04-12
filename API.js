const express = require('express');
const fs = require("fs");

const users = ["martin", "guest"];

// dir is file, depth is how far into a directory it will read.
function treeFiles(dir, depth = 1000) {
  if (depth < 1) return;
  var sitesList = {};
  fs.readdirSync(dir).forEach((file) => {
    let base = dir + '/' + file;
    // Add file to siteslist object.
    sitesList[file] = {"stats": fs.statSync(base), "dir": false};
    // Recursive to get directory and tree of files
    if (fs.statSync(base).isDirectory()) {
      sitesList[file]["dir"] = true;
      sitesList[file]["ls"] = treeFiles(base, depth - 1);
    }
  });
  return sitesList;
}

exports = module.exports = function(app) {

    app.get('/api/users', (req, res) => {
      // res.json(users);
      // res.json(sitesList);
      var normalizedPath = require("path").join(__dirname, "files");
      res.json(treeFiles(normalizedPath, 4));
    });

    app.post('/api/user', (req, res) => {
      const user = req.body.user;
      users.push(user);
      res.json("user addedd");
    });

    app.get('/api/help', (req, res) => {
      res.json("Help guide for fallback call")
    });

};
