#lang racket
(define (maps fns lists) (map map fns lists))

(maps
  (list
   add1
   string?)
  (list
   (list 10 20)
   (list "a" 0)))

; '((11 21) (#t #f))