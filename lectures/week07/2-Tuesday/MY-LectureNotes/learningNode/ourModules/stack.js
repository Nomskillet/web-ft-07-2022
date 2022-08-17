

class Stack {
    constructor(arr) {
        //self = this
        this.arr = []
    }

    // peek,push, pop length

    peek = () => {
        if(this.arr.length > 0){
            return this.arr[this.arr.length -1]
        }

        return undefined
    }

    push = (val) => {
        this.arr.push(val)
    }

    pop = () => {
        this.arr.pop()
    }

    length = () => {
        return this.arr.length;
    }

    
}

module.exports = Stack