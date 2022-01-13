import propTypes from "prop-types";

import shortid from "shortid";
import React, { Component } from "react";
import Notification from "../Notification/Notification";

export default function Section({ title, checkTotal, children }) {
  const stat = "Statistics";

  function Total() {
    if (title === stat && checkTotal()) {
      return true;
    }
    return;
  }

  return (
    <>
      <section key={shortid.generate()}>
        {title && <h2 key={shortid.generate()}>{title}</h2>}
        {Total() ? <Notification message={"There is no feedback"} /> : children}
      </section>
    </>
  );
}

// class Section extends Component {
//   state = {
//     total: this.props.total,
//   };
//   stat = 'Statistics';

// checkTotal = () => {
//   if (this.props.title === this.stat && this.props.checkTotal()) {
//     return true;
//   }
//   return;
// };

//   render() {
// return (
//   <>
//     <section key={shortid.generate()}>
//       {this.props.title && (
//         <h2 key={shortid.generate()}>{this.props.title}</h2>
//       )}
//       {this.checkTotal() ? (
//         <Notification message={'There is no feedback'} />
//       ) : (
//         this.props.children
//       )}
//     </section>
//   </>
// );
//   }
// }

// Section.propTypes = {
//   title: propTypes.string,
//   children: propTypes.node.isRequired,
// };
// export default Section;
