class operation{
	constructor(num1,num2){
		this.number1=num1;
		this.number2=num2;
	}
	sumar(){
		return this.number1 + this.number2;
	}
	restar(){
		return this.number1 - this.number2;
	}
	multi(){
		return this.number1 * this.number2;
	}
	div(){
		return this.number1 / this.number2;
	}
}

exports.sumar= function(req,res){
	let claseinstanciada = new operation(req.body.number1,req.body.number2);
	res.json(claseinstanciada.sumar());
}
exports.restar= function(req,res){
	let claseinstanciada = new operation(req.body.number1,req.body.number2);
	res.json(claseinstanciada.restar());
}
exports.multi= function(req,res){
	let claseinstanciada = new operation(req.body.number1,req.body.number2);
	res.json(claseinstanciada.multi());
}
exports.div= function(req,res){
	let claseinstanciada = new operation(req.body.number1,req.body.number2);
	res.json(claseinstanciada.div());
}