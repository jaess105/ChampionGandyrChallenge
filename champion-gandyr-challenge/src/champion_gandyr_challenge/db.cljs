(ns champion-gandyr-challenge.db
  (:require
   [champion-gandyr-challenge.models.time :refer [Time]]))


(def ^:private score-board
  [{:name "Testy2" :time (Time. 5 5 20)}
   {:name "Testy3" :time (Time. 10 5 20)}
   {:name "Testy4" :time (Time. 50 5 20)}
   {:name "Testy1" :time (Time. 0 5 20)}
   {:name "Testyn" :time (Time. 60 5 20)}
   {:name "Testyn" :time (Time. 60 5 20)}
   {:name "Testyn" :time (Time. 60 5 20)}
   {:name "Testyn" :time (Time. 60 5 20)}
   {:name "Testyn" :time (Time. 60 5 20)}
   {:name "Testyn" :time (Time. 60 5 20)}
   {:name "Testyn" :time (Time. 60 5 20)}
   {:name "Testyn" :time (Time. 60 5 20)}])

(def default-db
  {:name "re-frame"
   :score-board score-board})
