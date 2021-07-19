import React from 'react';
import Dialog from './Dialog';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.showDialog} className="btn">
          Show
        </button>
        <Dialog
          isOpen={this.state.isOpen}
          title="some title"
          onClose={this.hideDialog}
        >
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
