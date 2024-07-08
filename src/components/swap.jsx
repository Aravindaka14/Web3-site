import "./swap.css";


const Swap = () => {

    return (
        <main className="flex flex-row w-full max-w-full h-auto min-h-screen bg-black">
            <nav className="flex flex-col justify-between items-center w-w6 h-auto min-h-full bg-secondMainCardLight">
                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="my-5">
                        <img className="w-6 h-8" src="src\assets\logo.png" alt="logo" />
                    </div>
                    <div className="flex flex-col ">
                        <div className="w-14 h-14 px-5 py-4 bg-white bg-opacity-5 border rounded-2xl border-white border-opacity-0">
                            <img className="w-4 h-4 mt-1 text-white opacity-100" src="src\assets\Icon-coinsSwap.svg" alt="coinsSwap" />
                        </div>
                        <div className="w-14 h-14 px-5 py-4">
                            <img className="w-4 h-4 mt-1" src="src\assets\Icon-coinStacked.svg" alt="CoinsStacked" />
                        </div>
                        <div className="w-14 h-14 px-5 py-4">
                            <img className="w-4 h-4 mt-1" src="src\assets\Icon-coinsHand.svg" alt="CoinsHand" />
                        </div>
                        <div className="w-14 h-14 px-5 py-4">
                            <img className="w-4 h-4 mt-1" src="src\assets\Icon-scales.svg" alt="Scales" />
                        </div>
                        <div className="w-14 h-14 px-5 py-4">
                            <img className="w-4 h-4 mt-1" src="src\assets\Icon-barChart.svg" alt="barChart" />
                        </div>
                        <div className="w-14 h-14 px-5 py-4">
                            <img className="w-4 h-4 mt-1" src="src\assets\Icon-grid.svg" alt="grid" />
                        </div>
                    </div>
                </div>
                <div className="w-14 h-14 px-5 py-4 my-4 bg-secondMainCard border rounded-2xl border-secondMainCard">
                    <img className="w-4 h-5" src="src\assets\Icon-help.svg" alt="helpIcon" />
                </div>
            </nav>
            <section className="w-w94 h-full max-h-full ">
                <nav className="flex flex-row justify-around items-center h-h11 mx-4 py-6 bg-secondMainCard rounded-b-2xl">
                    <div className="w-1/5 px-6 py-3 flex flex-row justify-between items-center bg-navBarColor border border-navBarColor rounded-xl">
                        <p className="text-wordings font-manrope font-bold text-sm">Your Balance</p>
                        <b className="text-white font-manrope opacity-80 text-sm">1,234.00 USD</b>
                    </div>
                    <div className="w-1/5 px-6 py-2.5 flex flex-row justify-between items-center bg-navBarColor border border-navBarColor rounded-xl">
                        <div className="flex justify-between items-center gap-x-2">
                            <img className="w-4 h-4" src="src\assets\image 94 -Ethereum.svg" alt="ethereum" />
                            <p className="font-manrope font-extrabold text-sm text-white opacity-90 px-1">ETH</p>
                            <p className="text-fontGray">~1234 USDC</p>
                        </div>
                        <img className="w-4 h-4" src="src\assets\VectorDownLooking.svg" alt="vectorDownlooking" />
                    </div>
                    <div className="w-1/5 px-6 py-3 flex flex-row justify-start items-center bg-navBarColor border border-navBarColor rounded-xl">
                        <img className="w-4 h-4" src="src\assets\Icon-search.svg" alt="search" />
                        <p className="text-wordings font-manrope font-bold text-sm px-2">Search</p>
                    </div>
                    <div className="w-1/5 px-5 py-3 flex flex-row justify-between items-center bg-navBarColor border border-navBarColor rounded-xl">
                        <div className="flex flex-row justify-center items-center">
                            <img className="w-4 h-4" src="src\assets\Icon-profile.svg" alt="profile" />
                            <p className="text-sm font-bold text-buttonborder px-2">Profile</p>
                        </div>
                        <img className="w-6 h-5" src="src\assets\MetaMask_Fox 2.svg" alt="MetaMaskFox" />
                    </div>
                    <div className="flex justify-center items-center w-12 h-11  bg-navBarColor border rounded-2xl border-navBarColor">
                        <img className="w-6 h-6" src="src\assets\Icon-settings.svg" alt="settings" />
                    </div>
                </nav>
                <section className="h-5/6 flex flex-col justify-center items-center gap-4">
                    <div className="w-w37 flex flex-col gap-4">

                        <aritcle className="py-3">
                            <div className="flex justify-between">
                                <div className="flex ">
                                    <div className="flex gap-x-2 px-6 py-4 bg-secondMainCardLight border border-b-0 border-white border-opacity-10 rounded-t-xl">
                                        <img className="w-4 h-4" src="src\assets\Group-sameChain.svg" alt="same-chain" />
                                        <p className="font-manrope text-xs font-bold text-white opacity-80">Same-chain</p>
                                    </div>
                                    <div className="flex gap-x-2 px-6 py-4 bg-secondMainCard border border-white border-opacity-10 rounded-t-xl">
                                        <img className="w-4 h-4" src="src\assets\Group-crossChain.svg" alt="cross-chain" />
                                        <p className="font-manrope text-xs font-bold text-wordings">Cross-chain</p>
                                    </div>
                                </div>
                                <div className="flex justify-center mx-3">
                                    <img src="src\assets\Icon-greenColorgrid.svg" alt="grid" />
                                </div>
                            </div>
                            <div className="h-h56 bg-secondMainCardLight border border-white border-opacity-10 rounded-tl-none rounded-2xl p-6">
                            <button className="w-full font-manrope text-buttonborder text-opacity-100 bg-secondMainCardLight border border-b-8 border-buttonborder rounded-2xl py-3.5 px-6 font-extrabold my-6 opacity-70 shadow-glow hover:bg-secondMainCard hover:shadow-customdark hover:drop-shadow-sm " >Swap now</button>
                            </div>
                        </aritcle>


                        <aritcle className="flex flex-row justify-between items-center bg-secondMainCardLight border border-white border-opacity-10 rounded-2xl p-6 ">
                            <p className="mx-3 font-manrope text-fontGray text-sm font-normal">Additional details</p>
                            <div className="flex">
                                <p className="font-manrope text-wordings text-sm font-normal">0.00 USD</p>
                                <img className="mx-3" src="src\assets\VectorDownLooking2.svg" alt="vectorDownLooking" />
                            </div>
                        </aritcle>
                        <aritcle className="flex flex-row justify-between items-center bg-secondMainCardLight border border-white border-opacity-10 rounded-2xl p-6 ">
                            <p className="mx-3 font-manrope text-fontGray text-sm font-normal">More routes</p>
                            <div className="flex">
                                <p className="font-manrope text-wordings text-sm font-normal">0.00 USD</p>
                                <img className="mx-3.5" src="src\assets\VectorSideLooking.svg" alt="vectorSideLooking" />
                            </div>

                        </aritcle>
                    </div>
                </section>
            </section>
        </main>
    )
};

export default Swap;