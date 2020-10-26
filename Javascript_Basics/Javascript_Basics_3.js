1.)const ask8=(question,yes,no)=>{
	if(confirm(question))yes()
	else no()
}
undefined
ask8("Do you agree?",()=>alert("yes"),()=>alert("no"));
undefined


2.)var people=[{name:'eshan',age:20},{name:'suha',age:7},{name:'anish',age:20},{name:'vibha',age:19}]
undefined
function teenager(person){
    return person.age > 10 && person.age < 2
}
undefined
var firstTeenager=people.find(teenager)
undefined
firstTeenager.name
