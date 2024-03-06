import { useRef } from 'react';

const useBackgroundPosition = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
    const mouseX = event.nativeEvent.offsetX;
    const mouseY = event.nativeEvent.offsetY;

    const backgroundPositionX = mouseX / 5;
    const backgroundPositionY = mouseY / 5;

    if (ref.current) {
      ref.current.style.backgroundPositionX = `${backgroundPositionX}px`;
      ref.current.style.backgroundPositionY = `${backgroundPositionY}px`;
    }
  };

  return {
    ref,
    handleMouseOver,
  };
};

export default useBackgroundPosition;
