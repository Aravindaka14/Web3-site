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
    <div className="bg-black max-w-full">

      <header className="flex w-full h-20 justify-between items-center stickyheader">
        <div className="flex h-9 items-center ml-8">
          <img src="src\assets\logo.png" alt="logo" className="xl:h-9 lg:h-7 w-auto " />
          <img src="src\assets\Kanalabs.png" alt="logoName" className="text-white xl:h-8 lg:h-7 w-auto pl-2 pt-1" />
        </div>
        <div className="mr-8">
          <img src="src\assets\Path.png" alt="features" className="bg-white w-5 h-0.5 m-1" />
          <img src="src\assets\math.mng" alt="features" className="bg-white w-5 h-0.5 m-1" />
          <img src="src\assets\math.mng" alt="features" className="bg-white w-5 h-0.5 m-1" />
        </div>
      </header>
      <main className="bg-black pt-20">
        <div className="flex pb-4">
          <div className="w-1/4 flex justify-center items-start">
            <img className="opacity-60 xl:w-60 lg:w-48 drop-shadow-heroImageShadow" src="src\assets\Group 1261152703.png" alt="logowhole" />
          </div>
          <div className="w-2/4 h-96">
            <div className=" heropageToplogo flex justify-center items-center">
              <p className="xl:text-exact lg:text-6xl leading-none font-bold font-urbanist heropagecustom pt-16">Connected and<br></br> simplified web3</p>
            </div>
            <br></br>
            <p className="text-center text-white font-manrope text-lg font-normal tracking-wide">Where Chains & Experiences Unite</p>
            <div className="flex justify-center ">
              <button className="bg-secondMainCardLight text-buttonborder border-2 border-solid border-buttonborder border-b-8 rounded-2xl xl:py-4 xl:px-6 lg:py-3 lg:px-3 font-manrope xl:text-base lg:text-sm xl:font-extrabold lg:font-bold mr-10 my-6 hover:bg-secondMainCard hover:drop-shadow-sm hover:shadow-customlight hover:transition-all" onClick={() => { handlePath("swap") }}>Launch App</button>
              <button className="font-manrope font-extrabold text-buttonborder xl:text-base lg:text-sm leading-4 hover:text-hoverColorChange">Learn More</button>
            </div>
          </div>
          <div className="w-1/4 flex justify-end items-start">
            <img className=" xl:w-60 lg:w-52 drop-shadow-heroImageShadow" alt="globe" src="src\assets\Frame -wholeEarthGlowy.svg" />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <section className="xl:w-60 xl:h-40 lg:w-52 lg:h-38 rounded-2xl xl:m-3 lg:m-2 section border border-white border-opacity-10 hover:drop-shadow-sm hover:shadow-glow ">
            <div className="opacity-90 text-fontGray bg-secondMainCardLight pt-8 pb-4 px-6 text-left rounded-t-2xl xl:text-xl lg:text-lg ">Lorem ipsum dolor sit amet</div>
            <div className=" flex bg-secondMainCard text-white  font-bold justify-between items-center xl:py-4 xl:px-4 lg:py-3 lg:px-6 rounded-b-2xl">
              <p>Trade</p>
              <img src="src\assets\Icon.png" alt="icon" className="h-3 w-3 drop-shadow-customColor" />
            </div>
          </section>
          <section className="xl:w-60 xl:h-40 lg:w-52 lg:h-38 rounded-2xl xl:m-3 lg:m-2 section border border-white border-opacity-10 hover:drop-shadow-sm hover:shadow-glow">
            <div className="opacity-90 text-fontGray bg-secondMainCardLight pt-8 pb-4 px-6 text-left rounded-t-2xl xl:text-xl lg:text-lg">Try the new cross-chain swap</div>
            <div className=" flex bg-secondMainCard text-white font-bold justify-between items-center xl:py-4 xl:px-4 lg:py-3 lg:px-6 rounded-b-2xl">
              <p>Swaps</p>
              <img src="src\assets\Icon.png" alt="icon" className="h-3 w-3" />
            </div>
          </section>
          <section className="xl:w-60 xl:h-40 lg:w-52 lg:h-38 rounded-2xl xl:m-3 lg:m-2 section border border-white border-opacity-10 hover:drop-shadow-sm hover:shadow-glow">
            <div className="opacity-90 text-fontGray bg-secondMainCardLight pt-8 pb-4 px-6 text-left rounded-t-2xl xl:text-xl lg:text-lg">Lorem ipsum dolor sit amet</div>
            <div className=" flex bg-secondMainCard text-white  font-bold justify-between items-center xl:py-4 xl:px-4 lg:py-3 lg:px-6 rounded-b-2xl">
              <p>Perps</p>
              <img src="src\assets\Icon.png" alt="icon" className="h-3 w-3" />
            </div>
          </section>
          <section className="xl:w-60 xl:h-40 lg:w-52 lg:h-38 rounded-2xl xl:m-3 lg:m-2 section border border-white border-opacity-10 hover:drop-shadow-sm hover:shadow-glow">
            <div className="opacity-90 text-fontGray bg-secondMainCardLight pt-8 pb-4 px-6 text-left rounded-t-2xl xl:text-xl lg:text-lg">Lorem ipsum dolor sit amet</div>
            <div className=" flex bg-secondMainCard text-white  font-bold justify-between items-center xl:py-4 xl:px-4 lg:py-3 lg:px-6 rounded-b-2xl">
              <p>OPerps</p>
              <img src="src\assets\Icon.png" alt="icon" className="h-3 w-3" />
            </div>
          </section>
        </div>
      </main>
      <main className="w-full">
        <section className="flex flex-col justify-center items-center mt-40 w-5/6 h-auto xl:mx-28 lg:mx-20">
          <div className="flex flex-col justify-center items-center h-52">
            <h4 className="font-urbanist font-semibold xl:text-4xl lg:text-3xl text-white">Cross-chain swap</h4>
            <button className="border-2 border-buttonBorderDark rounded-lg px-4 py-2 mt-3 bg-secondMainCardLight font-manrope text-buttonborder xl:text-sm lg:text-xs font-extrabold hover:text-hoverColorChange hover:border-hoverColorChange" >Try swap</button>
          </div>
          <div className=" flex gap-14 bg-secondMainCard border border-secondMainCard rounded-3xl min-h-screen w-full justify-center items-center ">
            <div className=" flex flex-col w-1/3 items-start">
              <h3 className=" font-manrope xl:text-3xl lg:text-2xl text-wordings leading-10 font-light">Swap tokens natively using across <p className="inline xl:font-bold lg:font-semibold text-white"> Solana, Aptos, Ethereum, zksync, Arbitrum, Sui, Optimism, Polygon and more!</p></h3>
              <button className="bg-secondMainCardLight border-2 border-b-8 border-buttonBorderDark font-manrope text-buttonborder rounded-2xl xl:text-base lg:text-xs xl:py-3.5 xl:px-6 lg:py-3 lg:px-3 xl:font-extrabold lg:font-bold my-6 opacity-70 shadow-glow hover:bg-secondMainCard hover:shadow-customdark hover:drop-shadow-sm" onClick={() => { handlePath("swap") }}>Swap now</button>
            </div>
            <div className="w-1/3">
              <img className="mx-9 w-w408 h-h452" src="src\assets\image - 1.png" alt="Crosschain swap image" />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center mt-40 w-5/6 h-auto xl:mx-28 lg:mx-20 gap-5">
          <div className="flex flex-col justify-center items-center h-52 gap-2">
            <p className="font-manrope font-bold text-sm text-footerborder">ECONIA</p>
            <h4 className="font-urbanist font-semibold xl:text-4xl lg:text-3xl text-white">Trade</h4>
            <button className="bg-secondMainCardLight text-buttonborder  border border-buttonborder rounded-lg px-4 py-2 mt-3 font-manrope xl:text-sm lg:text-xs font-extrabold hover:text-hoverColorChange hover:border-hoverColorChange" >See whats new</button>
          </div>
          <div className="flex  w-full h-auto gap-4">
            <div className="flex flex-col justify-center items-start w-1/2 h-auto bg-custom-gradient border rounded-3xl border-black px-28 py-8 mx-2 ">
              <h3 className=" font-manrope xl:text-3xl lg:text-2xl text-white leading-10 font-light  ">Spot Trading. Buy and Sell with limit and market order-books. Built on Aptos.</h3>
              <button className=" border-2 border-b-8 border-buttonBorderDark font-manrope text-buttonborder bg-secondMainCardLight rounded-2xl xl:text-base lg:text-xs xl:py-3.5 xl:px-6 lg:py-3 lg:px-3 xl:font-extrabold lg:font-bold my-6 shadow-glow hover:bg-secondMainCard hover:drop-shadow-sm hover:shadow-customdark hover:transition-all" onClick={() => { handlePath("swap") }}>Trade now</button>
            </div>
            <div className="relative w-1/2  bg-secondMainCard border border-secondMainCard border-opacity-10  rounded-3xl px-24 py-8">
              <img className="w-full h-auto mt-7" src="src\assets\image 103.svg" alt="tradingImage" />
              <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/6 h-4/6 mt-7" src="src\assets\image 106.svg" alt="tradingImage2" />
            </div>
          </div>
          <div className="flex w-full justify-center items-center bg-secondMainCard border border-secondMainCard rounded-3xl">
            <div className="flex flex-col justify-center items-start w-1/2 h-h78  px-28 py-8 mx-2 gap-5 ">
              <h3 className=" font-manrope xl:text-3xl lg:text-2xl text-white font-light  ">Trade with leverage</h3>
              <button className=" border-2 border-b-8 border-buttonBorderDark font-manrope text-buttonborder bg-secondMainCardLight rounded-2xl xl:text-base lg:text-xs xl:py-3.5 xl:px-6 lg:py-3 lg:px-3 xl:font-extrabold lg:font-bold shadow-glow hover:bg-secondMainCard hover:drop-shadow-sm hover:shadow-customdark hover:transition-all" onClick={() => { handlePath("swap") }}>Try Perps</button>
            </div>
            <div className="relative w-1/2 bg-secondMainCard border border-secondMainCard border-opacity-10  rounded-3xl px-24 py-8">
              <img className="w-full h-auto mt-7" src="src\assets\image 103.svg" alt="tradingImage" />
              <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/6 h-4/6 mt-7" src="src\assets\image 106.svg" alt="tradingImage2" />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center mt-40 w-5/6 h-auto xl:mx-28 lg:mx-20">
          <div className="flex flex-col justify-center items-center h-52 gap-2">
            <p className="font-manrope font-bold text-sm text-footerborder">ETHOSX</p>
            <h4 className="font-urbanist font-semibold xl:text-4xl lg:text-3xl text-white">OPerps - Derivatives Token</h4>
            <button className="bg-secondMainCardLight text-buttonborder border border-buttonborder rounded-lg px-4 py-2 mt-3 font-manrope xl:text-sm lg:text-xs font-extrabold hover:text-hoverColorChange hover:border-hoverColorChange" >See whats new</button>
          </div>
          <div className="flex w-full justify-center items-center bg-secondMainCard border border-secondMainCard rounded-3xl">
            <div className="flex flex-col justify-center items-start w-1/2 h-h78  px-28 py-8 mx-2 gap-5 ">
              <h3 className=" font-manrope xl:text-3xl lg:text-2xl text-white font-light  "> A derivates token for trading and hedging.</h3>
              <button className=" border-2 border-b-8 border-buttonBorderDark font-manrope text-buttonborder bg-secondMainCardLight rounded-2xl xl:text-base lg:text-xs xl:py-3.5 xl:px-6 lg:py-3 lg:px-3 xl:font-extrabold lg:font-bold shadow-glow hover:bg-secondMainCard hover:drop-shadow-sm hover:shadow-customdark hover:transition-all" onClick={() => { handlePath("swap") }}>Try OPerps</button>
            </div>
            <div className="relative w-1/2 bg-secondMainCard border border-secondMainCard border-opacity-10  rounded-3xl px-24 py-8">
              <img className="w-full h-auto mt-7" src="src\assets\image 104.svg" alt="tradingImage" />
              <img className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-4/6 h-4/6 mt-7" src="src\assets\image 107.svg" alt="tradingImage2" />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center mt-40 w-5/6 min-h-full h-auto xl:mx-28 lg:mx-20">
          <div className="flex flex-col justify-center items-center h-52">
            <h4 className="font-urbanist font-semibold xl:text-4xl lg:text-3xl text-white">For Developers</h4>
            <button className="bg-secondMainCardLight text-buttonborder border border-buttonborder rounded-lg px-4 py-2 mt-3 font-manrope xl:text-sm lg:text-xs font-extrabold hover:text-hoverColorChange hover:border-hoverColorChange" >Explore Documentation</button>
          </div>
          <div className="flex justify-between gap-4 w-full min-h-full h-auto">
            <div className="flex flex-col w-w50 justify-center items-center bg-secondMainCard border border-secondMainCard border-opacity-10  rounded-3xl gap-10">
              <div className="flex flex-col justify-start gap-14">
                <div className=" flex flex-col w-full justify-start items-start ">
                  <div className="text-white">
                    <p className="font-semibold font-urbanist xl:text-4xl lg:text-3xl">Mirai SDK</p>
                    <p className="font-manrope text-sm font-light leading-9">integrate with other dApps</p>
                  </div>
                  <button className="bg-secondMainCardLight text-buttonborder border border-buttonborder rounded-lg px-4 py-2 mt-3 font-manrope text-xs font-bold hover:text-hoverColorChange hover:border-hoverColorChange" >Read Documentation</button>
                </div>
                <div className="bg-secondMainCardLight h-auto border border-sourceCode border-opacity-10 rounded-2xl my-6">
                  <div className="flex justify-between items-center bg-secondMainCard border border-sourceCode border-opacity-10 rounded-2xl mx-4 my-4">
                    <p className="font-sourceCodePro text-base  text-sourceCode tracking-widest leading-6 mx-4 my-4">npm install @kanalabs/ <br></br> paymaster-sdk</p>
                    <img className="w-5 h-5 mx-4 my-4" src="src\assets\copyIcon.png" alt="copy" />
                  </div>
                  <p className="font-sourceCodePro text-base text-sourceCode mx-4">or</p>
                  <div className="flex justify-between items-center bg-secondMainCard border border-sourceCode border-opacity-10 rounded-2xl mx-4 my-4">
                    <p className="font-sourceCodePro text-base text-sourceCode tracking-widest leading-6 mx-4 my-4">yarn add @kanalabs/ <br></br> paymaster-sdk</p>
                    <img className="w-5 h-5 mx-4 my-4" src="src\assets\copyIcon.png" alt="copy" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-w50 justify-center items-center bg-secondMainCard border border-secondMainCard border-opacity-10  rounded-3xl gap-10">
              <div className="flex flex-col justify-start p-8 gap-14">
                <div className=" flex flex-col w-full justify-start items-start ">
                  <div className="text-white">
                    <p className="font-semibold font-urbanist xl:text-4xl lg:text-3xl">Cross-chain Swap</p>
                    <p className="font-manrope text-sm font-light leading-9">integrate with other dApps</p>
                  </div>
                  <button className="bg-secondMainCardLight text-buttonborder border border-buttonborder rounded-lg px-4 py-2 mt-3 font-manrope text-xs font-bold hover:text-hoverColorChange hover:border-hoverColorChange" >Read Documentation</button>
                </div>
                <div className="bg-secondMainCardLight h-auto border border-sourceCode border-opacity-10 rounded-2xl my-6">
                  <div className="flex justify-between items-center bg-secondMainCard border border-sourceCode border-opacity-10 rounded-2xl mx-4 my-4">
                    <p className="font-sourceCodePro text-base  text-sourceCode tracking-widest leading-6 mx-4 my-4">npm install @kanalabs/ <br></br> paymaster-sdk</p>
                    <img className="w-5 h-5 mx-4 my-4" src="src\assets\copyIcon.png" alt="copy" />
                  </div>
                  <p className="font-sourceCodePro text-base text-sourceCode mx-4">or</p>
                  <div className="flex justify-between items-center bg-secondMainCard border border-sourceCode border-opacity-10 rounded-2xl mx-4 my-4">
                    <p className="font-sourceCodePro text-base text-sourceCode tracking-widest leading-6 mx-4 my-4">yarn add @kanalabs/ <br></br> paymaster-sdk</p>
                    <img className="w-5 h-5 mx-4 my-4" src="src\assets\copyIcon.png" alt="copy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="flex justify-end items-end m-10 ">
        <img className="gradient-border w-12 h-11 p-4 mx-4" src="src\assets\Vector-goTop.png" alt="goToTop" />
      </div>
      <footer className=" flex bg-black h-96 mt-1 border-t border-footerborder border-opacity-30">
        <div className="w-1/2 h-80 items-start mx-12 mt-16" >
          <div className="flex items-center" >
            <img src="src\assets\logo.png" alt="logo" className="h-9  w-7" />
            <img src="src\assets\Kanalabs.png" alt="logoName" className="text-white h-10 w-40 pl-2 pt-1" />
          </div>
          <p className="opacity-50 text-white text-xs my-4 mx-1 font-manrope">&copy; Copyright 2024 Kana Labs</p>
        </div>
        <div className=" w-1/2 h-80 mt-16 font-manrope">
          <div className="flex justify-between pt h-64">
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
            <div className="mr-12">
              <p className="text-white opacity-50 text-sm font-light">FOLLOW US</p>
              <div className="flex my-4">
                <img src="src\assets\Telegram.png" alt="telegram" className="mr-5 h-4 w-4" />
                <img src="src\assets\twitter.png" alt="twitter" className="mr-5 h-4 w-4" />
                <img src="src\assets\medium.png" alt="medium" className="mr-5 h-4 w-4" />
                <img src="src\assets\discord.png" alt="discord" className="mr-5 h-4 w-4" />
              </div>
              <p className="text-white text-sm my-4 px-8 py-2 gradient-border">Contact us</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="opacity text-footerborder text-xs">
              Terms & Conditions | Privacy Policy | Security
            </p>
            <div className="flex mx-6 justify-center items-center" >
              <img src="src\assets\Vector.png" alt="mail" className="h-3" />
              <p className="opacity text-footerborder text-xs mx-2">hello@kanalabs.io</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;