import { Bounce, toast } from "react-toastify";

const getInstalledApp = () => {
  const getAppData = localStorage.getItem("appsData");
  if (getAppData) {
    const appData = JSON.parse(getAppData);
    return appData;
  } else {
    return [];
  }
};
const removeInstalledApp =(id) =>{
  const installedApp = getInstalledApp()
  const updatedApps = installedApp.filter(app => app.id !== id)
  localStorage.setItem("installedApps", JSON.stringify(updatedApps));
}
const addToStoredLDB = (id) => {
  const appData = getInstalledApp();
  if (appData.includes(id)) {
    toast.warn("The App is Already Exist!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  } else {
    appData.push(id);
    const StringData = JSON.stringify(appData);
    localStorage.setItem("appsData", StringData);
  }
};

export { addToStoredLDB, getInstalledApp, removeInstalledApp };
