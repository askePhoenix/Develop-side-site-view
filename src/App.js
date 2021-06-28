import Routes from "./Routes"
import './App.css'


// 기능은 대부분 해당 유저의 seq 값으로 움직이도록 설계

// 바디 클릭시 팝업되어 있던 모든 특정 스타일(시간, 팝업 등)이 지워지도록 작용.

function App() {

    return (
        <div className="App">
            <Routes></Routes>
        </div>
    );
}

export default App;
