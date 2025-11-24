a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
b = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3]

c = [11, 13, 15, 17, 19, 1, 3, 5, 7, 9]
l = 0
r = 9
mid = 19

c_sorted = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
c_rotated = [7, 9, 11, 13, 15, 17, 19, 1, 3, 5]
c__rotated = [15, 17, 19, 1, 3, 5, 7, 9, 11, 13]
c_rotated__ = [3, 5, 7, 9, 11, 13, 15, 17, 19, 1]
c_rotated = [13, 15, 17, 19, 1, 3, 5, 7, 9, 11]

# right side:
# target < mid, target < right, target > mid, target > right, target > mid, target > right
# left side:
# target < mid, target >= left
