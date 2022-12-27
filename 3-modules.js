

//CommonJs , every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

// const names = require("./4-names")
const names = require("./4-names")
const greatings = require("./5-utils")
const data = require("./6-alternative-flavour")
require('./7-mind-grenade')

const {john,peter}=names




greatings("inam");
greatings(peter);
