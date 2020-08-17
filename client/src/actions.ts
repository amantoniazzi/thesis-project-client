import React from "react";
const dispatch = useDispatch()

export function inputName(value: string) {
  return {
    type: "INPUT_NAME",
    payload: value,
  };
}

export function submitName(name: string) {
  return function (dispatch) {

    fetch(`https://foaas.com/off/${name}/Everyone`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setName(res.message));
      })
  };
}