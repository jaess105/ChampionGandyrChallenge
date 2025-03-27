(ns champion-gandyr-challenge.models.time)


(defrecord Time [hour minute seconds]
  Object
  (toString [_]  (str hour "h " minute "m " seconds "s")))

