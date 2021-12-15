// import React, { Component } from "react";
import { useState } from "react";

import { Statistics } from "../Statistics/Statistics";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const onClickBtn = (category) => {
    setState((prevState) => {
      return { ...prevState, [category]: prevState[category] + 1 };
    });
  };

  const totalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const PositiveFeedbackPercentage = () => {
    return Math.ceil((state.good / totalFeedback()) * 100);
  };

  const { good, neutral, bad } = state;
  return (
    <div>
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        categories={["good", "neutral", "bad"]}
        onClickBtn={onClickBtn}
      />
      <Section title={"Statistics"}>
        {totalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePersentage={PositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;

// /================================================================================

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onClickBtn = (category) => {
//     this.setState({ [category]: this.state[category] + 1 });
//   };

//   totalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   PositiveFeedbackPercentage = () => {
//     const total = this.totalFeedback();
//     const good = this.state.good;
//     return total ? Math.ceil((good / total) * 100) : 0;
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <h1>Please leave feedback</h1>
//         <FeedbackOptions
//           categories={["good", "neutral", "bad"]}
//           onClickBtn={this.onClickBtn}
//         />
//         <Section title={"Statistics"}>
//           {this.totalFeedback() ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.totalFeedback()}
//               positivePersentage={this.PositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
// export default App;
