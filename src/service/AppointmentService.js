const Appo = require("../model/Appointment");
const factory = require("../factory/AppointmentFactory")

class AppointmentService {

    async create(obj){
        var appo = new Appo({...obj, finished: false });
        try {
            await appo.save();
        } catch (error) {
            console.log(error);
        }
    }

    async getUnfinished(finished){
        //const where = (finished == true) ? {} : {"finished" : false};
        let prevResult = await Appo.find({"finished" : false});
        let finalResult = [];      
        prevResult.forEach(obj => {
            finalResult.push(factory.build(obj));
        });
        return finalResult;
    }

    async search(param){
        try {
            let query = Appo.find();            
            if(param){
                query = query.or([{email: param}, {cpf: param}]);
            }            
            return await query;
        } catch (error) {
            console.log(error.message);
            return [];
        }
    }

    async findById(id){
        try {
            const appo = await Appo.findOne({"_id" : id });
            return appo;
        } catch (error) {
            console.log(error);
        }
    }

    async finish(id){
        try {         
            await Appo.findByIdAndUpdate(id, {"finished" : true });
            return true;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}

module.exports = new AppointmentService();