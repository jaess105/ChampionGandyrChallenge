(ns champion-gandyr-challenge.subs
  (:require
   [re-frame.core :as rf]
   [champion-gandyr-challenge.models.time :as time]))

(rf/reg-sub
 ::name
 (fn [db]
   (:name db)))

(rf/reg-sub
 :score-board
 (fn [db _]
   (sort-by
    #(time/to-seconds (:time %))
    (:score-board db))))