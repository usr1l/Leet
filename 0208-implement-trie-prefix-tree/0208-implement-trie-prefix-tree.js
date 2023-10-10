
var Trie = function() {
    this.children = new Map();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currStop = this.children;
    for (const letter of word) {
      if (!(letter in currStop)) {
        currStop[letter] = new Map();
      };
      currStop = currStop[letter];
    };
    currStop.ends = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currStop = this.children;
    for (const letter of word) {
      if (letter in currStop) currStop = currStop[letter];
      else {
        return false;
        }
    };
    return currStop.ends === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currStop = this.children;
    for (const letter of prefix) {
      if (letter in currStop) currStop = currStop[letter];
      else {
        return false;
        }
    };
    return true;
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */