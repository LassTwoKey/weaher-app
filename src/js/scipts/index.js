const degreeBtn = document.querySelector('.degree');
const fahrenheitBtn = document.querySelector('.fahrenheit');

degreeBtn.addEventListener('click',(e)=>{
    if(e.target === degreeBtn && fahrenheitBtn.classList.contains('selected'));
    degreeBtn.classList.add('selected');
    fahrenheitBtn.classList.remove('selected');

})
fahrenheitBtn.addEventListener('click',(e)=>{
    if(e.target === fahrenheitBtn && degreeBtn.classList.contains('selected')){
        fahrenheitBtn.classList.add('selected');
        degreeBtn.classList.remove('selected');
    }
})

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 15,
    breakpoints: {
        // when window width is >= 320px
        992: {
          spaceBetween: 20
        },
    }
});

const tabsButtons = document.querySelectorAll('.tabs-button');
const contentTabs = document.querySelectorAll('.content-full-tabs');


function hideTabsContent(){
   tabsButtons.forEach(item =>{
    item.classList.remove('selected')
   })
   contentTabs.forEach(item =>{
    item.classList.add('hide')
   })
}

 function showTabsContent(i){
    tabsButtons[i].classList.add('selected');
    contentTabs[i].classList.remove('hide');
 }

 hideTabsContent()
 showTabsContent(0)
 
tabsButtons.forEach((btn,i)=>{
   btn.addEventListener('click',()=>{
    hideTabsContent()
    showTabsContent(i)
   })
})

const inputSeacrh = document.querySelector('.search');

 function inputWork(){
    document.querySelector('.header-search-input img').classList.add('hide');
    document.querySelector('.search-list').classList.remove('hide')
    document.querySelector('.close').classList.remove('hide');
 }

 function inputClose(){
  document.querySelector('.header-search-input img').classList.remove('hide');
  document.querySelector('.search-list').classList.add('hide')
  document.querySelector('.close').classList.add('hide');
  inputSeacrh.value = '';
}


inputSeacrh.addEventListener('click',inputWork)

document.querySelector('.close').addEventListener('click',inputClose)

document.body.addEventListener('click',(e)=>{
  if(e.target === document.body){
     inputClose()
  }
})

document.body.addEventListener('keydown',(e)=>{
  if(e.key === 'Escape' ){
     inputClose()
  }
})