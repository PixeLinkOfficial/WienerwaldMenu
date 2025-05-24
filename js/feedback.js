let lbutton=document.querySelector('.b2');
let body=document.body;

lbutton.addEventListener('click',(e)=>{
    e.stopPropagation(); //important
    document.querySelector('.rldiv').style.opacity=1;
    document.querySelector('.English').disabled=false;
    document.querySelector('.arabic').disabled=false;

});

body.addEventListener('click',()=>{
    document.querySelector('.rldiv').style.opacity=0;
    document.querySelector('.English').disabled=true;
    document.querySelector('.arabic').disabled=true;

});



let butara =document.querySelector('.arabic');

butara.addEventListener('click',()=>{
    document.querySelector('.h31').innerHTML="تقييم";
    document.querySelector('.p21').innerHTML="تقييم الموظفين";
    document.querySelector('.p2').innerHTML="تقييم الخدمة";
    document.querySelector('.p3').innerHTML="تقييم النظافة";
    document.querySelector('.p4').innerHTML="كيف كانت تجربتك العامة؟";
    document.querySelector('.p5').innerHTML="اتصال";
    document.querySelector('.p6').innerHTML=":اي تعليق اخر";
    document.querySelector('.bs1').value="يرسل";
    document.querySelector('.p1').innerHTML="العربية";
    document.getElementById('message').style.textAlign="right";
    document.getElementById('message').placeholder="ادخل رسالتك";
    document.getElementById('contact').style.textAlign="right";
    document.getElementById('contact').placeholder="ادخل معلوماتك";
    document.querySelector('.stars-div').style.flexDirection='row-reverse';
    document.querySelector('.stars-div2').style.flexDirection='row-reverse';
    document.querySelector('.stars-div3').style.flexDirection='row-reverse';
    document.querySelector('.stars-div4').style.flexDirection='row-reverse';
    localStorage.setItem("lan","arb");
});

let buteng =document.querySelector('.English');

buteng.addEventListener('click',()=>{
    document.querySelector('.h31').innerHTML="Feedback";
    document.querySelector('.p21').innerHTML="Staff";
    document.querySelector('.p2').innerHTML="Service";
    document.querySelector('.p3').innerHTML="Hygiene";
    document.querySelector('.p4').innerHTML="How was your overall experience?";
    document.querySelector('.p5').innerHTML="Contact";
    document.querySelector('.p6').innerHTML="Any additional comment:";
    document.querySelector('.bs1').value="Send";
    document.querySelector('.p1').innerHTML="English";
    document.getElementById('message').style.textAlign="left";
    document.getElementById('message').placeholder="Enter your message...";
    document.getElementById('contact').style.textAlign="left";
    document.getElementById('contact').placeholder="contact info...";
    document.querySelector('.stars-div').style.flexDirection='row';
    document.querySelector('.stars-div2').style.flexDirection='row';
    document.querySelector('.stars-div3').style.flexDirection='row';
    document.querySelector('.stars-div4').style.flexDirection='row';
    localStorage.setItem("lan","eng");
});

//
document.querySelector('.star-but1').addEventListener('click',()=>{
    document.querySelector('.star-img1').src="img/yellowstar.webp";
    document.querySelector('.star-img2').src="img/emptystar.png";
    document.querySelector('.star-img3').src="img/emptystar.png";
    document.querySelector('.star-img4').src="img/emptystar.png";
    document.querySelector('.star-img5').src="img/emptystar.png";
    document.getElementById('mm1').value="1 star";
});
document.querySelector('.star-but2').addEventListener('click',()=>{
    document.querySelector('.star-img1').src="img/yellowstar.webp";
    document.querySelector('.star-img2').src="img/yellowstar.webp";
    document.querySelector('.star-img3').src="img/emptystar.png";
    document.querySelector('.star-img4').src="img/emptystar.png";
    document.querySelector('.star-img5').src="img/emptystar.png";
    document.getElementById('mm1').value="2 star";
});
document.querySelector('.star-but3').addEventListener('click',()=>{
    document.querySelector('.star-img1').src="img/yellowstar.webp";
    document.querySelector('.star-img2').src="img/yellowstar.webp";
    document.querySelector('.star-img3').src="img/yellowstar.webp";
    document.querySelector('.star-img4').src="img/emptystar.png";
    document.querySelector('.star-img5').src="img/emptystar.png";
    document.getElementById('mm1').value="3 star";
});
document.querySelector('.star-but4').addEventListener('click',()=>{
    document.querySelector('.star-img1').src="img/yellowstar.webp";
    document.querySelector('.star-img2').src="img/yellowstar.webp";
    document.querySelector('.star-img3').src="img/yellowstar.webp";
    document.querySelector('.star-img4').src="img/yellowstar.webp";
    document.querySelector('.star-img5').src="img/emptystar.png";
    document.getElementById('mm1').value="4 star";
});
document.querySelector('.star-but5').addEventListener('click',()=>{
    document.querySelector('.star-img1').src="img/yellowstar.webp";
    document.querySelector('.star-img2').src="img/yellowstar.webp";
    document.querySelector('.star-img3').src="img/yellowstar.webp";
    document.querySelector('.star-img4').src="img/yellowstar.webp";
    document.querySelector('.star-img5').src="img/yellowstar.webp";
    document.getElementById('mm1').value="5 star";
});
document.querySelector('.star-but12').addEventListener('click',()=>{
    document.querySelector('.star-img12').src="img/yellowstar.webp";
    document.querySelector('.star-img22').src="img/emptystar.png";
    document.querySelector('.star-img32').src="img/emptystar.png";
    document.querySelector('.star-img42').src="img/emptystar.png";
    document.querySelector('.star-img52').src="img/emptystar.png";
    document.getElementById('mm2').value="1 star";
});
document.querySelector('.star-but22').addEventListener('click',()=>{
    document.querySelector('.star-img12').src="img/yellowstar.webp";
    document.querySelector('.star-img22').src="img/yellowstar.webp";
    document.querySelector('.star-img32').src="img/emptystar.png";
    document.querySelector('.star-img42').src="img/emptystar.png";
    document.querySelector('.star-img52').src="img/emptystar.png";
    document.getElementById('mm2').value="2 star";
});
document.querySelector('.star-but32').addEventListener('click',()=>{
    document.querySelector('.star-img12').src="img/yellowstar.webp";
    document.querySelector('.star-img22').src="img/yellowstar.webp";
    document.querySelector('.star-img32').src="img/yellowstar.webp";
    document.querySelector('.star-img42').src="img/emptystar.png";
    document.querySelector('.star-img52').src="img/emptystar.png";
    document.getElementById('mm2').value="3 star";
});
document.querySelector('.star-but42').addEventListener('click',()=>{
    document.querySelector('.star-img12').src="img/yellowstar.webp";
    document.querySelector('.star-img22').src="img/yellowstar.webp";
    document.querySelector('.star-img32').src="img/yellowstar.webp";
    document.querySelector('.star-img42').src="img/yellowstar.webp";
    document.querySelector('.star-img52').src="img/emptystar.png";
    document.getElementById('mm2').value="4 star";
});
document.querySelector('.star-but52').addEventListener('click',()=>{
    document.querySelector('.star-img12').src="img/yellowstar.webp";
    document.querySelector('.star-img22').src="img/yellowstar.webp";
    document.querySelector('.star-img32').src="img/yellowstar.webp";
    document.querySelector('.star-img42').src="img/yellowstar.webp";
    document.querySelector('.star-img52').src="img/yellowstar.webp";
    document.getElementById('mm2').value="5 star";
});
document.querySelector('.star-but13').addEventListener('click',()=>{
    document.querySelector('.star-img13').src="img/yellowstar.webp";
    document.querySelector('.star-img23').src="img/emptystar.png";
    document.querySelector('.star-img33').src="img/emptystar.png";
    document.querySelector('.star-img43').src="img/emptystar.png";
    document.querySelector('.star-img53').src="img/emptystar.png";
    document.getElementById('mm3').value="1 star";
});
document.querySelector('.star-but23').addEventListener('click',()=>{
    document.querySelector('.star-img13').src="img/yellowstar.webp";
    document.querySelector('.star-img23').src="img/yellowstar.webp";
    document.querySelector('.star-img33').src="img/emptystar.png";
    document.querySelector('.star-img43').src="img/emptystar.png";
    document.querySelector('.star-img53').src="img/emptystar.png";
    document.getElementById('mm3').value="2 star";
});
document.querySelector('.star-but33').addEventListener('click',()=>{
    document.querySelector('.star-img13').src="img/yellowstar.webp";
    document.querySelector('.star-img23').src="img/yellowstar.webp";
    document.querySelector('.star-img33').src="img/yellowstar.webp";
    document.querySelector('.star-img43').src="img/emptystar.png";
    document.querySelector('.star-img53').src="img/emptystar.png";
    document.getElementById('mm3').value="3 star";
});
document.querySelector('.star-but43').addEventListener('click',()=>{
    document.querySelector('.star-img13').src="img/yellowstar.webp";
    document.querySelector('.star-img23').src="img/yellowstar.webp";
    document.querySelector('.star-img33').src="img/yellowstar.webp";
    document.querySelector('.star-img43').src="img/yellowstar.webp";
    document.querySelector('.star-img53').src="img/emptystar.png";
    document.getElementById('mm3').value="4 star";
});
document.querySelector('.star-but53').addEventListener('click',()=>{
    document.querySelector('.star-img13').src="img/yellowstar.webp";
    document.querySelector('.star-img23').src="img/yellowstar.webp";
    document.querySelector('.star-img33').src="img/yellowstar.webp";
    document.querySelector('.star-img43').src="img/yellowstar.webp";
    document.querySelector('.star-img53').src="img/yellowstar.webp";
    document.getElementById('mm3').value="5 star";
});
document.querySelector('.star-but14').addEventListener('click',()=>{
    document.querySelector('.star-img14').src="img/yellowstar.webp";
    document.querySelector('.star-img24').src="img/emptystar.png";
    document.querySelector('.star-img34').src="img/emptystar.png";
    document.querySelector('.star-img44').src="img/emptystar.png";
    document.querySelector('.star-img54').src="img/emptystar.png";
    document.getElementById('mm4').value="1 star";
});
document.querySelector('.star-but24').addEventListener('click',()=>{
    document.querySelector('.star-img14').src="img/yellowstar.webp";
    document.querySelector('.star-img24').src="img/yellowstar.webp";
    document.querySelector('.star-img34').src="img/emptystar.png";
    document.querySelector('.star-img44').src="img/emptystar.png";
    document.querySelector('.star-img54').src="img/emptystar.png";
    document.getElementById('mm4').value="2 star";
});
document.querySelector('.star-but34').addEventListener('click',()=>{
    document.querySelector('.star-img14').src="img/yellowstar.webp";
    document.querySelector('.star-img24').src="img/yellowstar.webp";
    document.querySelector('.star-img34').src="img/yellowstar.webp";
    document.querySelector('.star-img44').src="img/emptystar.png";
    document.querySelector('.star-img54').src="img/emptystar.png";
    document.getElementById('mm4').value="3 star";
});
document.querySelector('.star-but44').addEventListener('click',()=>{
    document.querySelector('.star-img14').src="img/yellowstar.webp";
    document.querySelector('.star-img24').src="img/yellowstar.webp";
    document.querySelector('.star-img34').src="img/yellowstar.webp";
    document.querySelector('.star-img44').src="img/yellowstar.webp";
    document.querySelector('.star-img54').src="img/emptystar.png";
    document.getElementById('mm4').value="4 star";
});
document.querySelector('.star-but54').addEventListener('click',()=>{
    document.querySelector('.star-img14').src="img/yellowstar.webp";
    document.querySelector('.star-img24').src="img/yellowstar.webp";
    document.querySelector('.star-img34').src="img/yellowstar.webp";
    document.querySelector('.star-img44').src="img/yellowstar.webp";
    document.querySelector('.star-img54').src="img/yellowstar.webp";
    document.getElementById('mm4').value="5 star";
});
const noSubmitButtons = document.querySelectorAll('.no-submit');
    // Add event listeners to each button
    noSubmitButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        console.log('Button clicked, but form not submitted!');
      });
    });

function htlan(){
    if(localStorage.getItem('lan')=="arb")
    butara.click();
    }
    htlan();
    