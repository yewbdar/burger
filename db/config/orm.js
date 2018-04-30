var connection = require("./connection.js");

var orm = {
    selectAll: function (table) {
        var quary = "SELECT * FROM ??";
        connection.query(quary, [table], function (err, data) {
            if (err) throw err;
            console.log(data);
        });
    },

    insertOne: function (table, colOne, valueOne,colTwo, valueTwo) {
        var quary = "INSERT INTO ??  SET ?";

        connection.query(quary, [table, { colOne:valueOne, colTwo:valueTwo} ], function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: function (table, colOne, valueOne,colTwo,  valueTwo, whereCol, whereValu) {
        var quary = "UPDATE ?? SET ? WHERE ? ";
        connection.query(quary,[table, {colOne:valueOne, colTwo:valueTwo},{ whereCol: whereValu}], function (err, res) {
            if (err) throw err;
            console.log(res);
        });

    }


}
module.exports=orm;