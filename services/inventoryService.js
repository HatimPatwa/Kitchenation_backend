const con = require('../connection');

module.exports = {
    getInventory: async function (req, res) {

        try {
            var [data] = await con.query("SELECT * FROM inventory")
            return { code: 200, data: data };

        } catch (error) {
            return { code: 500, error: error };
        }

    },
    getInventoryById: async function (req, res) {
        try {

            if (!req.body.id) {
                return { code: 400, error: "id is required" };
            }

            var [data] = await con.query("SELECT * FROM inventory WHERE id = ?", [req.body.id])

            return { code: 200, data: data };

        } catch (error) {
            return { code: 500, error: error };
        }
    },

    addInventory: async function (req, res) {

        try {
            if (!req.body.item || !req.body.rate || !req.body.hsn) {
                return { code: 400, error: "item, rate,  hsn is required" };
            }

            var [data] = await con.query("INSERT INTO inventory (item, item_desc , rate, hsn) VALUES (?, ?, ?, ?)", [req.body.item, req.body.item_desc ?? null, req.body.rate, req.body.hsn])
            return { code: 201, data: data };
        }
        catch (error) {
            return { code: 500, error: error };
        }
    },

    updateInventory: async function (req, res) {

        try {

            var body = req.body;

            console.log(body);
            if (!body.id || !body.item || !body.rate || !body.hsn) {
                return { code: 400, error: "id, item, rate,  hsn is required" };
            }

            let query = "UPDATE inventory SET ";

            Object.entries(body).forEach(([key, value]) => {
                if (key != "id") {
                    query += `${key} = '${value}',`
                }
            });

            query = query.slice(0, -1);
            query += ` WHERE id = ${body.id}`;

            var [data] = await con.query(query);
            return { code: 200, data: data };
        }
        catch (error) {
            console.log(error);
            return { code: 500, error: error };
        }
    }


}