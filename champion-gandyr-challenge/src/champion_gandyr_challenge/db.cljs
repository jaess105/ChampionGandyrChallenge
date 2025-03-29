(ns champion-gandyr-challenge.db
  (:require
   [champion-gandyr-challenge.models.time :refer [Time]]))


(def ^:private score-board
  [{:name "Nibeltin" :time (Time. 1 18 16)}
   {:name "Testy3" :time (Time. 10 5 20)}])

(def default-db
  {:name "re-frame"
   :score-board score-board})
