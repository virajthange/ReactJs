import { create } from "zustand";

// In Zustand, set():
// updates the store state
// triggers re-renders

const MyStore = create((set, get) => ({
  name: "Viraj",
  age: 22,
  incrementAge: function () {
    // return set({ age: 2 });
    // return set({ age: age + 1 });      //Can't do it
    set((state) => {
      return { age: state.age + 1 };
    });
  },
  decrement: () => {
    const details = get(); //get the state
    console.log(details);
    // return set({ age: details.age - 1 });s
    set({ age: details.age - 1 }); //we can also do it like this without return because we are not using the previous state here
  },
}));

export default MyStore;


