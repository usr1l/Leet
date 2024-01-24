class Solution:
    def isHappy(self, n: int) -> bool:
        accum = 0
        str_num = f"{n}"
        tracker=set()
        while accum!= n or accum!=1:
            accum=0
            for i in str_num:
                accum += int(i) ** 2

            if accum in tracker:
                break

            tracker.add(accum)
            str_num = f"{accum}"

        return accum==1

