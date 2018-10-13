class Driver {
  constructor(name, start){
    this.name = name;
    // debugger
    this.startDate = new Date(start);
  }

  yearsExperienceFromBeginningOf(endDate) {
    console.log(endDate)
    return endDate - this.startDate.getFullYear();
  }
}
