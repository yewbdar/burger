var orm=require("../db/config/orm.js");

var burger={
select:orm.selectAll("burgers_db"),

insert:orm.insertOne(),
update:orm.updateOne()
}
module.exports=burger;