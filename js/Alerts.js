function firstalrt(suma){  
    swal("Cумма вашего заказа составляет: " + suma + " Рублей. Хотите продолжить и отправить заявку?", {
  buttons: {
    cancel: "Пожалуй откажусь",
    catch: {
      value: "Да, продолжить!",
    },
  },
})
.then((value) => {
  switch (value) {
    case "Да, продолжить!":
      asses(suma);
      break;
 
    default:
      swal("Захидите еще!");
  }
});
}

function asses(suma){   
   swal({
  title: "Уппс...",
  text: "Отправка заявок временно не работает, но вы всегда можете связаться с нами на прямую нам Вконтакте!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
swal("Замечательно, ждем писем!" + " https://vk.com/mr.slandole", {
      icon: "success",
    });
  } else {
    swal("Возвращайтесь еще!");
  }
});
}

function unfirstalert(){
     swal("Пожалуйста, проверьте введенные данные", "И попробуйте сново!");
}

//function asses(suma){
//    swal("Отлично", "Мы отправили вашу заявку! Ожидайте ответа!", "success");
//}