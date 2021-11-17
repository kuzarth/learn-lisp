#lang racket
(provide (all-defined-out))

(define (do-today day)
  (cond
    [(and (integer? day) (<= 1 day 7))
     (case day
       [(6 7) "rest"]
       [else "work"])]
    [else "???"]))