import { Component } from 'react';

/** Si un component interactiu falla, la resta del document continua funcionant. */
export default class Boundary extends Component {
  constructor(props) { super(props); this.state = { err: null }; }
  static getDerivedStateFromError(err) { return { err }; }
  componentDidCatch(err) { console.error(err); }
  render() {
    if (this.state.err) return <p className="lab-msg warn" role="alert">{String((this.state.err && this.state.err.message) || this.state.err)}</p>;
    return this.props.children;
  }
}
