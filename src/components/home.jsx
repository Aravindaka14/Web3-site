import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handlePath = (path) => {
    return (
      navigate(`/${path}`)
    )
  }
  return (
    <div className="bg-black max-w-full ">

      <header className="flex w-full h-20 justify-between items-center stickyheader">
        <div className="flex h-9 items-center ml-8">
          <img src="assets\logo.png" alt="logo" className="xl:h-9 md:h-7 xs:h-5 w-auto " />
          <img src="assets\Kanalabs.png" alt="logoName" className="text-white xl:h-8 md:h-7 xs:h-5 w-auto pl-2 pt-1" />
        </div>
        <div className="mr-8">
          <img src="assets\Path.png" alt="features" className="bg-white xl:w-5 md:w-4 xs:w-3 h-0.5 m-1 xs:m-0.5" />
          <img src="assets\math.mng" alt="features" className="bg-white xl:w-5 md:w-4 xs:w-3 h-0.5 m-1 xs:m-0.5" />
          <img src="assets\math.mng" alt="features" className="bg-white xl:w-5 md:w-4 xs:w-3 h-0.5 m-1 xs:m-0.5" />
        </div>
      </header>
      <main className=" w-full bg-black pt-20">
        <div className="flex ">
          <div className="w-1/4 xs:w-1/5 flex justify-center items-start">
            <img className="opacity-60 xl:w-60 md:w-48 xs:w-20 drop-shadow-heroImageShadow" src="assets\Group 1261152703.png" alt="logowhole" />
          </div>
          <div className="w-2/4 xs:w-3/5 h-auto">
            <div className=" heropageToplogo flex justify-center items-center">
              <p className="xl:text-exact md:text-6xl xs:text-3xl leading-none font-bold font-urbanist heropagecustom md:pt-16 xs:pt-12 ">Connected and<br></br> simplified web3</p>
            </div>
            <br></br>
            <p className="text-center text-white font-manrope text-sm font-normal tracking-wide">Where Chains & Experiences Unite</p>
          </div>
          <div className="w-1/4 xs:w-1/5 flex justify-end items-start">
            <img className=" xl:w-60 md:w-52 xs:w-20 drop-shadow-heroImageShadow" alt="globe" src="assets\Frame -wholeEarthGlowy.svg" />
          </div>
        </div>
        <div className="flex xs:flex-col md:flex-row justify-center xs:items-center md:mt-10 xs:mx-8 xs:my-8" >
          <button className="xs:w-full md:w-auto bg-secondMainCardLight text-buttonborder border-2 border-solid border-buttonborder md:border-b-8 xs:border-b-8 rounded-2xl xl:py-4 xl:px-6 md:py-3 md:px-3 xs:py-3 font-manrope xl:text-base md:text-sm xl:font-extrabold md:font-bold md:mr-10 my-0 hover:bg-secondMainCard hover:drop-shadow-sm hover:shadow-customlight hover:transition-all hover:-translate-y-1" onClick={() => { handlePath("swap") }}>Launch App</button>
          <button className="font-manrope font-extrabold text-buttonborder xl:text-base md:text-sm leading-4 xs:my-6 hover:text-hoverColorChange">Learn More</button>
        </div>
        <div className="flex  xs:flex-col md:flex-row  justify-center xs:justify-center mt-4 xs:mt-6">
          <section className=" xl:w-60 xl:h-40 md:w-52 md:h-38 md:rounded-2xl xl:m-3 md:m-2 xs:m-2 sectionCustom xs:bg-black  md:border xs:bg-none border-white border-opacity-10 hover:drop-shadow-sm  hover:shadow-glow ">
            <div className="opacity-90 text-fontGray bg-secondMainCardLight pt-8 pb-4 px-6 text-left md:rounded-t-2xl xl:text-xl md:text-md xs:hidden md:inline-block">Lorem ipsum dolor sit amet</div>
            <div className=" flex bg-secondMainCard text-white  xs:rounded-xl md:rounded-none font-bold md:justify-between  md:items-center xs:justify-around xl:py-4 xl:px-4 md:py-3 md:px-6 xs:py-4 xs:mx-6 md:mx-0 md:rounded-b-2xl">
              <p>Trade</p>
              <img src="assets\Icon.png" alt="icon" className="h-3 w-3 drop-shadow-customColor" />
            </div>
          </section>
          <section className="xl:w-60 xl:h-40 md:w-52 md:h-38 md:rounded-2xl xl:m-3 md:m-2 xs:m-2 sectionCustom xs:bg-black  md:border xs:bg-none border-white border-opacity-10 hover:drop-shadow-sm   hover:shadow-glow">
            <div className="opacity-90 text-fontGray bg-secondMainCardLight pt-8 pb-4 px-6 text-left md:rounded-t-2xl xl:text-xl md:text-md xs:hidden md:inline-block">Try the new cross-chain swap</div>
            <div className=" flex bg-secondMainCard text-white xs:rounded-xl md:rounded-none font-bold md:justify-between  md:items-center xs:justify-around xl:py-4 xl:px-4 md:py-3 md:px-6 xs:py-4 xs:mx-6 md:mx-0 md:rounded-b-2xl">
              <p>Swaps</p>
              <img src="assets\Icon.png" alt="icon" className="h-3 w-3" />
            </div>
          </section>
          <section className="xl:w-60 xl:h-40 md:w-52 md:h-38 md:rounded-2xl xl:m-3 md:m-2 xs:m-2 sectionCustom  xs:bg-black  md:border xs:bg-none border-white border-opacity-10 hover:drop-shadow-sm   hover:shadow-glow">
            <div className="opacity-90 text-fontGray bg-secondMainCardLight pt-8 pb-4 px-6 text-left md:rounded-t-2xl xl:text-xl md:text-md xs:hidden md:inline-block">Lorem ipsum dolor sit amet</div>
            <div className=" flex bg-secondMainCard text-white xs:rounded-xl md:rounded-none  font-bold md:justify-between  md:items-center xs:justify-around xl:py-4 xl:px-4 md:py-3 md:px-6 xs:py-4 xs:mx-6 md:mx-0 md:rounded-b-2xl">
              <p>Perps</p>
              <img src="assets\Icon.png" alt="icon" className="h-3 w-3" />
            </div>
          </section>
          <section className="xl:w-60 xl:h-40 md:w-52 md:h-38 md:rounded-2xl xl:m-3 md:m-2 xs:m-2 sectionCustom  xs:bg-black  md:border xs:bg-none border-white border-opacity-10 hover:drop-shadow-sm   hover:shadow-glow">
            <div className="opacity-90 text-fontGray bg-secondMainCardLight pt-8 pb-4 px-6 text-left md:rounded-t-2xl xl:text-xl md:text-md xs:hidden md:inline-block">Lorem ipsum dolor sit amet</div>
            <div className=" flex bg-secondMainCard text-white xs:rounded-xl md:rounded-none  font-bold md:justify-between  md:items-center xs:justify-around xl:py-4 xl:px-4 md:py-3 md:px-6 xs:py-4 xs:mx-6 md:mx-0 md:rounded-b-2xl">
              <p>OPerps</p>
              <img src="assets\Icon.png" alt="icon" className="h-3 w-3" />
            </div>
          </section>
        </div>
      </main>
      <main className="xs:flex xs:flex-col xs:justify-center xs:items-center w-full">
        <section className="xs:flex xs:flex-col md:justify-center md:items-center xs:justify-center xs:items-center mt-40 w-5/6 h-auto xl:mx-28 md:mx-20 ">
          <div className="flex flex-col justify-center items-center h-52">
            <h4 className="font-urbanist font-semibold xl:text-4xl md:text-3xl xs:text-2xl text-white">Cross-chain swap</h4>
            <button className="border-2 border-buttonBorderDark rounded-md px-4 py-2 mt-3 bg-secondMainCardLight font-manrope text-buttonborder xl:text-sm md:text-xs font-extrabold hover:text-hoverColorChange hover:border-hoverColorChange hover:-translate-y-1" >Try swap</button>
          </div>
          <div className=" xs:flex xs:flex-col-reverse md:flex-row gap-14 bg-secondMainCard border border-secondMainCard rounded-3xl min-h-screen w-full md:justify-center xs:justify-center md:items-center xs:items-center">
            <div className=" flex flex-col md:w-1/3 xs:w-5/6 items-start">
              <h3 className=" font-manrope xl:text-3xl md:text-2xl text-wordings leading-10 font-light">Swap tokens natively using across <p className="inline xl:font-bold md:font-semibold text-white"> Solana, Aptos, Ethereum, zksync, Arbitrum, Sui, Optimism, Polygon and more!</p></h3>
              <button className="xs:w-full md:w-auto  bg-secondMainCardLight border-2 border-b-8 border-buttonBorderDark font-manrope text-buttonborder rounded-2xl xl:text-base md:text-xs xl:py-3.5 xl:px-6 md:py-3 md:px-3 xs:py-4 xl:font-extrabold md:font-bold my-6 opacity-70 shadow-glow hover:bg-secondMainCard hover:shadow-customdark hover:drop-shadow- hover:-translate-y-1" onClick={() => { handlePath("swap") }}>Swap now</button>
            </div>
            <div className="md:w-1/3 xs:mt-10 ">
              <img className="md:mx-9 xs:mx-6 md:w-w408 xs:w-5/6 h-h452" src="assets\image - 1.png" alt="Crosschain swap image" />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center mt-40 w-5/6 h-auto xl:mx-28 md:mx-20 gap-5">
          <div className="flex flex-col justify-center items-center h-52 gap-2">
            <p className="font-manrope font-bold text-sm text-footerborder">ECONIA</p>
            <h4 className="font-urbanist font-semibold xl:text-4xl md:text-3xl xs:text-2xl text-white">Trade</h4>
            <button className="bg-secondMainCardLight text-buttonborder  border border-buttonborder rounded-md px-4 py-2 mt-3 font-manrope xl:text-sm md:text-xs font-extrabold hover:text-hoverColorChange hover:border-hoverColorChange hover:-translate-y-1" >See whats new</button>
          </div>
          <div className="xs:flex xs:flex-col-reverse md:flex-row w-full h-auto gap-4">
            <div className="flex flex-col justify-center items-start md:w-1/2 h-auto xs:w-full bg-custom-gradient border rounded-3xl border-black md:px-28 md:py-8 xs:px-6 xs:py-6 mx-2 ">
              <h3 className=" font-manrope xl:text-3xl md:text-2xl xs:text-2xl text-white md:leading-10 font-light  ">Spot Trading. Buy and Sell with limit and market order-books. Built on Aptos.</h3>
              <button className=" border-2 border-b-8 border-buttonBorderDark font-manrope text-buttonborder bg-secondMainCardLight rounded-2xl xl:text-base md:text-xs xl:py-3.5 xl:px-6 md:py-3 md:px-3 xs:py-3 xs:px-4 xl:font-extrabold md:font-bold xs:font-bold my-6 shadow-glow hover:bg-secondMainCard hover:drop-shadow-sm hover:shadow-customdark hover:transition-all hover:-translate-y-1" onClick={() => { handlePath("swap") }}>Trade now</button>
            </div>
            <div className="relative md:w-1/2 xs:w-full bg-secondMainCard border border-secondMainCard border-opacity-10  rounded-3xl md:px-24 md:py-8 xs:py-2">
              <img className="md:w-full xs:w-full h-auto mt-7" src="assets\image 103.svg" alt="tradingImage" />
              <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-4/6 md:h-4/6 mt-7" src="assets\image 106.svg" alt="tradingImage2" />
            </div>
          </div>
          <div className="flex xs:flex-col-reverse w-full md:flex-row justify-center items-center bg-secondMainCard border border-secondMainCard rounded-3xl xs:py-3">
            <div className="flex flex-col justify-center items-start md:w-1/2 xs:w-full h-h78  md:px-28 md:py-8 xs:px-6 mx-2 md:gap-5 xs:gap-3">
              <h3 className=" font-manrope xl:text-3xl md:text-2xl xs:text-2xl text-white font-light  ">Trade with leverage</h3>
              <button className=" border-2 border-b-8 border-buttonBorderDark font-manrope text-buttonborder bg-secondMainCardLight rounded-2xl xl:text-base md:text-xs xs:text-sm xl:py-3.5 xl:px-6 md:py-3 md:px-3 xs:px-4 xs:py-3 xl:font-extrabold md:font-bold xs:font-bold shadow-glow hover:bg-secondMainCard hover:drop-shadow-sm hover:shadow-customdark hover:transition-all hover:-translate-y-1" onClick={() => { handlePath("swap") }}>Try Perps</button>
            </div>
            <div className="relative md:w-1/2 xs:w-full bg-secondMainCard border border-secondMainCard border-opacity-10  rounded-3xl md:px-24 md:py-8 xs:py-4">
              <img className="w-full h-auto mt-7" src="assets\image 103.svg" alt="tradingImage" />
              <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/6 h-4/6 mt-7" src="assets\image 106.svg" alt="tradingImage2" />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center mt-40 w-5/6 h-auto xl:mx-28 md:mx-20">
          <div className="flex flex-col justify-center items-center h-52 gap-2">
            <p className="font-manrope font-bold text-sm text-footerborder">ETHOSX</p>
            <h4 className="font-urbanist font-semibold xl:text-4xl md:text-3xl xs:text-2xl text-white">OPerps - Derivatives Token</h4>
            <button className="bg-secondMainCardLight text-buttonborder border border-buttonborder rounded-md px-4 py-2 mt-3 font-manrope xl:text-sm md:text-xs font-extrabold hover:text-hoverColorChange hover:border-hoverColorChange hover:-translate-y-1" >See whats new</button>
          </div>
          <div className="flex xs:flex-col-reverse md:flex-row w-full justify-center items-center bg-secondMainCard border border-secondMainCard rounded-3xl">
            <div className="flex flex-col justify-center items-start md:w-1/2 xs:w-full h-h78  md:px-28 md:py-8 xs:px-4 xs:py-4 mx-2 gap-5 ">
              <h3 className=" font-manrope xl:text-3xl md:text-2xl xs:text-2xl text-white font-light  "> A derivates token for trading and hedging.</h3>
              <button className=" border-2 border-b-8 border-buttonBorderDark font-manrope text-buttonborder bg-secondMainCardLight rounded-2xl xl:text-base md:text-xs xs:text-xs xl:py-3.5 xl:px-6 md:py-3 md:px-3 xs:px-4 xs:py-3 xl:font-extrabold md:font-bold xs:font-bold shadow-glow hover:bg-secondMainCard hover:drop-shadow-sm hover:shadow-customdark hover:transition-all hover:-translate-y-1" onClick={() => { handlePath("swap") }}>Try OPerps</button>
            </div>
            <div className="relative md:w-1/2 xs:w-full bg-secondMainCard border border-secondMainCard border-opacity-10  rounded-3xl md:px-24 md:py-8">
              <img className="w-full h-auto mt-7" src="assets\image 104.svg" alt="tradingImage" />
              <img className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-4/6 h-4/6 mt-7" src="assets\image 107.svg" alt="tradingImage2" />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center mt-40 w-5/6 min-h-full h-auto xl:mx-28 md:mx-20">
          <div className="flex flex-col justify-center items-center h-52">
            <h4 className="font-urbanist font-semibold xl:text-4xl md:text-3xl text-white">For Developers</h4>
            <button className="bg-secondMainCardLight text-buttonborder border border-buttonborder rounded-md px-4 py-2 mt-3 font-manrope xl:text-sm md:text-xs font-extrabold hover:text-hoverColorChange hover:border-hoverColorChange hover:-translate-y-1" >Explore Documentation</button>
          </div>
          <div className="flex xs:flex-col md:flex-row md:justify-between xs:justify-center xs:items-center gap-4 w-full min-h-full h-auto">
            <div className="flex flex-col md:w-w50 xs:w-full justify-center items-center bg-secondMainCard border border-secondMainCard border-opacity-10  rounded-3xl gap-10">
              <div className="flex flex-col justify-start p-8 gap-14">
                <div className=" flex flex-col w-full justify-start items-start ">
                  <div className="text-white">
                    <p className="font-semibold font-urbanist xl:text-4xl md:text-3xl">Mirai SDK</p>
                    <p className="font-manrope text-sm font-light leading-9">integrate with other dApps</p>
                  </div>
                  <button className="bg-secondMainCardLight text-buttonborder border border-buttonborder rounded-md px-4 py-2 mt-3 font-manrope text-xs font-bold hover:text-hoverColorChange hover:border-hoverColorChange hover:-translate-y-1" >Read Documentation</button>
                </div>
                <div className="bg-secondMainCardLight h-auto border border-sourceCode border-opacity-10 rounded-2xl my-6">
                  <div className="flex justify-between items-center bg-secondMainCard border border-sourceCode border-opacity-10 rounded-2xl mx-4 my-4">
                    <p className="font-sourceCodePro text-base  text-sourceCode tracking-widest leading-6 mx-4 my-4">npm install @kanalabs/ <br></br> paymaster-sdk</p>
                    <img className="w-5 h-5 mx-4 my-4" src="assets\copyIcon.png" alt="copy" />
                  </div>
                  <p className="font-sourceCodePro text-base text-sourceCode mx-4">or</p>
                  <div className="flex justify-between items-center bg-secondMainCard border border-sourceCode border-opacity-10 rounded-2xl mx-4 my-4">
                    <p className="font-sourceCodePro text-base text-sourceCode tracking-widest leading-6 mx-4 my-4">yarn add @kanalabs/ <br></br> paymaster-sdk</p>
                    <img className="w-5 h-5 mx-4 my-4" src="assets\copyIcon.png" alt="copy" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:w-w50 xs:w-full justify-center items-center bg-secondMainCard border border-secondMainCard border-opacity-10  rounded-3xl gap-10">
              <div className="flex flex-col justify-start p-8 gap-14">
                <div className=" flex flex-col w-full justify-start items-start ">
                  <div className="text-white">
                    <p className="font-semibold font-urbanist xl:text-4xl md:text-3xl">Cross-chain Swap</p>
                    <p className="font-manrope text-sm font-light leading-9">integrate with other dApps</p>
                  </div>
                  <button className="bg-secondMainCardLight text-buttonborder border border-buttonborder rounded-md px-4 py-2 mt-3 font-manrope text-xs font-bold hover:text-hoverColorChange hover:border-hoverColorChange hover:-translate-y-1" >Read Documentation</button>
                </div>
                <div className="bg-secondMainCardLight h-auto border border-sourceCode border-opacity-10 rounded-2xl my-6">
                  <div className="flex justify-between items-center bg-secondMainCard border border-sourceCode border-opacity-10 rounded-2xl mx-4 my-4">
                    <p className="font-sourceCodePro text-base  text-sourceCode tracking-widest leading-6 mx-4 my-4">npm install @kanalabs/ <br></br> paymaster-sdk</p>
                    <img className="w-5 h-5 mx-4 my-4" src="assets\copyIcon.png" alt="copy" />
                  </div>
                  <p className="font-sourceCodePro text-base text-sourceCode mx-4">or</p>
                  <div className="flex justify-between items-center bg-secondMainCard border border-sourceCode border-opacity-10 rounded-2xl mx-4 my-4">
                    <p className="font-sourceCodePro text-base text-sourceCode tracking-widest leading-6 mx-4 my-4">yarn add @kanalabs/ <br></br> paymaster-sdk</p>
                    <img className="w-5 h-5 mx-4 my-4" src="assets\copyIcon.png" alt="copy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="flex justify-end items-end m-10 ">
        <img className="gradient-border w-12 h-11 p-4 mx-4 hover:-translate-y-1" src="assets\Vector-goTop.png" alt="goToTop" />
      </div>
      <footer className=" flex xs:flex-col md:flex-row xs:justify-center bg-black min-h-96 mt-1 border-t border-footerborder border-opacity-30">
        <div className="md:w-1/2 md:h-80 xs:w-full md:items-start md:mx-12 mt-16" >
          <div className="flex items-center" >
            <img src="assets\logo.png" alt="logo" className="h-9  w-7" />
            <img src="assets\Kanalabs.png" alt="logoName" className="text-white h-10 w-40 pl-2 pt-1" />
          </div>
          <p className="opacity-50 text-white text-xs my-4 mx-1 font-manrope">&copy; Copyright 2024 Kana Labs</p>
        </div>
        <div className=" md:w-1/2 xs:w-full min-h-80 mt-16 font-manrope">
          <div className="flex md:justify-between xs:justify-around pt h-64">
            <div className="">
              <p className="text-white opacity-50 text-sm font-light">COMPANY</p>
              <p className="text-white text-base h-7 my-3 ">Who we are</p>
              <p className="text-white text-base h-7 my-3 ">FAQs</p>
              <p className="text-white text-base h-7 my-3">Blog</p>
            </div>
            <div className="">
              <p className="text-white opacity-50 te xt-sm font-light">LINKS</p>
              <p className="text-white text-base h-7 my-3 ">Documentation</p>
              <p className="text-white text-base h-7 my-3 ">SDKs</p>
              <p className="text-white text-base h-7 my-3">Launch App</p>
            </div>
            <div className="md:mr-12">
              <p className="text-white opacity-50 text-sm font-light">FOLLOW US</p>
              <div className="flex my-4">
                <img src="assets\Telegram.png" alt="telegram" className="mr-5 h-4 w-4" />
                <img src="assets\twitter.png" alt="twitter" className="mr-5 h-4 w-4" />
                <img src="assets\medium.png" alt="medium" className="mr-5 h-4 w-4" />
                <img src="assets\discord.png" alt="discord" className="mr-5 h-4 w-4" />
              </div>
              <p className="text-white text-sm my-4 px-8 py-2 gradient-border">Contact us</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="opacity text-footerborder text-xs">
              Terms & Conditions | Privacy Policy | Security
            </p>
            <div className="flex mx-6 justify-center items-center" >
              <img src="assets\Vector.png" alt="mail" className="h-3" />
              <p className="opacity text-footerborder text-xs mx-2">hello@kanalabs.io</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;