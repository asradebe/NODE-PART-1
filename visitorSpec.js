describe('Nodejs file io', function(){
	
	let Visitor = require("./test.js");

	it('should have name, age, comments and assistor properties', function(){
		let visitor = new Visitor("Sephula", 30, "14:40", "01-09-2019", "blah blah", "Sephula")
		expect(visitor.name).toEqual("Sephula")
		expect(visitor.age).toEqual(30)
		expect(visitor.comments).toEqual("blah blah")
		expect(visitor.assistor).toEqual("Sephula")
		expect(visitor.time).toBe("14:40")
		expect(visitor.date).toBe("01-09-2019")

	});
	// it('should return true if a json file has been created', function(){
		// let visitor = new Visitor("Sephula", 30, "14:40", "01-09-2019", "blah blah", "Sephula")
		// expect(visitor.save()).toBeTruthy()
		// expect(visitor.name).toEqual()
		// expect(visitor.name).toEqual()
	// });
	it('should return name, age, comment of a person', function(){
		let visitor = new Visitor("Sephula", 30, "14:40", "01-09-2019", "blah blah", "Sephula")
		expect(visitor.load(1)).toEqual("Sephula")
		// expect(visitor.name).toEqual()
		// expect(visitor.name).toEqual()
	});
});