
const Swap = () => {

    return (
        <main className="flex flex-row w-full max-w-full h-auto bg-black">
            <nav className="flex flex-col justify-between items-center w-w6 h-auto min-h-full bg-secondMainCardLight">
                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="my-5">
                        <img className="w-6 h-8" src="assets\logo.png" alt="logo" />
                    </div>
                    <div className="flex flex-col ">
                        <div className="w-14 h-14 px-5 py-4 bg-white bg-opacity-5 border rounded-2xl border-white border-opacity-0">
                            <img className="w-4 h-4 mt-1 text-white opacity-100" src="assets\Icon-coinsSwap.svg" alt="coinsSwap" />
                        </div>
                        <div className="w-14 h-14 px-5 py-4">
                            <img className="w-4 h-4 mt-1" src="assets\Icon-coinStacked.svg" alt="CoinsStacked" />
                        </div>
                        <div className="w-14 h-14 px-5 py-4">
                            <img className="w-4 h-4 mt-1" src="assets\Icon-coinsHand.svg" alt="CoinsHand" />
                        </div>
                        <div className="w-14 h-14 px-5 py-4">
                            <img className="w-4 h-4 mt-1" src="assets\Icon-scales.svg" alt="Scales" />
                        </div>
                        <div className="w-14 h-14 px-5 py-4">
                            <img className="w-4 h-4 mt-1" src="assets\Icon-barChart.svg" alt="barChart" />
                        </div>
                        <div className="w-14 h-14 px-5 py-4">
                            <img className="w-4 h-4 mt-1" src="assets\Icon-grid.svg" alt="grid" />
                        </div>
                    </div>
                </div>
                <div className="w-14 h-14 px-5 py-4 my-4 bg-secondMainCard border rounded-2xl border-secondMainCard">
                    <img className="w-4 h-5" src="assets\Icon-help.svg" alt="helpIcon" />
                </div>
            </nav>
            <section className="w-w94 h-auto ">
                <nav className="flex flex-row justify-around items-center h-h11 mx-4  bg-secondMainCard rounded-b-2xl">
                    <div className="w-1/5 px-6 xl:py-3 md:py-2 flex flex-row justify-between items-center bg-navBarColor border border-navBarColor rounded-xl">
                        <p className="text-wordings font-manrope font-bold xl:text-sm md:text-xs">Your Balance</p>
                        <b className="text-white font-manrope opacity-80 xl:text-sm md:text-xs">1,234.00 USD</b>
                    </div>
                    <div className="w-1/5 px-6 py-2.5 flex flex-row justify-between items-center bg-navBarColor border border-navBarColor rounded-xl">
                        <div className="flex justify-between items-center gap-x-2">
                            <img className="w-4 h-4" src="assets\image 94 -Ethereum.svg" alt="ethereum" />
                            <p className="font-manrope font-extrabold xl:text-sm md:text-xs text-white opacity-90 px-1">ETH</p>
                            <p className="text-fontGray md:text-xs">~1234 USDC</p>
                        </div>
                        <img className="w-4 h-4" src="assets\VectorDownLooking.svg" alt="vectorDownlooking" />
                    </div>
                    <div className="w-1/5 px-6 py-3 flex flex-row justify-start items-center bg-navBarColor border border-navBarColor rounded-xl">
                        <img className="w-4 h-4" src="assets\Icon-search.svg" alt="search" />
                        <p className="text-wordings font-manrope font-bold text-sm px-2">Search</p>
                    </div>
                    <div className="w-1/5 px-5 py-3 flex flex-row justify-between items-center bg-navBarColor border border-navBarColor rounded-xl">
                        <div className="flex flex-row justify-center items-center">
                            <img className="w-4 h-4" src="assets\Icon-profile.svg" alt="profile" />
                            <p className="text-sm font-bold text-buttonborder px-2">Profile</p>
                        </div>
                        <img className="w-6 h-5" src="assets\MetaMask_Fox 2.svg" alt="MetaMaskFox" />
                    </div>
                    <div className="flex justify-center items-center xl:w-12 xl:h-11 lg:w-10 lg:h-9  bg-navBarColor border rounded-2xl border-navBarColor">
                        <img className="lg:w-4 lg:h-4 xl:w-6 xl:h-6 " src="assets\Icon-settings.svg" alt="settings" />
                    </div>
                </nav>
                <section className="flex flex-col justify-center items-center gap-4 py-4">
                    <div className="w-w37 flex flex-col gap-4">

                        <aritcle className="py-3">
                            <div className="flex justify-between">
                                <div className="flex ">
                                    <div className="flex gap-x-2 px-6 py-5 bg-secondMainCardLight border border-b-0 border-white border-opacity-10 rounded-t-2xl">
                                        <img className="w-4 h-4" src="assets\Group-sameChain.svg" alt="same-chain" />
                                        <p className="font-manrope text-xs font-bold text-white opacity-80">Same-chain</p>
                                    </div>
                                    <div className="flex gap-x-2 px-6 py-5 bg-secondMainCard border border-white border-opacity-10 rounded-t-2xl">
                                        <img className="w-4 h-4" src="assets\Group-crossChain.svg" alt="cross-chain" />
                                        <p className="font-manrope text-xs font-bold text-wordings">Cross-chain</p>
                                    </div>
                                </div>
                                <div className="flex justify-center mx-3">
                                    <img src="assets\Icon-greenColorgrid.svg" alt="grid" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-start h-h56 bg-secondMainCardLight border border-white border-opacity-10 rounded-tl-none rounded-2xl p-6 gap-4">
                                <div className="flex w-full justify-around">
                                    <p className="w-5/6 font-manrope text-sm font-bold text-white opacity-80 ">Same-chain Swap</p>
                                    <img src="assets\Icon-refresh.svg" alt="refreshIcon" />
                                    <img src="assets\Icon-settingsConsole.svg" alt="settings" />
                                </div>
                                <div className="w-full flex justify-start items-center xl:gap-4 lg:gap-3">
                                    <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-2">
                                        <img className=" bg-white rounded-full" src="assets\Group - 1.svg" alt="vector1" />
                                    </div>
                                    <div className="w-10 h-10 flex justify-center items-center">
                                        <div className="bg-black rounded-full flex justify-center items-center lg:w-6 lg:h-6 xl:w-8 xl:h-8">
                                            <img className="" src="assets\Group -2.svg" alt="vector2" />
                                        </div>
                                    </div>
                                    <div className="bg-yellow-400 rounded-full">
                                        <img className="p-2 " src="assets\Vector-3.svg" alt="vector3" />
                                    </div>
                                    <div className="bg-purple rounded-full">
                                        <img className="p-2 " src="assets\Vector-4.svg" alt="vector4" />
                                    </div>
                                    <div className="">
                                        <img className="xl:w-6 xl:h-6 lg:w-8 lg:h-8" src="assets\arbitrum - 5.svg" alt="vector5" />
                                    </div>
                                    <div className="bg-orangeRed rounded-full">
                                        <img className="p-2 " src="assets\Vector-6.svg" alt="vector6" />
                                    </div>
                                    <div className="">
                                        <img className="xl:w-12 xl:h-12 lg:w-14 lg:h-14 p-2" src="assets\ethereum-7.svg" alt="vector7" />
                                    </div>
                                    <div className="bg-black rounded-full">
                                        <img className="p-2 " src="assets\Vector-8.svg" alt="vector8" />
                                    </div>
                                    <div className="">
                                        <div className="bg-skyBlue rounded-full flex justify-center items-center xl:w-8 xl:h-8 lg:w-6 lg:h-6">
                                            <img className="p-2 " src="assets\path-9.svg" alt="vector9" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full px-6 py-4 bg-secondMainCard border border-white border-opacity-10 rounded-2xl gap-3">
                                    <div className="flex justify-between gap-4">
                                        <div className="flex flex-col justify-around gap-2 w-3/5 border-b-2 border-white border-opacity-10">
                                            <div className="flex gap-2">
                                                <p className="font-manrope font-normal text-xs text-wordings">Pay from</p>
                                                <p className="font-manrope font-extrabold text-xs text-buttonborder">Connect Wallet</p>
                                            </div>
                                            <div className="">
                                                <p className="font-manrope font-medium text-xl text-wordings">0.00</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-start w-2/5 xl:p-4 lg:p-2 bg-secondMainCardLight border border-white border-opacity-10 rounded-2xl gap-2">
                                            <img className="w-10 h-10" src="assets\Group round and small round.svg" alt="round" />
                                            <div className="px-1">
                                                <p className="font-manrope font-extrabold text-white text-opacity-80 xl:text-lg lg:text-sm">Token</p>
                                                <p className="font-manrope font-medium text-xs text-white text-opacity-80">on chain</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex gap-2">
                                            <p className="font-manrope text-xs font-medium text-fontGray">USD</p>
                                            <p className="font-manrope text-xs font-bold text-fontGray">0</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-manrope text-xs font-medium text-fontGray">Balance</p>
                                            <p className="font-manrope text-xs font-bold text-fontGray">-</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full px-6 py-4 bg-secondMainCard border border-white border-opacity-10 rounded-2xl gap-3">
                                    <div className="flex justify-between gap-4">
                                        <div className="flex flex-col justify-around gap-2 w-3/5 border-b-2 border-white border-opacity-10">
                                            <div className="flex gap-2">
                                                <p className="font-manrope font-normal text-xs text-wordings">Receive to</p>
                                                <p className="font-manrope font-extrabold text-xs text-buttonborder">Connect Wallet</p>
                                            </div>
                                            <div className="">
                                                <p className="font-manrope font-medium text-xl text-wordings">0.00</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-start w-2/5 xl:p-4 lg:p-2 bg-secondMainCardLight border border-white border-opacity-10 rounded-2xl gap-2">
                                            <img className="w-10 h-10" src="assets\Group round and small round.svg" alt="round" />
                                            <div className="px-1">
                                                <p className="font-manrope font-extrabold text-white text-opacity-80 xl:text-lg lg:text-sm">Token</p>
                                                <p className="font-manrope font-medium text-xs text-white text-opacity-80">on chain</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex gap-2">
                                            <p className="font-manrope text-xs font-medium text-fontGray">USD</p>
                                            <p className="font-manrope text-xs font-bold text-fontGray">0</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-manrope text-xs font-medium text-fontGray">Balance</p>
                                            <p className="font-manrope text-xs font-bold text-fontGray">-</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full font-manrope text-buttonborder text-opacity-100 bg-secondMainCardLight border border-b-8 border-buttonborder rounded-2xl py-3.5 px-6 font-extrabold  opacity-70 shadow-glow hover:bg-secondMainCard hover:shadow-customdark hover:drop-shadow-sm " >Swap now</button>
                            </div>
                        </aritcle>


                        <aritcle className="flex flex-row justify-between items-center bg-secondMainCardLight border border-white border-opacity-10 rounded-2xl p-6 ">
                            <p className="mx-3 font-manrope text-fontGray text-sm font-normal">Additional details</p>
                            <div className="flex">
                                <p className="font-manrope text-wordings text-sm font-normal">0.00 USD</p>
                                <img className="mx-3" src="assets\VectorDownLooking2.svg" alt="vectorDownLooking" />
                            </div>
                        </aritcle>
                        <aritcle className="flex flex-row justify-between items-center bg-secondMainCardLight border border-white border-opacity-10 rounded-2xl p-6 ">
                            <p className="mx-3 font-manrope text-fontGray text-sm font-normal">More routes</p>
                            <div className="flex">
                                <p className="font-manrope text-wordings text-sm font-normal">0.00 USD</p>
                                <img className="mx-3.5" src="assets\VectorSideLooking.svg" alt="vectorSideLooking" />
                            </div>

                        </aritcle>
                    </div>
                </section>
            </section>
        </main>
    )
};

export default Swap;