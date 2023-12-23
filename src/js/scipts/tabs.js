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

const fiveDaysContent = document.querySelectorAll('.five-days-content');
const btnCloseContent = document.querySelectorAll('.five-days-open');
console.log(btnCloseContent);
console.log(fiveDaysContent);

 function closeContentFiveDays(){
     fiveDaysContent.forEach(item =>{
      item.classList.add('hide');
     })
     btnCloseContent.forEach(btn =>{
      btn.classList.remove('active')
     })
 }

 function openContentFiveDays(i = 0){
    fiveDaysContent[i].classList.remove('hide');
    btnCloseContent[i].classList.add('active');
 }

 closeContentFiveDays()

 btnCloseContent.forEach((item,i)=>{
     item.addEventListener('click',(e)=>{
       closeContentFiveDays();
       openContentFiveDays(i);
     })
 });