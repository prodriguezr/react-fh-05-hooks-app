import { useEffect, useState } from 'react';

const Message = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  const { x, y } = coords;

  const mouseMove = ({ x, y }) => {
    const myCoords = { x, y };

    setCoords({ ...coords, x: myCoords.x, y: myCoords.y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);

    return () => {
      console.log('Unmounted component');
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>You're great</h3>
      <p>
        x: {x} y: {y}
      </p>
    </div>
  );
};

export default Message;
