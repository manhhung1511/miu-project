import {
    RECENT_SEARCHES_KEY,
    RECENT_SEARCHES_MAX,
  } from "core/constants/search";
  
  import { jsonParse, jsonStringify } from "./json";
  import { observableLocalStorage } from "./storage";
  
  export function getRecentSearches(): Set<string> {
    const recentSearches = observableLocalStorage.getItem(RECENT_SEARCHES_KEY);
    if (recentSearches) {
      const searchSet: Set<string> = new Set(jsonParse(recentSearches));
      return searchSet;
    }
    return new Set();
  }
  
  export function addRecentSearch(text: string): void {
    const recentSearches = getRecentSearches();
    if (recentSearches.has(text)) {
      recentSearches.delete(text);
    }
    recentSearches.add(text);
    if (recentSearches.size > RECENT_SEARCHES_MAX) {
      const oldestSearch = recentSearches.values().next().value;
      recentSearches.delete(oldestSearch);
    }
    observableLocalStorage.setItem(
      RECENT_SEARCHES_KEY,
      jsonStringify(Array.from(recentSearches)),
    );
  }
  