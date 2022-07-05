import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const message = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  console.log(message);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div className="container">
      <h2 className="greeting">
        Greeting:
        <span>{message.greeting.greeting}</span>
      </h2>
      <button
        type="button"
        onClick={() => dispatch(fetchGreeting())}
        className="btn"
      >
        Fetch Random Greeting
      </button>
    </div>
  );
};

export default Greeting;
