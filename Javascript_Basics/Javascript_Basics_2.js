1.)var coll=[10,20,30,40,50]

var sum=coll.reduce((a,b)=>a+b)

sum
150

2.)var even=coll.filter(v=> v%2 ==0)

even
(5) [10, 20, 30, 40, 50]

3.)var double=coll.map(v=> v*2)

double    
(5) [20, 40, 60, 80, 100]

4.)var max=(a,b)=>a>b?a:b

max(100,200)
200

max(1000,200)
1000

5.)var double=coll.map(v=> v*2)
undefined
double    
(5) [20, 40, 60, 80, 100]

6.)function print(val){
    console.log(val)
}
undefined
coll.forEach(print)
VM1926:2 10
VM1926:2 20
VM1926:2 30
VM1926:2 40
VM1926:2 50
