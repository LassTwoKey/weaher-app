export function debounce(func, delay) {
    let timeoutId;
  
    return function() {
      const context = this;
      const args = arguments;
  
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        func.apply(context, args);
      }, delay);
    };
  }
  
  
 export function getZero(num){
    if(num < 10){
      return `0${num}`
    }
    else{
      return `${num}`;
    }
  }
 
 export  function getTime(){
    let monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    const t = new Date;
    const mounth = t.getMonth();
    const day = t.getDate();
    const fulltime = t.getHours()
    const getMinutes = t.getMinutes()
    const newMonth = monthNames[mounth];

    return {
        mounth : newMonth,
        day : day,
        minutes : getMinutes,
        fulltime : fulltime,
    }
  }