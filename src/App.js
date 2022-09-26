// import Login from "./Components/Login"
import { Amplify } from "aws-amplify"
import config from "./aws-exports"
import { withAuthenticator } from "@aws-amplify/ui-react"
import Members from "./Components/Members"
import MemberNew from "./Components/Members/NewMember"
import MemberEdit from "./Components/Members/EditMember"
import MemberInfo from "./Components/Members/MemberInfo"
import Container from "@mui/material/Container"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import '@aws-amplify/ui-react/styles.css'
import { ToastContainer } from "react-toastify"
import { Navbar } from "./Components/Navbar"

Amplify.configure(config)

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        />
      <Navbar/>
      <Container maxWidth="lg" sx={{ mt:8 }}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={ <Login/> } /> */}
            <Route path="/" element={ <Members/> } />
            <Route path="/member/new" element={ <MemberNew/> } />
            <Route path="/member/edit/:member_id" element={ <MemberEdit/> } />
            <Route path="/members/info/:member_id" element={ <MemberInfo/> } />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default withAuthenticator(App);
