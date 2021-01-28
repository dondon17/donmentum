import React from 'react' 
import "./App.css"
import Top from "./Top"

// function component랑은 조금 다른 개념
class App extends React.Component{

  // 변하는 데이터들이 저장될 객체 => state
  state = {
    // 반드시 사용한 state 들을 미리 선언할 필요는 없다!
    isLoading: true
  };

  getWeather = async() =>{
    this.setState({});
  }

  componentDidMount(){
    console.log("getWeather is called...")
    this.getWeather();
  }

  // 화면에 출력하는 함수
  render(){
    const {isLoading} = this.state;
    return (
      <div className="container">
        
        {isLoading ? (
          <div className = "loader">
            <p>updating</p>
          </div> ) : (
          <div className = "contents">
            <Top />
          </div> )}
      </div>

    )
  }
}

export default App;
