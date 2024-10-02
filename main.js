let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let catogery=document.getElementById('catogery');
let create=document.getElementById('create');
function getTotal(){
    if(price.value!='')
    {
        let result=(+price.value+ +taxes.value+ +ads.value)- +discount.value;
        total.innerHTML=result;
        total.style.background='green';
    }
    else{
        total.innerHTML= '';
        total.style.background='#a00d02';
    }
}
let datapro;
if(localStorage.product!=null){
    datapro= JSON.parse(localStorage.product);
}
else{
    datapro=[];
}

create.onclick=function(){
    let newpro={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        catogery:catogery.value,
    }
    
    datapro.push(newpro);
    localStorage.setItem('product',JSON.stringify(datapro));
    
    clearData();
    dataShow();
    
    
}
function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    catogery.value='';
}
function dataShow(){
    let table='';
    for(let i=0;i<datapro.length;i++){
        table +=`
                            <tr>
                        <td>${i}</td>
                        <td>${datapro[i].title}</td>
                        <td>${datapro[i].price}</td>
                        <td>${datapro[i].taxes}</td>
                        <td>${datapro[i].ads}</td>
                        <td>${datapro[i].discount}</td>
                        <td>${datapro[i].total}</td>
                        <td>${datapro[i].catogery}</td>
                        <td><button id="update">update</button></td>
                        <td><button onclick="deletData(${i})" id="delete">delete</button></td>
                    </tr>
        `
    }
    let tbody=document.getElementById('tbody');
    tbody.innerHTML=table;

}

function deletData(i)
{
    datapro.splice(i,1);
    localStorage.product=JSON.stringify(datapro);
    dataShow();

}
let btndelete=document.getElementById('btndelete');
if(datapro.length>0){
    btndelete.innerHTML= `
    <button onclick="deleteAll()" >delete All</button>
    
    `
    
}
else{
    btndelete.innerHTML='';
    
}
function deleteAll(){
    
    localStorage.clear();
    datapro.splice(0);
    dataShow();

}
dataShow();