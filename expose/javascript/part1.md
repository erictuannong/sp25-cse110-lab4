1. values added: 20
2. final result: 20
3. we should not use var because var doesn't care about block scope and will ignore it. No matter matter if add was true or false, it will still add num1 + num2.
4. values added: 20
5. It will return an error because result was only declared in the scope where the if statement was true so accessing it is impossible as it's not defined.
6. It will return an error because result is set to 0 and trying to make any changes to const isn't possible.
7. Same error as described in Question 5.