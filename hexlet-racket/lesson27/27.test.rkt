#lang racket

(require (only-in rackunit check-true check-false test-begin))
(require "27.rkt")

(test-begin
 (check-false (password-valid? ""))
 (check-false (password-valid? "***"))
 (check-false (password-valid? "a b"))
 (check-false (password-valid? "a1?"))

 (check-true (password-valid? "god"))
 (check-true (password-valid? "LOVE"))
 (check-true (password-valid? "123456"))
 (check-true (password-valid? "U2")))

(test-begin
 (check-false (password-good? ""))
 (check-false (password-good? "***"))
 (check-false (password-good? "a b"))
 (check-false (password-good? "a1?"))

 (check-false (password-good? "god"))
 (check-false (password-good? "LOVE"))
 (check-false (password-good? "123456"))
 (check-false (password-good? "U2"))

 (check-true (password-good? "1cat1dog"))
 (check-true (password-good? "R2D2andC3PO")))
