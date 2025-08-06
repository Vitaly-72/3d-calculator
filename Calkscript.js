function proverkaZnachenii(){var e,t,a,n,d,i;data1=document.getElementById("data1").value,data2=$("#data2 option:selected").text(),data7=document.getElementById("data2").value,data3=document.getElementById("data3").value,data6=$("#data3 option:selected").text(),data4=$("#data4 option:selected").text(),data8=document.getElementById("data4").value,data10=$("#data10 option:selected").text(),data11=document.getElementById("data10").value,data5=document.getElementById("data4").value,document.getElementById("name1").innerHTML=data2,document.getElementById("name2").innerHTML=data10,data1234="Sinishin Vitalii",document.getElementById("name3").innerHTML="Крепление",document.getElementById("name4").innerHTML=data6,document.getElementById("name5").innerHTML=data4,WidthSetka=(e=data7,setki[`setka${e}`]?.width),SetkaPrice=(t=data7,setki[`setka${t}`]?.price),SetkakperKol=(a=data7,setki[`setka${a}`]?.kperKol),TrubaPrice=(n=data11,truba[`truba${n}`]?.price??0),VorotaPrice=(d=data3,vorota[`vorota${d}`]?.price??0),KalitkaPrice=(i=data8,kalitka[`kalitka${i}`]?.price??0)}function raschet(){var e=Math.ceil(data1/WidthSetka);0==e?(document.getElementById("koltrub").value=0,$("#dan1").hide()):(document.getElementById("kolsetki").value=e,$("#dan1").show()),0==data11?(document.getElementById("koltrub").value=0,$("#dan2").hide()):(document.getElementById("koltrub").value=e+1,$("#dan2").show()),0==e?(document.getElementById("kolkrep").value=0,$("#dan3").hide()):(document.getElementById("kolkrep").value=e*SetkakperKol+SetkakperKol,$("#dan3").show()),0==data3?(document.getElementById("vorot").value=0,$("#dan4").hide()):(document.getElementById("vorot").value=1,$("#dan4").show()),0==data8?(document.getElementById("kolitka").value=0,$("#dan5").hide()):(document.getElementById("kolitka").value=1,$("#dan5").show()),0==e&&0==data11&&0==data3&&0==data8?$("#dan7").show():$("#dan7").hide()}function calculationPrice(){var e=document.getElementById("kolsetki").value,t=document.getElementById("koltrub").value,a=document.getElementById("kolkrep").value,n=document.getElementById("vorot").value,d=document.getElementById("kolitka").value;document.getElementById("price1").innerHTML=SetkaPrice*e+" р.",document.getElementById("price2").innerHTML=TrubaPrice*t+" р.",document.getElementById("price3").innerHTML=krepPrice*a+" р.",document.getElementById("price4").innerHTML=VorotaPrice*n+" р.",document.getElementById("price5").innerHTML=KalitkaPrice*d+" р.",document.getElementById("price6").innerHTML=SetkaPrice*e+TrubaPrice*t+krepPrice*a+VorotaPrice*n+KalitkaPrice*d+" р.",document.getElementById("step2").style.display="block"}function scritStep2(){document.getElementById("step2").style.display="none"}data5.addEventListener("click",proverkaZnachenii),data5.addEventListener("click",raschet),data5.addEventListener("click",calculationPrice),kolsetki.addEventListener("input",proverkaZnachenii),kolsetki.addEventListener("input",calculationPrice),koltrub.addEventListener("input",proverkaZnachenii),koltrub.addEventListener("input",calculationPrice),kolkrep.addEventListener("input",proverkaZnachenii),kolkrep.addEventListener("input",calculationPrice),vorot.addEventListener("input",proverkaZnachenii),vorot.addEventListener("input",calculationPrice),kolitka.addEventListener("input",proverkaZnachenii),kolitka.addEventListener("input",calculationPrice),data1.addEventListener("input",scritStep2),data2.addEventListener("input",scritStep2),data10.addEventListener("input",scritStep2),data3.addEventListener("input",scritStep2),data4.addEventListener("input",scritStep2);

document.getElementById('saveBtn').addEventListener('click', function() {
    const element = document.getElementById('step2');
    $('#saveBtn').hide();
    // Создаем и добавляем блок с реквизитами компании
    const companyInfo = document.createElement('div');
    companyInfo.innerHTML = `
        <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #ccc; font-family: Arial, sans-serif;">
            <h3 style="margin: 5px 0;">ООО "ВашаКомпания"</h3>
            <p style="margin: 5px 0;">Адрес: г. Москва, ул. Примерная, 123</p>
            <p style="margin: 5px 0;">Телефон: +7 (123) 456-78-90</p>
            <p style="margin: 5px 0;">Сайт: example.com</p>
        </div>
    `;
    element.appendChild(companyInfo);
    
    html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff'
    }).then(canvas => {
        // Удаляем добавленные реквизиты после создания изображения
        element.removeChild(companyInfo);
        
        // Создаем ссылку для скачивания
        const link = document.createElement('a');
        link.download = 'расчет-забора.png';
        link.href = canvas.toDataURL('image/png');
        
        // Для iOS открываем в новой вкладке
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            const newWindow = window.open();
            newWindow.document.write(`<img src="${link.href}" style="max-width:100%">`);
        } else {
            // Для других устройств - стандартное скачивание
            link.click();
        }
    }).catch(err => {
        console.error('Ошибка при создании изображения:', err);
        element.removeChild(companyInfo);
        alert('Не удалось сохранить изображение. Попробуйте еще раз.');
    });
    $('#saveBtn').show();
});
