const myself = {
    name : "Yasir",
    age : 23,
    intro : function(hobi) {
        return `Hi, my name is ${this.name} dengan hobi ${hobi}`;
    }
}

console.log(myself.intro('reading'));