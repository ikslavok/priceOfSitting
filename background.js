chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["sitting", "timeLeft"], ({ sitting, timeLeft }) => {
    if(sitting === undefined || timeLeft === undefined){
      chrome.storage.sync.set({sitting : false, timeLeft : 0});
    }
  });
});