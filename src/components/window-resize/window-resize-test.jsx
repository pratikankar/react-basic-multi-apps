import useWindowResize from ".";

export default function UseWindowResizeHookTest() {
  const windowSize = useWindowResize();

  const { width, height } = windowSize;

  return (
    <div>
      <h1>Use Custom Window Resize Hook</h1>
      <p>Window width is {width}</p>
      <p>Window height is {height}</p>
    </div>
  );
}
