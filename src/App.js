import Login from "./Components/Login"
import Members from "./Components/Members"
import MemberNew from "./Components/Members/NewMember"
import MemberEdit from "./Components/Members/EditMember"
import MemberInfo from "./Components/Members/MemberInfo"
import Container from "@mui/material/Container"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" sx={{ mt:8 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Login/> } />
            <Route path="/members" element={ <Members/> } />
            <Route path="/member/new" element={ <MemberNew/> } />
            <Route path="/member/edit/:member_id" element={ <MemberEdit/> } />
            <Route path="/member/info/:member_id" element={ <MemberInfo/> } />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
