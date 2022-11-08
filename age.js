const getAge = (birthDateString) => {
    const today = new Date();
    const birthDate = new Date(birthDateString);
  
    const yearsDifference = today.getFullYear() - birthDate.getFullYear();
  
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      return yearsDifference - 1;
    }
  
    return yearsDifference;
  };
  
  console.log(getAge('2018-03-12'));
  
  better one age:
  
  function getAge(dateString) {
  
      var dates = dateString.split("-");
      var d = new Date();
  
      var userday = dates[0];
      var usermonth = dates[1];
      var useryear = dates[2];
  
      var curday = d.getDate();
      var curmonth = d.getMonth()+1;
      var curyear = d.getFullYear();
  
      var age = curyear - useryear;
  
      if((curmonth < usermonth) || ( (curmonth == usermonth) && curday < userday   )){
  
          age--;
  
      }
  
      return age;
  }
  