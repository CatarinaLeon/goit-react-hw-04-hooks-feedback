import React, { Component } from "react";
import { Statistics } from "../Statistics/Statistics";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickBtn = (category) => {
    this.setState({ [category]: this.state[category] + 1 });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  PositiveFeedbackPercentage = () => {
    const total = this.totalFeedback();
    const good = this.state.good;
    return total ? Math.ceil((good / total) * 100) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          categories={["good", "neutral", "bad"]}
          onClickBtn={this.onClickBtn}
        />
        <Section title={"Statistics"}>
          {this.totalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePersentage={this.PositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

// function App() {
//     return (
//         <div>
//             <Section/>
//             <Statistics/>
//         </div>
//     )
// }

export default App;
