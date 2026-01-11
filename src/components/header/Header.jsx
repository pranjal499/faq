export default function Header() {
    return (
        <div className="w-[98vw]">

            <div className="w-[53rem] h-[26rem] border-4 border-white mx-auto my-6 flex">
                <div className="relative">
                    <img 
                        src="images/burst.png" 
                        alt="Got question image" 
                        className="w-[22rem] h-[22rem] -rotate-[15.85deg] opacity-90 relative"
                    />
                    <h3 className="w-[437.4px] h-[337.3px] top-[7rem] left-[9rem] -rotate-[22.93deg] opacity-100 text-2xl text-[#C94A2F] absolute">
                        Got Questions?
                    </h3>
                </div>
                <div className="my-[5rem] ml-16">

                    <h1>FAQ</h1>
                    <div className="w-[25rem] h-12 text-[0.7rem] text-[#C94A2F]">
                        <p>Got questions about the hackathon?</p>
                        <p>We've got all the info you need to get started</p>
                        <br />
                        <p>Still curious?</p>
                        <p> Ping us anytime at team.gdg.jec@gmail.com  — we're all ears (and keyboards)! 👨‍💻👩‍💻</p>
                    </div>
                </div>
            </div>
        </div>

    )
}