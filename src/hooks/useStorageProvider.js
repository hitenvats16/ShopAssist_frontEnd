import { createContext, useContext, useState } from "react";
import { getData, saveData as saveDataToLocal } from "../utils/storage";

const Context = createContext({
  settings: {
    no_of_recomendations: 3
  },
  saveSettings() {},
  data: [],
  saveData() {},
});

export function StorageProvider({ children }) {
  const prevSettings = getData("settings");
  const prevData = getData("data");
  const [settings, setSettings] = useState(prevSettings ? prevSettings : {
    no_of_recomendations: 3
  });

  const [data, setData] = useState(prevData ? prevData : []);

  function saveSettings(settings) {
    setSettings(settings);
    saveDataToLocal('settings',settings)
  }

  function saveData(data) {
    setData(data);
    saveDataToLocal('data',data)
  }

  const context = {
    data,
    settings,
    saveSettings,
    saveData,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export default function useStorageProvider() {
  return useContext(Context);
}
