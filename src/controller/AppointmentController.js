const service = require("../service/AppointmentService");

class AppointmentController{

    async index(req, res){
        res.render("index");
    }

    async register(req, res){
        res.render("register");
    }

    async list(req, res){    
        let { search } = req.query;
        const appos = await service.search(search);
        res.render("list", { search, appos });        
    }   

    async calendar(req, res){
        const result = await service.getUnfinished();
        res.json(result);
    }

    async save(req, res){
        const obj = req.body;
        try {
            await service.create(obj);
            res.redirect('/');
        } catch (error) {
            res.render("resultado", {"detail": error.message});
        }
    }

    async event(req, res){
        try {
            const { id } = req.params;
            const appo = await service.findById(id);
            console.log(appo);
            res.render("event", { appo });
        } catch (error) {
            console.log(error.message);
        }
    }

    async finish(req, res){
        try {
            const { id } = req.body;
            const result = await service.finish(id);
            console.log(result);
            res.redirect("/");
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = new AppointmentController();