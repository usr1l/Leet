function hIndex(citations: number[]): number {
    // if (citations.length === 1 && citations[0] == 0) return 0;
    // let h: number = 0;
    // citations.sort((a, b) => b - a);
    // for (let i:number = 0; i < citations.length; i ++) {
    //     if (citations[i] >= i + 1) {
    //         h = i + 1
    //     } else {
    //         break;
    //     }
    // };

    // return h;
    
    return citations.sort((a, b) => b - a).filter((val, i) => val > i).length;
};