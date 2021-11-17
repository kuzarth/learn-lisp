(define (max-delta xs ys)
  (foldl (lambda [x y m] (max m (abs (- x y))))
         0 xs ys))

(max-delta
  (list 10 -15 35)
  (list 2 -12 42)) ; 8
