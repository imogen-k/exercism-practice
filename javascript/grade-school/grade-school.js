//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {

  constructor() {
    this.db = {}
  }

  roster() {
    return Object.keys(this.db).reduce((k, v) => {
      k[v] = this.db[v].concat()
      return k
    },{})
  }

  add(name, grade) {
    if(grade in this.db) {
      this.db[grade].push(name) 
      this.db[grade].sort()
      } else {
        this.db[grade] = [name]
      }
    }

  grade(grade) {
    if(grade in this.db) {
      return this.db[grade].concat()
    } else {
      return this.db[grade] = []
    }
  }
}

