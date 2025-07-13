import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'
import WelcomeFigure from '../components/WelcomeFigure'

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showFirm, setShowFirm] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [showWelcome, setShowWelcom] = useState(false)
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [showLogOut, setShowLogOut] = useState(false)
  const [showFirmTitle, setShowFirmTitle] = useState(true)
  const [showWelcomeFigure, setShowWelcomeFigure] = useState(true)

  useEffect(()=>{
      const loginToken = localStorage.getItem('loginToken');
      if(loginToken){
           setShowLogOut(true)
           setShowWelcom(true)
           setShowWelcomeFigure(false)
      }
  },[])

  useEffect(()=>{
        const firmName = localStorage.getItem('firmName');
        const firmId = localStorage.getItem('firmId')
        if(firmName || firmId ){
          setShowFirmTitle(false)
          setShowWelcom(true)
        }
  },[])



  const logOutHandler = ()=>{
    confirm("Are you sure to logout? ")
      localStorage.removeItem("loginToken");
      localStorage.removeItem("firmId");
      localStorage.removeItem("firmName");
      setShowLogOut(false)
      setShowFirmTitle(true)
      setShowWelcom(false)
      setShowWelcomeFigure(true)
  }

  const showLoginHandler = () => {
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcom(false)
    setShowAllProducts(false)
    setShowWelcomeFigure(false)
  }

  const showRegisterHandler = () => {
     setShowRegister(true)
     setShowLogin(false)
     setShowFirm(false)
     setShowProduct(false)
     setShowWelcom(false)
     setShowAllProducts(false)
     setShowWelcomeFigure(false)
  }

  const showFirmHandler = () =>{
   if(showLogOut){
    setShowFirm(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowProduct(false)
    setShowWelcom(false)
    setShowAllProducts(false)
  }else{
    alert("Please login")
    setShowLogin(true)
    setShowRegister(false)
    setShowWelcomeFigure(false)
   }
  }
  const showProductHandler = () =>{
   if(showLogOut){
    setShowProduct(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowFirm(false)
    setShowWelcom(false)
    setShowAllProducts(false)
  }else{
    alert("Please login")
    setShowLogin(true)
    setShowRegister(false)
    setShowWelcomeFigure(false)
   }
  }
  const showWelcomeHandler = () =>{
    setShowWelcom(true)
    setShowProduct(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowFirm(false)
    setShowAllProducts(false)
    setShowWelcomeFigure(false)
    
  }
  const showWelcomeFigureHandler = ()=>{
    setShowWelcomeFigure(true)
    setShowWelcom(false)
    setShowProduct(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowFirm(false)
    setShowAllProducts(false)
  }
  
  const showAllProductsHandler = () =>{
   if(showLogOut){
    setShowAllProducts(true)
    setShowWelcom(false)
    setShowProduct(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowFirm(false)
  }else{
    alert("Please login")
    setShowLogin(true)
    setShowRegister(false)
    setShowWelcomeFigure(false)
   }
  }
  return (
    <>
       <section className='landingSection'>
          <NavBar showLoginHandler = {showLoginHandler} showRegisterHandler = {showRegisterHandler}
          showLogOut = {showLogOut}
          logOutHandler = {logOutHandler}
          />
          <div className="collectionSection">
          <SideBar showFirmHandler = {showFirmHandler} showProductHandler = {showProductHandler}
           showAllProductsHandler = {showAllProductsHandler}
           showFirmTitle = {showFirmTitle}
           />
           { showWelcomeFigure && <WelcomeFigure showWelcomeFigureHandler = {showWelcomeFigureHandler} /> }
          {showLogin && <Login showWelcomeHandler = {showWelcomeHandler} />}
          {showRegister && <Register showLoginHandler = {showLoginHandler} />}
          {showFirm && showLogOut && <AddFirm/> }
          {showProduct && showLogOut &&  <AddProduct/>}
          {showWelcome && <Welcome />}
          {showAllProducts && showLogOut &&  <AllProducts />}
          </div>
        
       </section>
    
    </>
  )
}

export default LandingPage