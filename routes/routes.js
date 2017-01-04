var appRouter = function (app) {
    var data = {};

    app.get("/", function (req, res) {
        res.send("Hello World");
    });

    app.get("/getLatLong", function (req, res) {
        if (data.lattitude != null && data.longitude != null)
            return res.send(data);
    });


    app.post("/postLatLong", function (req, res) {
        if (!req.body.lat || !req.body.long) {
            return res.send({ "status": "error", "message": "missing a parameter" });
        } else {
            data.lattitude = req.body.lat;
            data.longitude = req.body.long;
            return res.send('Data Succseccfully updated');
        }
    });

}

module.exports = appRouter;