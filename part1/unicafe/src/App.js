import React, { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Statistic = ({ good, neutral, bad }) => {
  if (good + neutral + bad)
    return (
      <>
        <h1>statistic</h1>
        <table>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)} />
          <StatisticLine text="positive" value={(good / (good + neutral + bad)) * 100} />
        </table>
      </>
    );

  return (
    <>
      <h1>statistic</h1>
      <p>No feedback given</p>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  if (text !== 'average' && text !== 'positive')
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );

  if (text !== 'positive')
    return (
      <tr>
        <td>{text}</td>
        <td>{value.toFixed(2)}</td>
      </tr>
    );

  return (
    <tr>
      <td>{text}</td>
      <td>{value.toFixed(2)} %</td>
    </tr>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default App;
