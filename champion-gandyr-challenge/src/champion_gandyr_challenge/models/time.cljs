(ns champion-gandyr-challenge.models.time)

(defrecord Time [hour minute seconds]
  Object
  (toString [_]  (str hour "h " minute "m " seconds "s")))

(defn to-seconds [{:keys [hour minute seconds]}]
  (+ (* hour 3600) (* minute 60) seconds))

