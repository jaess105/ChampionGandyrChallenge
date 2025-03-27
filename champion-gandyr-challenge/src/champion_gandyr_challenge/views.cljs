(ns champion-gandyr-challenge.views
  (:require
   [re-frame.core :as rf]
   [champion-gandyr-challenge.subs :as subs]))


;; Get position label (1st, 2nd, 3rd, 4th, etc.)
(defn position-label [n]
  (let [suffixes {1 "st" 2 "nd" 3 "rd"}]
    (str n (get suffixes n "th"))))

;; Define styles for the top 3 with softer backgrounds
(defn position-style [index]
  (case index
    0 "bg-yellow-950 border-4 border-yellow-400 text-yellow-200"  ;; 🥇 Darker gold background, bright gold border
    1 "bg-gray-800 border-4 border-gray-300 text-gray-200"        ;; 🥈 Soft silver background, bright silver border
    2 "bg-orange-950 border-4 border-orange-500 text-orange-200"  ;; 🥉 Darker bronze background, bright bronze border
    "bg-gray-800 border border-gray-700 text-white")) ;; Default for 4th and beyond

;; Display a scoreboard entry with responsive styling
(defn scoreboard-entry [entry index]
  [:div {:class (str "flex flex-col sm:flex-row items-center sm:justify-between w-full px-4 py-3 rounded-lg my-2 shadow-md "
                     (position-style index))}
   ;; Position number
   [:div {:class "w-full sm:w-16 text-center font-bold text-lg"} (position-label (inc index))]

   ;; Name (Flexible space, centered on mobile)
   [:div {:class "flex-1 text-lg text-center sm:text-left"} (:name entry)]

   ;; Time (Right-aligned on desktop, centered on mobile)
   [:div {:class "w-full sm:w-40 text-center sm:text-right"} (str (:time entry))]])

;; Scoreboard component with improved layout
(defn scoreboard []
  (let [entries @(rf/subscribe [:score-board])]
    [:div {:class "w-full max-w-3xl mx-auto mt-6 px-4"}
     [:h2 {:class "text-2xl sm:text-3xl font-bold text-white text-center mb-4"} "🏆 Champion Gandyr Challenge"]
     (if (empty? entries)
       [:p {:class "text-gray-400 text-center"} "No scores yet."]
       (doall ;; Ensure correct rendering with index
        (map-indexed (fn [idx entry] ^{:key (:name entry)} [scoreboard-entry entry idx]) entries)))]))

;; Main panel with Tailwind styling
(defn main-panel []
  [:div {:class "min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6"}
   [scoreboard]])
