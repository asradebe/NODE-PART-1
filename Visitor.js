const fs = require('fs');
class Visitor{
    constructor(name, age, comments, assistor){
        this.name = name;
        this.age = age;
        this.date = this.dateTime().date;
        this.time = this.dateTime().time;
        this.comments = comments;
        this.assistor = assistor;
    }
    dateTime(){
        let dt = new Date,
            humanReadable = dt.toUTCString();
        return {
            date: humanReadable.substring(0,16),
            time: humanReadable.substring(17)
        }
    }
    save(){
        let serialised = JSON.stringify(this, null, 2);
        fs.readdir("./uploads", (err,files) => {
            if(err) throw new Error(err)
            fs.writeFile(`./uploads/visitor_${files.length + 1}.json`, serialised, (err2, saved)=>{
                if(err2) throw new Error(err2)
                console.log('Saved!')
            });
        });
    }
    load(arg){
        fs.readFile(`./uploads/visitor_${arg}.json`, (err,data) => {
            if(err) throw new Error(err);
            let obj = JSON.parse(data)
            console.log(obj.name)
            return obj.name;
        })
    }
}
let visitor = new Visitor("Asanda", 21, "blah blah blah blah blah", "Sephula");
//visitor.save();
visitor.load(2)