(ns champion-gandyr-challenge.subs
  (:require
   [re-frame.core :as rf]))

(rf/reg-sub
 ::name
 (fn [db]
   (:name db)))

(rf/reg-sub
 :score-board
 (fn [db _]
   (:score-board db)))