#lang racket
(provide next-chars)

(define (next-char s) (integer->char (add1 (char->integer s))))

(define (next-chars str)
  (list->string (map next-char (string->list str))))


(next-chars "")      ; ""
(next-chars "abc")   ; "bcd"
(next-chars "12345") ; "23456"
