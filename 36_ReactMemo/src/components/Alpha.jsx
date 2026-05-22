import { memo, useEffect } from "react";

const Alpha = ({data}) => {
  useEffect(() => {
    console.log("Alpha component rendered...");
  });

  console.log(data);
  return (
    <>
      <h3>Alpha</h3>
      <h3>Alpha count: {data}</h3>
      {/* <h3>Alpha count: {data.name}</h3> */}
    </>
  );
};

// Memoizing the Alpha component to prevent unnecessary re-renders when the data prop has not changed. The second argument to memo is a custom comparison function that checks if the previous and current props are equal. If they are equal, the component will not re-render.
// It does a shallow comparison of the props by default, but we can provide a custom comparison function to control when the component should re-render. In this case, we are comparing the data prop to determine if the component should re-render or not. If the data prop is the same as the previous render, the component will not re-render, otherwise it will re-render.

const MemoAlpha = memo(Alpha , (prev, curr) => {
    // console.log('prev', prev);
  return prev.data === curr.data;     // If the data prop is the same as the previous render, return true to prevent re-rendering, otherwise return false to allow re-rendering.
});
export default MemoAlpha;
