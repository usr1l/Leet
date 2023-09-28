
var MinStack = function() {
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push({
        val,
        min: this.arr.length === 0 ? val : Math.min(val, this.getMin())
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.arr[this.arr.length - 1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */