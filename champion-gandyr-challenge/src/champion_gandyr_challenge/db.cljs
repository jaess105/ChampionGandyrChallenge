(ns champion-gandyr-challenge.db
  (:require
   [champion-gandyr-challenge.models.time :refer [Time]]))


(def ^:private score-board
  [{:name "Nibeltin" :time (Time. 1 18 13)}
   {:name "TheValveGuy" :time (Time. 0 44 55)}
   {:name "JD Vape" :time (Time. 0 54 33)}])

(def default-db
  {:name "re-frame"
   :score-board score-board})
