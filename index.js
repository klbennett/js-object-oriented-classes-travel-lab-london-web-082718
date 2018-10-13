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
let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
}
    blocksTravelled() {
      console.log(this.beginningLocation)
      console.log(this.endingLocation)
      console.log(this.endingLocation.vertical - this.beginningLocation.vertical)

      let northSouthDistance = this.beginningLocation.vertical - this.endingLocation.vertical;
      let horizontalDistance = this.beginningLocation.horizontal.indexOf() - this.endingLocation.horizontal.indexOf()
    }

}
