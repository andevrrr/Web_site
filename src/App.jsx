import { BrowserRouter } from "react-router-dom"

import { Amplify } from 'aws-amplify';
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { About, Contact, Hero, Navbar, Tech, Works, Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className="relative z-0">
        <AmplifyProvider>
			<Contact />
		</AmplifyProvider>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
