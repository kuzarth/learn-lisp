## Логические выражения
https://ru.code-basics.com/languages/racket/lessons/expressions

### Задание
Реализуйте функцию `do-today`, которая принимает порядковый номер дня недели (целое число) в качестве аргумента и вычисляется в

- строку `"work"` для дней с понедельника (1) по пятницу (5),
- строку `"rest"` для субботы (6) и воскресенья (7),
- строку `"???"` для всех остальных значений, в том числе и для нечисловых!

```racket
(define (do-today day)
  (cond
    [(and (integer? day) (<= 1 day 7))
     (case day
       [(6 7) "rest"]
       [else "work"])]
    [else "???"]))
```

```js
const doToday = (day) => {
  if (Number.isInteger(day) && 1 <= day && day <= 7) {
    if (day < 6) {
      return 'work';
    } else {
      return 'rest';
    }
  } else {
    return '???';
  }
};
```