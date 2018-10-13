class Driver {
  constructor(name, start){
    this.name = name;
    // debugger
    this.startDate = new Date(start);
  }

  yearsExperienceFromBeginningOf(endDate) {
    let myDate = new Date().getFullYear(), 0, 1);
    return this.startDate.getFullYear() - myDate;
  }
}
