for
while
do while
for of > array
for each
for in > objects
//////////
// iterate over the array as well as print the series
for(variable;condition,increment);

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4
>undefined

for(i=10;i<5;i++){
    console.log(i)
}
>undefined

var a = ['Delhi', 'Mumbai', 'Indore', 'Hongkong', 'InnsBurg', 'Venice'];
for(i=0;i<a.length;i++){
    console.log(a[i])
}

Delhi
 Mumbai
 Indore
 Hongkong
 InnsBurg
 Venice

var city = ['Delhi', 'Mumbai',['Red','Yellow','Green'], 'Hongkong', 'InnsBurg']
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}

Delhi
 Mumbai
 Red
 Yellow
 Green
 Hongkong
 InnsBurg

/////////////////While/////////
var i = 10;
while(i<5){
    console.log(i);
    i++
}
>undefined

var i = 0;
while(i<5){
    console.log(i);
    i++
}
 0
 1
 2
 3
 4
>4

////// Do While loop //////
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)
 10
>10
var i = 0;
do{
    console.log(i);
    i++
}
while(i<5)
0
1
2
3
4
>4

//////////// for of /////
var city = ['Delhi', 'Mumbai', 'Indore', 'Hongkong', 'InnsBurg', 'Venice'];
for(mycity of city){
    console.log(mycity)
}
Delhi
 Mumbai
 Indore
 Hongkong
InnsBurg
 Venice

////////// for each /////
let add = 0;
let numbers  = [10,34,56,23];

numbers.forEach(myFunction)

function myFunction(data){
    add +=data
}
