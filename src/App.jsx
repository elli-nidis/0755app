import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
//import "./App.css";
const Profile = ()=>{return <h1>Это страница с профилем</h1>;};
const Messages = ()=>{return <h1>Это страница с сообщениями</h1>;};
const Settings = ()=>{return <h1>Это страница с настройками</h1>;};
const Friends = ()=>{return <h1>Это страница с друзьями</h1>;};
function App() {
	return (
		<BrowserRouter>
		<div className="container mt-5">
			<div className="row">
				<div className="col-sm-3">
					<div className="nav flex flex-column nav-pills" aria-orientation="vertical">
						<NavLink to="profile" className="nav-link">
							Профиль
						</NavLink>
						<NavLink to="messages" className="nav-link">
							Сообщения
						</NavLink>
						<NavLink to="settings" className="nav-link">
							Настройки
						</NavLink>
						<NavLink to="friends" className="nav-link">
							Мои друзья
						</NavLink>
					</div>
				</div>
				<div className="col-sm-9">
					<Routes>
						<Route path="/profile" element={<Profile />} />
						<Route path="/messages" element={<Messages />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/friends" element={<Friends />} />
					</Routes>
				</div>
			</div>
		</div>
		</BrowserRouter>
	)
}
export default App;
