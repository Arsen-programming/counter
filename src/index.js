import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  onInсrement = () => {
    // this.setState(oldState => ({count: oldState.count + 1}))
    this.setState({count: 73})
  };

  UNSAFE_componentWillMount() {
    console.log("До вывода в браузера");
  }
  componentDidMount() {
      console.log("После вывода в браузера");
  }

  UNSAFE_componentWillUpdate() {
    console.log("До вывода обновленного компонента в браузер");
  }
  componentDidUpdate() {
    console.log("После вывода обновленного компонента в браузер");
  }

  componentWillUnmount() {
    console.log("Перед удалением компонента")
  }

  shouldComponentUpdate = (newProps, newState) => {
    console.log(">>>>>>>", newProps, newState)

    if (newState.count != this.state.count){
      return true
    }else {
      return false
    }

  }

  render() {
    console.log("Вывод");
    return (
      <div>
        <p>{this.state.count}</p>
        <input type="button" value="Inсrement" onClick={this.onInсrement} />
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    showCounter: true,
  };
  onToggleCounter = () => {
    this.setState((oldState) => {
      return {
        showCounter: !oldState.showCounter,
      };
    });
  };
  render() {
    const counter = this.state.showCounter ? <Counter /> : null;
    return (
      <div>
        {counter}
        <input type="button" value="Toogle counter" onClick={this.onToggleCounter} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
