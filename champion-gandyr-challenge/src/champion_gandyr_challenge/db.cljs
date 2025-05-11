(ns champion-gandyr-challenge.db
  (:require
   [champion-gandyr-challenge.models.time :refer [Time]]))


(def ^:private score-board
  [{:name "Nibeltin" :time (Time. 1 18 13)}
   {:name "Testy3" :time (Time. 1 26 09)}])

(def default-db
  {:name "re-frame"
   :score-board score-board})
