class Driver {
  constructor(name, start){
    this.name = name;
    // debugger
    this.startDate = new Date(start);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return this.startDate - new Date(endDate);

  }
}
