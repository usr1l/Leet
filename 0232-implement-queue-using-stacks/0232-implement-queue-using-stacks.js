
var MyQueue = function() {
    this.stackOne = [];
    this.stackTwo = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackOne.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.stackTwo.length === 0) {
        while (this.stackOne.length) this.stackTwo.push(this.stackOne.pop());
    };
    return this.stackTwo.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stackTwo.length === 0) {
        while (this.stackOne.length) this.stackTwo.push(this.stackOne.pop());
    };
    return this.stackTwo[this.stackTwo.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !(this.stackOne.length > 0 || this.stackTwo.length > 0);
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */