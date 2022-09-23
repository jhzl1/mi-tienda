import { Store } from "react-notifications-component"

export const renderPopup = (msg: string) => {
  Store.addNotification({
    message: msg,
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__flipInX"],
    animationOut: ["animate__animated", "animate__flipOutX"],
    dismiss: {
      duration: 4000,
      onScreen: true,
    },
  })
}

export const renderPopupSuccess = () => {
  Store.addNotification({
    message: "The purchase has been completed successfully",
    type: "success",
    insert: "top",
    container: "center",
    animationIn: ["animate__animated", "animate__flipInX"],
    animationOut: ["animate__animated", "animate__flipOutX"],
    dismiss: {
      duration: 5000,
    },
  })
}
