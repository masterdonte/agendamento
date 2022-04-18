class AppointmentFactory{
    build(appo){
        let day = appo.date.getDate() + 1;//Por causa do UTC-- converte p hora local diminuindo 3h e acaba voltando pro dia anterior
        let month = appo.date.getMonth();
        let year = appo.date.getFullYear();
        let time = appo.time.split(":");
        let hour = time[0];
        let minute = time[1];

        const fullDate = new Date(year, month, day, hour, minute, 0, 0);
        const newAppo = {
            id: appo._id,
            title: appo.name + " " + appo.description,
            start: fullDate,
            end: fullDate
        }

        return newAppo;
        //return appo;
    }
}

module.exports = new AppointmentFactory();