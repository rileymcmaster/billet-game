import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useJoystickControls = /* @__PURE__ */ create(
  /* @__PURE__ */ subscribeWithSelector<State>((set, get) => {

    return {
      /**
       * Joystick state manegement
       */
      // Initial joystick/button state
      curJoystickDis: 0 as number,
      curJoystickAng: 0 as number,
      curRunState: false as boolean,
      curButton1Pressed: false as boolean,

      setJoystick: (
        joystickDis: number,
        joystickAng: number,
        runState: boolean
      ) => {
        set(() => {
          return {
            curJoystickDis: joystickDis,
            curJoystickAng: joystickAng,
            curRunState: runState,
          };
        });
      },

      resetJoystick: () => {
        set((state) => {
          if (state.curJoystickDis !== 0 || state.curJoystickAng !== 0) {
            return {
              curJoystickDis: 0,
              curJoystickAng: 0,
              curRunState: false,
            };
          }
          return {};
        });
      },

      pressButton1: () => {
        set((state) => {
          if (!state.curButton1Pressed) {
            return {
              curButton1Pressed: true,
            };
          }
          return {};
        });
      },

      releaseAllButtons: () => {
        set((state) => {
          if (state.curButton1Pressed) {
            return {
              curButton1Pressed: false,
            };
          }
          return {};
        });
      },

      getJoystickValues: () => {
        return {
          joystickDis: get()?.curJoystickDis,
          joystickAng: get()?.curJoystickAng,
          runState: get().curRunState,
          button1Pressed: get().curButton1Pressed,
        };
      },
    };
  })
);

type State = {
  curJoystickDis: number;
  curJoystickAng: number;
  curRunState: boolean;
  curButton1Pressed: boolean;

  setJoystick: (
    joystickDis: number,
    joystickAng: number,
    runState: boolean
  ) => void;
  resetJoystick: () => void;
  pressButton1: () => void;
  
  releaseAllButtons: () => void;
  getJoystickValues: () => {
    joystickDis: number;
    joystickAng: number;
    runState: boolean;
    button1Pressed: boolean;
  };
};
