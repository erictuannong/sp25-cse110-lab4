1. It will print 3: That is because i will leak out of the scope due to var just ignoring it.
2. It will print 150: That is because discountedPrice which was declared in the for loop will leak out of its scope.
3. It will print 150: That is because finalPrice which was declared in the for loop will leak out of its scope.
4. It will return [50, 100, 150] because we declared the array earlier in the function and in the for loop we created new elements to push to it.
5. It will return an error because unlike var which ignores the scope it was declared in, let won't allow that and will remain in the scope it was created in. Hence why we receive an error for printing out i.
6. Same reasoning as Question 5 but for discountedPrice.
7. It will print 150 because unlike the previous two questions, this one was declared towards the beginning of the function and not in the scope of the for loop.
8. It will return [50, 100, 150] and the reasoning is the same as Question 4.
9. It will return an error, same reasoning as Question 5.
10. It will print 3 because the const variable isn't being modified after its declaration.
11. It will return [50, 100, 150] with the only difference being that we aren't rounding like the previous functions.
12. 
    1.  student.name;
    2.  student['Grad Year'];
    3.  student.greeting();
    4.  student['Favorite Teacher'].name;
    5.  student.courseLoad[0];
13. 
    1.  '32'
    2.  1
    3.  3
    4.  '3null'
    5.  4
    6.  0
    7.  '3undefined'
    8.  NaN
14. 
    1.  true
    2.  false
    3.  true
    4.  false
    5.  false
    6.  true    
15. The == is the equality test between two types. Just like the arithmetic operators it will automatically do data type conversion if needed. The === is the strict equality operator which checks the equality without type conversion.
17. It will return [2, 4, 6]. So what happens is the callback in our case calls another function doSomething which has a parameter of num and returns num * 2 which is what happens for each of the original array elements.
19. The output: 1 4 3 2
