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