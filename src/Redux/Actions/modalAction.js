import {MODAL_ACTION} from "../Constants/Constants";

export const modalAction = item => {
  return {
    type: MODAL_ACTION,
    payload: item
  }
}
