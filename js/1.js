import {cart,savetolocals} from "./cart.js";
let x=true;
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
})

//s

let lbutton=document.querySelector('.lbutton');
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
  console.log(x);
  document.querySelector('body').style.fontFamily= "'Noto Sans Arabic', serif";
  document.querySelector('body').style.fontWeight= 500;
  document.querySelector('body').style.lineHeight = "15px"; 
  document.querySelector('body').style.textAlign = "right"; 
  document.querySelector('#sc3m').style.textAlign = "left"; 
  document.querySelectorAll('p').forEach(el1 => {
    el1.style.paddingRight = "25px";
  });
document.querySelectorAll('label').forEach(el1 => {
  if (!el1.closest('p')) {
    el1.style.paddingRight = "25px";
  }
});

  if(x)
  {
  document.querySelectorAll('.bmm1m').forEach(el => {
    el.style.order = 1;
  });

  // Apply order to all elements with class .bmm2m
  document.querySelectorAll('.bmm2m').forEach(el => {
    el.style.order = 2;
  });

  // Apply grid template to all .bm elements inside .div1m
  document.querySelectorAll('.div1m .bm').forEach(el => {
    el.style.gridTemplateColumns = "1.5fr 2fr";
  });

  
  document.querySelectorAll('.wasat').forEach(el => {
    el.innerText="وسط";
  });document.querySelectorAll('.kabr').forEach(el => {
    el.innerText="كبير";
  });


  document.querySelector('.h1').innerText="برجر";
  document.querySelector('.b1').innerText="تشيز برجر";
  document.querySelector('.b2').innerText="كلاسيك برجر";
  document.querySelector('.b3').innerText="دبل برجر";
  document.querySelector('.b4').innerText="زنجر";
  document.querySelector('.b5').innerText="ستيك برجر";
  document.querySelector('.b6').innerText="زنجر باربيكيو";
  document.querySelector('.b1d').innerText="الخبز الخاص بالبرغر، شريحة لحم بقري، خس، طماطم، بصل، وجبنة";
  document.querySelector('.b2d').innerText="خبز برغر، شريحة لحم، خس، طماطم، بصل";
  document.querySelector('.b3d').innerText="خبز برغر، شريحتا لحم، خس، بصل، طماطم";
  document.querySelector('.b4d').innerText="خبز برغر، قطعة دجاج مقرمشة، خس، طماطم، مايونيز";
  document.querySelector('.b5d').innerText="خبز برغر، شريحة لحم، جبنة، خس، بصل، طماطم";
  document.querySelector('.b6d').innerText="خبز برغر، قطعة دجاج مقرمشة، خس، طماطم، مايونيز";

  document.querySelector('.h2').innerText="سندويتش";
  document.querySelector('.p11').innerText="تويستر زنجر";
  document.querySelector('.p22').innerText="تشيز تويستر";
  document.querySelector('.p33').innerText="فاهيتا لحم";
  document.querySelector('.p44').innerText="فاهيتا دجاج";
  document.querySelector('.p55').innerText="شاورما وينروالد";
  document.querySelector('.p11d').innerText="خبز تورتيلا، دجاج زنجر مقرمش، خس، طماطم، مايونيز";
  document.querySelector('.p22d').innerText="خبز تورتيلا، دجاج تندر مقرمش، خس، طماطم،جبنه، مايونيز";
  document.querySelector('.p33d').innerText="خبز تورتيلا،   فاهيتا لحم، خس، طماطم, مايونيز";
  document.querySelector('.p44d').innerText="خبز تورتيلا،   فاهيتا دجاج، خس، طماطم, مايونيز";
  document.querySelector('.p55d').innerText="خبز شاورما، دجاج  شاورما، خس، طماطم، مايونيز";

  document.querySelector('.h3').innerText="بيتزا";
  document.querySelector('.pi1').innerText="بيتزا حبل ضهر";
  document.querySelector('.pi2').innerText="ماركريتا بيتزا";
  document.querySelector('.pi3').innerText="بيتزا خضراوات";
  document.querySelector('.pi4').innerText="بيتزا لحم";
  document.querySelector('.pi5').innerText="بيتزا دجاج";
  document.querySelector('.pi6').innerText="بيتزا تونا";
  document.querySelector('.pi7').innerText="بيتزا مشكل";
  document.querySelector('.pi8').innerText="بيتزا بيبروني";
  document.querySelector('.pi9').innerText="بيتزا وينروالد";

  document.querySelector('.h4').innerText="كرسبي";
  document.querySelector('.t11').innerText="تندر دجاج";
  document.querySelector('.t22').innerText="دجاج مسحب";
  document.querySelector('.t33').innerText="افخاذ دجاج";
  document.querySelector('.t44').innerText="دجاج اسكالوب";
  document.querySelector('.t11d').innerText="يُقدَّم مع البطاطس المقلية والبيبسي";
  document.querySelector('.t22d').innerText="يُقدَّم مع البطاطس المقلية والبيبسي";
  document.querySelector('.t33d').innerText="يُقدَّم مع البطاطس المقلية والبيبسي";
  document.querySelector('.t44d').innerText="يُقدَّم مع البطاطس المقلية والبيبسي";

  document.querySelector('.h5').innerText="وجبات عائلية";
  document.querySelector('.f11').innerText="كلاسيك توفير";
  document.querySelector('.f22').innerText="وينروالد ميل";
  document.querySelector('.f33').innerText="بيتزا هاوس";
  document.querySelector('.f11d').innerText="١٤ قطعة دجاج، زجاجة بيبسي، خبز، سلطة، وبطاطس مقلية";
  document.querySelector('.f22d').innerText="١٦ قطعة دجاج، زجاجة بيبسي، خبز، سلطة، وبطاطس مقلية";
  document.querySelector('.f33d').innerText="بيتزا بيبروني & بيتزا ماركريتا & بيبسي & فنكر";

  document.querySelector('.h6').innerText="ريزو";
  document.querySelector('.r11').innerText="كلاسيك ريزو";
  document.querySelector('.r22').innerText="ريزو بلجبن";
  document.querySelector('.r33').innerText="ريزو مدخن";

  document.querySelector('.h7').innerText="وجبات دايت";
  document.querySelector('.dt11').innerText="سلطة دجاج";
  document.querySelector('.dt22').innerText="ستيك دجاج";
  document.querySelector('.dt33').innerText="دجاج و رز";

  document.querySelector('.h8').innerText="وجبات الاطفال";
  document.querySelector('.kd11').innerText="1 وجبة الاطفال";
  document.querySelector('.kd22').innerText="2 وجبة الاطفال";
  document.querySelector('.kd33').innerText="3 وجبة الاطفال";

  document.querySelector('.h9').innerText="المقبلات و الاطباق الجانبية";
  document.querySelector('.ap11').innerText="مقبلات وسط";
  document.querySelector('.ap22').innerText="مقبلات كبير";
  document.querySelector('.ap33').innerText="فنكر";
  document.querySelector('.ap44').innerText="بطاطس ويدجز";
  document.querySelector('.ap55').innerText="اصابع موتزاريلا";
  document.querySelector('.ap66').innerText="صوص وينر";
  document.querySelector('.ap77').innerText="صوص باربيكيو";
  document.querySelector('.ap88').innerText="صوص شيدر";

  document.querySelector('.h10').innerText="المشروبات";
  document.querySelector('.dr1').innerText="بيبسي";

  document.querySelector('.h11').innerText="المشروبات الساخنة";
  document.querySelector('.hd1').innerText="شاي";
  document.querySelector('.hd2').innerText="اميركانو";
  document.querySelector('.hd3').innerText="كابتشينو";
  document.querySelector('.hd4').innerText="ايسبرسو سنجل";
  document.querySelector('.hd5').innerText="ايسبرسو دبل";
  document.querySelector('.hd6').innerText="قهوة تركية";
  document.querySelector('.hd7').innerText="هوت شوكلت";

  document.querySelector('.h12').innerText="ايسد كوفي";
  document.querySelector('.ic1').innerText="ايسد لاتيه ";
  document.querySelector('.ic2').innerText="ايسد موكا ";

}
else
{
  console.log("active");
  document.querySelector('.h1m').innerText="برجر";
  document.querySelector('.b1mmm').innerText="جيز برجر";
  document.querySelector('.b2mmm').innerText="كلاسيك برجر";
  document.querySelector('.b3m').innerText="دبل برجر";
  document.querySelector('.b4m').innerText="زنجر";
  document.querySelector('.b5m').innerText="ستيك برجر";
  document.querySelector('.b6m').innerText="زنجر باربيكيو";

  document.querySelector('.h2m').innerText="سندويتش";
  document.querySelector('.p11m').innerText="تويستر زنجر";
  document.querySelector('.p22m').innerText="تشيز تويستر";
  document.querySelector('.p33m').innerText="فاهيتا لحم";
  document.querySelector('.p44m').innerText="فاهيتا دجاج";
  document.querySelector('.p55m').innerText="شاورما وينروالد";

  document.querySelector('.h3m').innerText="بيتزا";
  document.querySelector('.pi1m').innerText="بيتزا حبل ضهر";
  document.querySelector('.pi2m').innerText="ماركريتا بيتزا";
  document.querySelector('.pi3m').innerText="بيتزا خضراوات";
  document.querySelector('.pi4m').innerText="بيتزا لحم";
  document.querySelector('.pi5m').innerText="بيتزا دجاج";
  document.querySelector('.pi6m').innerText="بيتزا تونا";
  document.querySelector('.pi7m').innerText="بيتزا مشكل";
  document.querySelector('.pi8m').innerText="بيتزا بيبروني";
  document.querySelector('.pi9m').innerText="بيتزا وينروالد";

  document.querySelector('.h4m').innerText="كرسبي";
  document.querySelector('.t11m').innerText="تندر دجاج";
  document.querySelector('.t22m').innerText="دجاج مسحب";
  document.querySelector('.t33m').innerText="افخاذ دجاج";
  document.querySelector('.t44m').innerText="دجاج اسكالوب";

  document.querySelector('.h5m').innerText="وجبات عائلية";
  document.querySelector('.f11m').innerText="كلاسيك توفير";
  document.querySelector('.f22m').innerText="وينروالد ميل";
  document.querySelector('.f33m').innerText="بيتزا هاوس";

  document.querySelector('.h6m').innerText="ريزو";
  document.querySelector('.r11m').innerText="كلاسيك ريزو";
  document.querySelector('.r22m').innerText="ريزو بلجبن";
  document.querySelector('.r33m').innerText="ريزو مدخن";

  document.querySelector('.h7m').innerText="وجبات دايت";
  document.querySelector('.dt11m').innerText="سلطة دجاج";
  document.querySelector('.dt22m').innerText="ستيك دجاج";
  document.querySelector('.dt33m').innerText="دجاج و رز";

  document.querySelector('.h8m').innerText="وجبات الاطفال";
  document.querySelector('.kd11m').innerText="1 وجبة الاطفال";
  document.querySelector('.kd22m').innerText="2 وجبة الاطفال";
  document.querySelector('.kd33m').innerText="3 وجبة الاطفال";

  document.querySelector('.h9m').innerText="المقبلات و الاطباق الجانبية";
  document.querySelector('.ap11m').innerText="مقبلات وسط";
  document.querySelector('.ap22m').innerText="مقبلات كبير";
  document.querySelector('.ap33m').innerText="فنكر";
  document.querySelector('.ap44m').innerText="بطاطس ويدجز";
  document.querySelector('.ap55m').innerText="اصابع موتزاريلا";
  document.querySelector('.ap66m').innerText="صوص وينر";
  document.querySelector('.ap77m').innerText="صوص باربيكيو";
  document.querySelector('.ap88m').innerText="صوص شيدر";

  document.querySelector('.h10m').innerText="المشروبات";
  document.querySelector('.dr1m').innerText="بيبسي";

  document.querySelector('.h11m').innerText="المشروبات الساخنة";
  document.querySelector('.hd1m').innerText="شاي";
  document.querySelector('.hd2m').innerText="اميركانو";
  document.querySelector('.hd3m').innerText="كابتشينو";
  document.querySelector('.hd4m').innerText="ايسبرسو سنجل";
  document.querySelector('.hd5m').innerText="ايسبرسو دبل";
  document.querySelector('.hd6m').innerText="قهوة تركية";
  document.querySelector('.hd7m').innerText="هوت شوكلت";

  document.querySelector('.h12m').innerText="ايسد كوفي";
  document.querySelector('.ic1m').innerText="ايسد لاتيه ";
  document.querySelector('.ic2m').innerText="ايسد موكا ";

}

    
    localStorage.setItem("lan","arb");
});

let buteng =document.querySelector('.English');

buteng.addEventListener('click',()=>{
    
    localStorage.setItem("lan","eng");
    window.location.reload(true);
});


//
let ischangedL = false;

function scrollToElement(targetId) {
  var targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Calculate the offset position of the target element
    var targetPosition = targetElement.offsetTop;

    // Height of the fixed header (240px)
    var offset = 240;

    // Scroll to the adjusted position
    window.scrollTo({
      top: targetPosition - offset, // Adjust by subtracting the fixed header height
      behavior: 'instant', // Smooth scrolling
    });
  } else {
    console.error(`Element with id "${targetId}" not found.`);
  }
}

const butscrol1 = document.querySelector('.item1');
butscrol1.addEventListener('click', function () {
  if (!ischangedL) {
    scrollToElement('sc1m');
  } else {
    scrollToElement('sc1');
  }
});

const butscrol2 = document.querySelector('.item2');
butscrol2.addEventListener('click', function () {
  if (!ischangedL) {
    scrollToElement('sc2m');
  } else {
    scrollToElement('sc2');
  }
});

const butscrol3 = document.querySelector('.item3');
butscrol3.addEventListener('click', function () {
  if (!ischangedL) {
    scrollToElement('sc3m');
  } else {
    scrollToElement('sc3');
  }
});

const butscrol4 = document.querySelector('.item4');
butscrol4.addEventListener('click', function () {
  if (!ischangedL) {
    scrollToElement('sc4m');
  } else {
    scrollToElement('sc4');
  }
});

const butscrol5 = document.querySelector('.item5');
butscrol5.addEventListener('click', function () {
  if (!ischangedL) {
    scrollToElement('sc5m');
  } else {
    scrollToElement('sc5');
  }
});

const butscrol6 = document.querySelector('.item6');
butscrol6.addEventListener('click', function () {
  if (!ischangedL) {
    scrollToElement('sc6m');
  } else {
    scrollToElement('sc6');
  }
});

const butscrol7 = document.querySelector('.item7');
butscrol7.addEventListener('click', function () {
  if (!ischangedL) {
    scrollToElement('sc7m');
  } else {
    scrollToElement('sc7');
  }
});

const butscrol8 = document.querySelector('.item8');
butscrol8.addEventListener('click', function () {
  if (!ischangedL) {
    scrollToElement('sc8m');
  } else {
    scrollToElement('sc8');
  }
});

const butscrol9 = document.querySelector('.item9');
butscrol9.addEventListener('click', function () {
  if (!ischangedL) {
    scrollToElement('sc9m');
  } else {
    scrollToElement('sc9');
  }
});

const butscrol10 = document.querySelector('.item10');
butscrol10.addEventListener('click', function () {
  if (!ischangedL) {
    scrollToElement('sc10m');
  } else {
    scrollToElement('sc10');
  }
});

const butscrol11 = document.querySelector('.item11');
butscrol11.addEventListener('click', function () {
  if (!ischangedL) {
    scrollToElement('sc11m');
  } else {
    scrollToElement('sc11');
  }
});

const butscrol12 = document.querySelector('.item12');
butscrol12.addEventListener('click', function () {
  if (!ischangedL) {
    scrollToElement('sc12m');
  } else {
    scrollToElement('sc12');
  }
});

// Example of toggling the layout (to simulate your layout change button)
const layoutToggleButton = document.querySelector('.layout-toggle'); // Change to your layout toggle button selector
layoutToggleButton.addEventListener('click', function () {
  ischangedL = !ischangedL;

  // Toggle visibility of sc1, sc2, sc3 vs sc1m, sc2m, sc3m
  document.getElementById('sc1').style.display = ischangedL ? 'block' : 'none';
  document.getElementById('sc2').style.display = ischangedL ? 'block' : 'none';
  document.getElementById('sc3').style.display = ischangedL ? 'block' : 'none';
  document.getElementById('sc4').style.display = ischangedL ? 'block' : 'none';
  document.getElementById('sc5').style.display = ischangedL ? 'block' : 'none';
  document.getElementById('sc6').style.display = ischangedL ? 'block' : 'none';
  document.getElementById('sc7').style.display = ischangedL ? 'block' : 'none';
  document.getElementById('sc8').style.display = ischangedL ? 'block' : 'none';
  document.getElementById('sc9').style.display = ischangedL ? 'block' : 'none';
  document.getElementById('sc10').style.display = ischangedL ? 'block' : 'none';
  document.getElementById('sc11').style.display = ischangedL ? 'block' : 'none';
  document.getElementById('sc12').style.display = ischangedL ? 'block' : 'none';

  document.getElementById('sc1m').style.display = ischangedL ? 'none' : 'block';
  document.getElementById('sc2m').style.display = ischangedL ? 'none' : 'block';
  document.getElementById('sc3m').style.display = ischangedL ? 'none' : 'block';
  document.getElementById('sc4m').style.display = ischangedL ? 'none' : 'block';
  document.getElementById('sc5m').style.display = ischangedL ? 'none' : 'block';
  document.getElementById('sc6m').style.display = ischangedL ? 'none' : 'block';
  document.getElementById('sc7m').style.display = ischangedL ? 'none' : 'block';
  document.getElementById('sc8m').style.display = ischangedL ? 'none' : 'block';
  document.getElementById('sc9m').style.display = ischangedL ? 'none' : 'block';
  document.getElementById('sc10m').style.display = ischangedL ? 'none' : 'block';
  document.getElementById('sc11m').style.display = ischangedL ? 'none' : 'block';
  document.getElementById('sc12m').style.display = ischangedL ? 'none' : 'block';

});



//

//
let count= parseInt(localStorage.getItem("countcart")) || 0;
count=0;
cart.forEach((item)=>{
  count+=item.quantity;
});
console.log(count);
document.querySelector('.cart-num').innerHTML=count;
function f12(){
  if(parseInt(localStorage.getItem("countcart"))===0)
  {
    document.querySelector('.cart-bar').style.opacity=0;
    document.querySelector('.cart-bar').style.pointerEvents="none";
    
  }else
  {
    document.querySelector('.cart-bar').style.opacity=1;  
    document.querySelector('.cart-bar').style.pointerEvents="all";  
  }
}
f12();
//1

document.querySelectorAll('.js-add').forEach((button)=>{
  button.addEventListener('click',()=>{
    let it=button.dataset.productId;
    let matching;

    cart.forEach((item)=>{
      if(item.productid==it)
      {
        matching=item;
      }
    });

    if(matching)
      matching.quantity+=1;
    else{
      cart.push(
      {
          productid:it,
          quantity:1
      }
      );
      
    }
    console.log(cart);
    savetolocals();
    
    count=0;
    cart.forEach((item)=>{
      count+=item.quantity;
    });
    localStorage.setItem("countcart",count.toString());
    document.querySelector('.cart-num').innerHTML=count;
     f12();

  });
 
});

//end of 1

let scrollEnabled = true; // Flag to enable/disable scrolling
let scrollHandlers = []; // Store scroll event handlers to remove them later

function enableScrollEffect() {
  for (let i = 1; i <= 12; i++) {
    const verticalElement = document.querySelector(`.ver${i}`);
    const horizontalContainer = document.querySelector('.items');
    const horizontalTarget = document.querySelector(`.hor${i}`);

    function checkScrollPosition() {
      if (!scrollEnabled) return; // Stop execution if disabled

      const rect = verticalElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        const isRTL = document.documentElement.dir === 'rtl';
        let scrollPosition = isRTL
          ? horizontalContainer.scrollWidth - horizontalTarget.offsetLeft - horizontalTarget.offsetWidth - 30
          : horizontalTarget.offsetLeft - 30;

        horizontalContainer.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }

    // Add event listener and store reference
    window.addEventListener('scroll', checkScrollPosition);
    scrollHandlers.push({ element: window, handler: checkScrollPosition });

    checkScrollPosition();
  }
}
function htlan(){
if(localStorage.getItem('lan')=="arb")
  butara.click();
else if(localStorage.getItem('lan')=="kur")
  butkur.click()
}
htlan();

function enableAlternateScrollEffect() {
  for (let i = 1; i <= 12; i++) {
    const verticalElement = document.querySelector(`.vert${i}`);
    const horizontalContainer = document.querySelector('.items');
    const horizontalTarget = document.querySelector(`.hort${i}`);

    function checkScrollPosition() {
      if (scrollEnabled) return; // Stop execution if enabled

      const rect = verticalElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        const isRTL = document.documentElement.dir === 'rtl';
        let scrollPosition = isRTL
          ? horizontalContainer.scrollWidth - horizontalTarget.offsetLeft - horizontalTarget.offsetWidth - 30
          : horizontalTarget.offsetLeft - 30;

        horizontalContainer.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }

    // Add event listener and store reference
    window.addEventListener('scroll', checkScrollPosition);
    scrollHandlers.push({ element: window, handler: checkScrollPosition });

    checkScrollPosition();
  }
}

// Call the function to enable original scroll effect initially
enableScrollEffect();

// Toggle scroll behavior when clicking button with class 'chbut'
let isch = false;
document.querySelector('.chbut').addEventListener('click', () => {
  if (!isch) {
    document.querySelector('.ch1fr').style.display = 'none';
    document.querySelector('.ch2fr').style.display = 'block';
    scrollEnabled = false; // Disable original scrolling
    removeScrollEffect(); // Remove original event listeners
    enableAlternateScrollEffect(); // Enable alternate scrolling
    document.querySelector('.chimg').src = "img/menubarwn.png";
    document.querySelector('.chimg').style.width = '20px';
    isch = true;
    x=false;
  } else {
    document.querySelector('.ch2fr').style.display = 'none';
    document.querySelector('.ch1fr').style.display = 'block';
    x=true;
    scrollEnabled = true; // Re-enable original scrolling
    removeScrollEffect(); // Remove alternate event listeners
    enableScrollEffect(); // Re-add original event listeners
    document.querySelector('.chimg').src = "img/squarebarwm.png";
    document.querySelector('.chimg').style.width = '20px';
    isch = false;
  }
});

// Function to remove all scroll event listeners
function removeScrollEffect() {
  scrollHandlers.forEach(({ element, handler }) => {
    element.removeEventListener('scroll', handler);
  });
  scrollHandlers = []; // Clear stored handlers
}

