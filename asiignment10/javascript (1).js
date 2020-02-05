





funation reversenumber(n){
	var a;
	var rev=0;
	while(n>0){
		a=n%10;
		rev=(rev*10)+a;
		n=parseInt(n/10);
	}
	console.log(rev);
}
reversenumber(132);

funation armstrongnumber(n){
	var a;
	var rev=0;
	
	return ;

}
armstrongnumber(11);

funation fibonacciseries(n){
	var f,f1=0,f2=1,i;
	console.log(0);
	console.log(1);
	for(i=0;i<=n-2;i++){
		f=f1+f2;
		f1=f2;
		f2=f;
		console.log(f);
	}
}
fibonacciseries(3);


function primenumber(n){
	var a=0;
	for(i=2;i<=n/2;i++)
		if(n%i==0)
			a=1;
	
	if(a==1)
		console.log("not primenumber");
	else
		console.log("primenumber");
}
primenumber(13);



function even&odd(n){
	if(n%2==0){
		console.log("Even");
		return 1;
	}
	else{
		console.log("Odd");
		return 0;
	}
}
even&odd(2);

function (n){
	var aars = ["Audi", "Volvo", "BMW"];
	console.log(aars);
	for(i=0;i<=aars.length-1;i++){
		console.log(i+" "+aars[i]);
	}
	return aars;
}
arrray();



function sort(){
	var a = [2, 1, 4, 9];
	var i,temp,j;
	for(i=0;i<=a.length-1;i++){
		for(j=i+1;j<=a.length-1;j++){
			if(a[j] < a[i])  
            {  
                temp=a[i];  
                a[i]=a[j];  
                a[j]=temp;   
            }
		}
	}
	return a;
	console.log(a);
}
sort();


function maximumarrray(){
	var nos = [1, 2, 4, 9];
	var i,sum=0,max=nos[0];
	for(i=0;i<=nos.length-1;i++){
		if(nos[i]>max)
			pos=i;
			max=nos[i];
	}
	console.log("position:"+pos+" value:"+max);
	return nos;
}
maximumarrray();


function minimumarray(){
	var nos = [2, 1, 4, 9];
	var i,sum=0,min=nos[0],pos;
	for(i=0;i<=nos.length-1;i++){
		if(nos[i]<min){
			pos=i;
			min=nos[i];
		}
	}
	console.log("position:"+pos+" value:"+min);
	return nos;
}
minimumarray();

function sumarrray(n){
	var nos = [1, 2, 4];
	var i,sum=0;
	for(i=0;i<=nos.length-1;i++){
		sum=sum+parseInt(nos[i]);
	}
	console.log(sum);
	return sum;
}
sumarrray();


