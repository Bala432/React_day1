1.)function show(a){
    return a*100;
}

show(10)
1000

2.)const a1=function(a){
    return a*100;
}

a1(30)
3000

3.)const a2=(a)=>{
    return a*100;
}

a2(30)
3000    

4.)const a3=(a)=>a*100

a3(40)
4000

5.)const a4=a=>a*100

a4(50)
5000

6.)var coll=[1,2,3,4]

var arr=()=>coll[0]

arr
()=>coll[0]
arr()
1

7.)function foo(n){
    var f=()=>coll[0]+n;
    return f()
}

foo(3)
4