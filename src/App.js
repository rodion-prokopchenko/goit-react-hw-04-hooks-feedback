import React, { Component, useEffect, useReducer, useState } from "react";

import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOprtions";
import Statistics from "./Components/Statisctics/Statistics";
import Section from "./Components/Section/Section";

function updateFeedbacks(state, action) {
  switch (action.type) {
    case "good":
      return { ...state, good: state.good + 1, total: state.total + 1 };

    case "neutral":
      return { ...state, neutral: state.neutral + 1, total: state.total + 1 };

    case "bad":
      return { ...state, bad: state.bad + 1, total: state.total + 1 };
  }
}

export default function App() {
  const [state, dispatch] = useReducer(updateFeedbacks, {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  });

  const [positiveFeedback, setPositiveFeedback] = useState(0);

  useEffect(() => {
    const goodPercent = Math.round((state.good / state.total) * 100) + "%";

    setPositiveFeedback(goodPercent);
    return;
  }, [state.total]);

  function checkTotal() {
    if (state.total !== 0) {
      return false;
    }
    if (state.total === 0);
    {
      return true;
    }
  }

  return (
    <>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={dispatch}
          />
        }
      ></Section>

      <Section
        title="Statistics"
        checkTotal={checkTotal}
        children={
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={state.total}
            positivePercentage={positiveFeedback}
          />
        }
      ></Section>
    </>
  );
}

// function App () {

//   const [state, dispatch] = useReducer(, {

//   })

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positiveFeedback: 0,
//   };

//   updateFeedbacks = (data) => {
//     this.setState((prevState) => {
//       return {
//         [data]: prevState[data] + 1,
//         total: prevState.total + 1,
//       };
//     });
//   };

//   checkTotal = () => {
//     if (this.state.total !== 0) {
//       return false;
//     }
//     if (this.state.total === 0);
//     {
//       return true;
//     }
//   };

//   updatePositiveFeedback = () => {
//     const { total, good, positiveFeedback } = this.state;

//     const goodPercent = Math.round((good / total) * 100) + "%";

//     this.setState({ positiveFeedback: goodPercent });
//     return;
//   };

//   render() {
//     const { good, neutral, bad, total, positiveFeedback } = this.state;

//     return (
//       <>
//         <Section
//           title="Please leave feedback"
//           children={
//             <FeedbackOptions
//               options={["good", "neutral", "bad"]}
//               onLeaveFeedback={this.updateFeedbacks}
//               updatePositiveFeedback={this.updatePositiveFeedback}
//             />
//           }
//         ></Section>

//         <Section
//           title="Statistics"
//           checkTotal={this.checkTotal}
//           children={
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positiveFeedback}
//             />
//           }
//         ></Section>
//       </>
//     );
//   }
// }

// export default App;
