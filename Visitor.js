const fs = require('fs');
class Visitor{
    constructor(name, age, time, date, comments, assistor){
        this.name = name;
        this.age = age;
        this.date = date;
        this.time = time;
        this.comments = comments;
        this.assistor = assistor;
    }
    save(){
        let test = JSON.stringify(this, null, 2);
        fs.readdir("./uploads", function(err,files){
            if(err) throw new Error(err)
            fs.writeFile(`./uploads/visitor_${files.length + 1}.json`, test, function(err2, saved){
                if(err2) throw new Error(err2)
            });
        });
    }
    load(arg){
        fs.readFile(`./uploads/visitor_${arg}.json`, function(err,data){
            if(err) throw new Error(err);
            let obj = JSON.parse(data)
            return obj.name;
        })
    }
}
let visitor = new Visitor("Asanda", 21, "14:40", "01-09-2019", "blah blah blah blah blah", "Chanel");
visitor.save();
// visitor.load(1)
module.exports = Visitor;