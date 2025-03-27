(ns champion-gandyr-challenge.events
  (:require
   [re-frame.core :as rf]
   [champion-gandyr-challenge.db :as db]))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))
