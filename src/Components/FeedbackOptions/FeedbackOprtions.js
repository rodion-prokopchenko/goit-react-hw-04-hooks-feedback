import propTypes from "prop-types";
import React, { Component } from "react";
import shortid from "shortid";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  function submitFeedback(e) {
    e.preventDefault();
    console.log(e.currentTarget.name);
    onLeaveFeedback({ type: e.currentTarget.name });
    // setTimeout(() => updatePositiveFeedback(), 1);
  }

  return (
    <>
      <div>
        {options.map((options) => (
          <button
            type="button"
            key={shortid.generate()}
            onClick={submitFeedback}
            name={options}
          >
            {options}
          </button>
        ))}
      </div>
    </>
  );
}

// class FeedbackOptions extends Component {
// submitFeedback = (e) => {
//   e.preventDefault();

//   this.props.onLeaveFeedback({ type: e.currentTarget.name, payload: 1 });
//   setTimeout(() => this.props.updatePositiveFeedback(), 1);
// };

//   render() {
//     return (
//       <>
//         <div>
//           {this.props.options.map((options) => (
//             <button
//               type="button"
//               key={shortid.generate()}
//               onClick={this.submitFeedback}
//               name={options}
//             >
//               {options}
//             </button>
//           ))}
//         </div>
//       </>
//     );
//   }
// }

// FeedbackOptions.propTypes = {
//   options: propTypes.array.isRequired,
// };
// export default FeedbackOptions;
