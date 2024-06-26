import "./index.css";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="bg-black">

        <header className="flex bg-black h-20 justify-between items-center bg-opacity-75">
          <div className="flex h-9 items-center ml-8">
            <img src="src\assets\Group 6.png" alt="logo" className="h-9  w-7" />
            <img src="src\assets\Kanalabs.png" alt="logoName" className="text-white h-8 w-32 pl-2 pt-1" />
          </div>
          <div className="mr-8">
            <img src="src\assets\Path.png" alt="features" className="bg-white w-5 h-0.5 m-1" />
            <img src="src\assets\math.mng" alt="features" className="bg-white w-5 h-0.5 m-1" />
            <img src="src\assets\math.mng" alt="features" className="bg-white w-5 h-0.5 m-1" />
          </div>
        </header>
        <main className="bg-black">
          <h3 className="text-7xl font-bold font-custom heropagecustom text-center items-start pt-16">Connected and<br></br> simplified web3</h3>
          <br></br>
          <p className="text-center heropagecustom2 ">Where Chains & Experiences Unite</p>
          <div className="flex justify-center align-center">
            <button className="button rounded-2xl py-3.5 px-6 font-extrabold mx-6 my-6" >Launch App</button>
            <button className="button2 font-extrabold leading-4 ">Learn More</button>
          </div>
          <div className="flex justify-center">
            <section className="w-60 h-36 rounded-2xl m-3 section customlight">
              <div className="fourboxes pt-8 pb-4 px-6 text-left rounded-t-2xl text-xl ">Lorem ipsum dolor sit amet</div>
              <div className=" flex bg-black fourboxes2  font-bold justify-between items-center py-4 px-4 rounded-b-2xl">
                <p>Trade</p>
                <img src="src\assets\Icon.png" alt="icon" className="h-3 w-3" />
              </div>
            </section>
            <section className="w-60 h-40 rounded-2xl m-3 section">
              <div className="fourboxes pt-8 pb-4 px-6 text-left rounded-t-2xl text-xl">Try the new cross-chain swap</div>
              <div className=" flex bg-black fourboxes2  font-bold justify-between items-center py-4 px-4 rounded-b-2xl">
                <p>Swaps</p>
                <img src="src\assets\Icon.png" alt="icon" className="h-3 w-3" />
              </div>
            </section><section className="w-60 h-40 rounded-2xl m-3 section">
              <div className="fourboxes pt-8 pb-4 px-6 text-left rounded-t-2xl text-xl">Lorem ipsum dolor sit amet</div>
              <div className=" flex bg-black fourboxes2  font-bold justify-between items-center py-4 px-4 rounded-b-2xl">
                <p>Perps</p>
                <img src="src\assets\Icon.png" alt="icon" className="h-3 w-3" />
              </div>
            </section><section className="w-60 h-40 rounded-2xl m-3 section">
              <div className="fourboxes pt-8 pb-4 px-6 text-left rounded-t-2xl text-xl">Lorem ipsum dolor sit amet</div>
              <div className=" flex bg-black fourboxes2  font-bold justify-between items-center py-4 px-4 rounded-b-2xl">
                <p>OPerps</p>
                <img src="src\assets\Icon.png" alt="icon" className="h-3 w-3" />
              </div>
            </section>
          </div>
        </main>

      </div>
    </>
  )
}

export default App