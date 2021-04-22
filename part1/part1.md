# Lab4 Part1

## Varaibles & Scoping

### Part 1a

### var declaration
 - Line 9 printed: "values added:  20"
 - Line 13 printed: "final result:  20"

 ### let declaration
 - Line 9 printed: "values added:  20"
 - Line 13 returns  an error. It is because the variable result is declared using let declaration. This means the visibility scope of the variable result is limited to the if statement block. It can noe be accessed outside the block (line 13 is outside of the block). Therefore there will be a ReferenceError.

 ### const declaration
  - Line 9 will not print. Line 4 returns an error. It is because result variable is a constant variable and its value can not be changed.
  - Line 13 will not print. In addition to the error mentioned above, line 13 also wants to access the value of result. However, the scope of the constant variable result is within the if statement body. Line 13 can not access the constant variable result.


## Part 1b

### 1
 - Line 12 will print 3. Variable i is declared using var declaration, so variable i can be accessed within the function discountPrices scope (line 12 is within the function discountPrices scope). The input array has 3 elements so variable i will increase from 0 to 2 at each iteration of the for loop. In the last iteration, the value of i is increased from 2 to 3 and failed the condition test of the for loop because 3 is not smaller than 3. Therefore, at line, the value of variable i is 3 and it can be accessed. Thus, it prints 3.

### 2
 - Line 13 will print 150. Variable discountedPrice is desclared using var declaration, so variable discountedPrice can be accessed within the function discountPrices scope(line 13 is within the function discountPrices scope). For each original price in the input array prices, Variable discountedPrice will record the new price after the original price shrinked to the correct value based on the rate of discount. The last original price of the input array is 300 and the rate of discount is 0.5, so the value of discountedPrice after the last iteration is 300*(1-0.5), which is 150. Therefore the value of the variable discountedPrice at line 13 can be accessed and has a value of 150

### 3 
 - Line 14 will print 150. Variable finalPrice is desclared using var declaration, so variable finalPrice can be accessed within the function discountPrices scope(line 14 is within the function discountPrices scope). Variable finalPrice will record the final price of the discounted Price after it is rounded to nearest percentile(remain two digits on the right of the digit dot). Since the discountedPrice of the last element in the input array is 150, adter the rounding to its nearest percentile, it is still 150. Therefore, the value of variable finalPrice at line 14 can be accessed and has a value of 150.

 ### 4
 - This function will return a new array: [50,100,150]. It is because this function will iterate through every element in the input array and caculate it new price after multiplying (1-discount rate). In addition, this function will round each discounted price to its nearest percentile. In this case, the input array is [100,200,300] and discount rate is 0.5, so the discounted price after multiplying (1-0.5) is [50,100,150]. Since each new price is an integer, the rounding will not change anything. Therefore the returned array is [50,100,150]. In addition,discounted variable is declared with var declaration and in the same of the return, so its value can be accessed and returned.

 ### 5
 - The ReferenceError will happen at line 12. It is because the variable i is declared using let declaration. So the scope of the variable i will be limited within the for loop. Since line 12 is outside of the for loop, it can not access the value of variable i.

 ### 6
 - The ReferenceError will happen at line 13. It is because the variable discountedPrice is declared using let declaration within the for loop. So the scope of the variable discountedPrice will be limited within the for loop. Since line 13 is outside of the for loop, it can not access the value of variable discountedPrice.

 ### 7
 - Line 14 will print 150. This line will correctly print the value of the variable finalPrice. Even thgough variable finalPrice is declared using let declaration, it is declared inside the function discountPrices but out side the for loop. Therefore, since line 14 is in the same block with the declaration of finalPrice, line 14 can access the value of the variable finalPrice. The value of the variabl finalPrice is 150, and it is exaplained in the question 3 above.

 ### 8
 - This function will still return the array [50,100,150]. Even though we changed the declaration of variable discounted to let declaration, it is declared inside the function discountPrices block outside the for loop block. Since line 16 is also inside thr fuction descountPrices block,  line 16 still have access to the variable discounted. The value of the discounted array will still be updated in each iteration of the for loop: after calculating the new price and rounding, it will push the new value to the discounted array. Therefore the returned array of the function is still [50,100,150]

 ### 9 
 - Line 11 will has a ReferenceError.It is because the variable i is declared using let declaration. So the scope of the variable i will be limited within the for loop. Since line 11 is outside of the for loop, it can not access the value of variable i.

 ### .0
 - Line 12 will print 3. On line 4, the variable length is declared using constant declaration and the length of the input array is assigned to it. After line 4, the value of the variable length does not change. Therefore, on line 12, since it is in the same function block, it will print the value of length, which is 3 in this case.

 ### .1
 - The function will still return the array [50,100,150]. As we mentioned above in line 10, even though the variable length is changed to constat declaration, it does not affect anything because its value is never changed. The variable discounted is also changed to const declaration. In the function discountPrices, the only place we update the value of the variable discounted is in line 8. This will not violate the contraint of const declaration. It is because we are just pushing more elements into the same array. Const discounted is still holding the same array. It is just the array itself is changing. Thereofore discounted variable will not affect anything. For the variable discountedPrice, it is changed to constant declaration. Eventhough we update the value of the variable discountedPice, we re-declared the varaible discountedPice as constant and assign a new value to it at the same time. Therefore this will not cuase an error and will not make a difference. Therefore, since changing line 3, line 4, and line 7 does not make a difference, the rest of the function is the same as in question 8. This function will correctly update the prices in the input array based on the discount rate and round them to their nearest percentiles. Thus the return array is still [50,100,150]


 ## Data Types

 ### .2.
 A. student.name
 B. student['Grad year']
 C. student.greeting()
 D. student['Favorite Teacher'].name
 E. student.courseLoad[0]

 ## Basic Operators & Type Conversion

 ### .3.
 A. ‘3’ + 2. Output: '32'. It is because integers map to their exact string representation. So 2 will be mapped to '2'. It will then perform string concatenation operation, which will return '32'.
 B. ‘3’ - 2. Output: 1. It is because in this case, string '3' will be converted to 3 and then perform math operation subtraction between 3 and 2, which will return 1.
 C. 3 + null. Output: 3. It is because null will be converted to 0. Then this is a math operation 3+0, which will output 3.
 D. '3' + null. Output: '3null'. It is because null will be convert to string 'null'. Then two strings will be concatenated together and give us '3null'.
 E. true + 3. Output: 4. It is because boolean true will be first converted to 1 and then add to 3, which will give us 4.
 F. false + null. Output:0. It is because false will be converted to 0 and null will be converted to 0. 0+0 will give us 0.
 G. "3" + undefined. Output: '3undefined'. It is because undefined will be converted to 'undefined' first and then "3" will be concatenate to "undefined" and give us '3undefined'.
 H. "3" - undefined. Output: NaN. "3" will be convert to integer 3. Undefine will be converted to NaN. Any number subtract NaN will be NaN because the number representation for undefined is not defined.

  ### .4.
 A. '2' > 1. Output true. It is because it will first convert the string '2' to integer and then check if 2 > 1, which will give us true.
 B. '2' < '12'. Output: false. These two strings will be compared in string format. And since smaller length of string will be "greater", this this will return false.
 C. 2 == '2'. Output: true. It is because '2' will be converted to integer 2 and 2==2 will return true because their values are the same
 D. 2 === '2'. Output: false. It is because === will not allow conversion. Since they are different types, it will return false.
 E. true == 2. Output: false. It is because boolean true will be first converted to 1 and then compared to 2, which will give us false.
 F. true === Boolean(2). Output:true. It is because Boolean(2) will first convert the integer value 2 into boolean true. Since true and true are the same value of the same type, it will output true.

 ### .5.
 The difference between the == and === operators is that == will allow data type conversion of the data types of two sides do not match. However, for === operator, it does not allow data type conversion on both sides of the operator.

 ### .6.
 The solution is in the file part1b-question16.js

 ### .7. 
 The result is [2,4,6]. At first, there is a function called doSomething, which takes in a numebr and return the input number multilied by 2. Then we pass in an array [1,2,3] and the function dosomething into the function modifyArray. Inside modifyArray, the input array is called array and input function is called callback. The function first prepares a new array. Then the function itertate through every element in the input array (called array in the function) and then operate callback operation on each of the element. Remeber that we passed in doSomething as the function to the parameter, so callback function is doSomething function. Therefore, as we discussed before, each element of the input array will be multiplied by 2 and pushed into the new array. After the for loop ends, the new array will have every elemnt in the input array multiplied by 2. Therefore result is [2,4,6].

 ### .8.
 The solution is in the file part1b-question18.js

 ### .9.
 The output of the code is :
 1
 4
 3
 2