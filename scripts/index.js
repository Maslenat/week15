



let firstname=document.getElementById('firstname').value;


let secondname=document.getElementById('secondname').value;

let login;

let parol;

let paroltoo;

function TestLogin(){ 

   login=document.getElementById('loginname').value;
 

if(/^[a-zA-Z0-9\.]{2,30}$/.test(login)==false)
{
alert("Не корректно введено имя пользователя (Используйте буквы латинского алфавита, цифры и точки)");}
else
{
    return 1;
}

}

 
function TestParol1(){
    parol=document.getElementById('parol').value;
    console.log (/^[a-zA-Z1-9\W]{7,20}$/.test(parol));
if(/^[a-zA-Z1-9\W]{7,20}$/.test(parol)==false)
{
alert("Не корректно введен пароль (Пароль должен содержать не менее восьми знаков, включать буквы, цифры)");

}
else
{
    return 1;
}

}



function TestParol2(){   
    paroltoo=document.getElementById('paroltoo').value;
    
    if(paroltoo!=parol)
    {
        alert("Подтвержденный пароль не равен паролю");
       
    }
       
    else
    {
        return 1;
    }           

    }
 
    

 function Chek()
 {
     if (TestParol1()==1 && TestParol2()==1 && TestLogin()==1) 
     {
         alert("Вы успешно зарегистрированы!");
     }
     else
     {
        {
            alert("Запоните поля формы регистрации корректно");
        }
     }
 }
