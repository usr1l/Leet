/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if (gas.reduce((accum, curVal) => accum + curVal, 0) < cost.reduce((accum, curVal) => accum + curVal, 0)) return -1
    let res = -1;
    const STEPSTARGET = gas.length;
    for (let i = 0; i < gas.length; i++) {
        // current amount of gas
        let gasAccum = 0;

        // current index counter
        let currIndex = i;

        // count steps
        let steps = 0;

        // loop through the stations
        while (currIndex !== i || steps !== STEPSTARGET) {
            gasAccum += gas[currIndex] - cost[currIndex];

            if (gasAccum >= 0) {
                steps += 1
                currIndex = currIndex + 1 >= gas.length ? 0 : currIndex + 1
            } else break;
        };

        if (steps === STEPSTARGET && gasAccum >= 0) return i;
    };

    return res;
};