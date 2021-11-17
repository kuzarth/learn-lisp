#lang racket
(provide (all-defined-out))

(define (increment-numbers xs) (map add1 (filter number? xs)))