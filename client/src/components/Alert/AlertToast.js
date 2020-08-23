import {toast} from "react-toastify";

const AlertToast = (msg, alertType) =>
  toast(msg, {
    type: alertType,
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });

export default AlertToast;
