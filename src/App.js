// import Login from "./Components/Login"
import Amplify from "aws-amplify"
import config from "./aws-exports"
import { withAuthenticator } from "@aws-amplify/ui-react"
import { AmplifySignOut } from "@aws-amplify/ui-react-v1"
import Members from "./Components/Members"
import MemberNew from "./Components/Members/NewMember"
import MemberEdit from "./Components/Members/EditMember"
import MemberInfo from "./Components/Members/MemberInfo"
import Container from "@mui/material/Container"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" sx={{ mt:8 }}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={ <Login/> } /> */}
            <Route path="/" element={ <Members/> } />
            <Route path="/members/new" element={ <MemberNew/> } />
            <Route path="/members/edit/:member_id" element={ <MemberEdit/> } />
            <Route path="/members/info/:member_id" element={ <MemberInfo/> } />
          </Routes>
        </BrowserRouter>
      </Container>
      <Container maxWidth="sm" sx={{ mt:4 }}>
        <AmplifySignOut />
      </Container>
    </div>
  );
}

export default withAuthenticator(App);
