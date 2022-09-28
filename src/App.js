import * as React from "react";
import Members from "./Components/Members"
import MemberNew from "./Components/Members/NewMember"
import MemberEdit from "./Components/Members/EditMember"
import MemberInfo from "./Components/Members/MemberInfo"
import Container from "@mui/material/Container"
import config from "./aws-exports"
import { Amplify } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Navbar } from "./Components/Navbar"
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

function App() {
  // Auth.currentSession().then(res=>{
  //   let accessToken = res.getIdToken()
  //   console.log(accessToken.jwtToken)
  // })
  return (
    <React.Suspense fallback="loading">
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
    </React.Suspense>
  );
}

export default withAuthenticator(App);
