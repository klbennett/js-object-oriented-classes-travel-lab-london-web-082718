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

class Route {
  constructor(beginningLocation, endingLocation) {

    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
    
    blocksTravelled() {
      console.log(beginningLocation)
      debugger
    }
  }
}
