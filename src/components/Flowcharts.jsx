import React from "react";

const Flowcharts = () => {
  // Consistency helpers
  const containerBase =
    "w-full bg-white dark:bg-zinc-900/30 backdrop-blur-md p-10 rounded-[40px] border-[1px] border-black/20 dark:border-white/20 flex flex-col items-center transition-all";
  const stepBase =
    "w-full py-3 rounded-xl font-bold text-center text-sm border transition-all duration-300";

  // Specific Style Mappings
  const whiteStep = "bg-[#D0BCFF] text-black border-white shadow-lg";
  const purpleStep = "bg-[#D0BCFF] text-black border-[#D0BCFF] shadow-md";
  const greenStep = "bg-[#4ADE80] text-black border-[#4ADE80] shadow-md";
  const categoryBubble =
    "mb-6 bg-white text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white shadow-xl";

  return (
    <section className="py-24 bg-[#B197FC] dark:bg-black text-black dark:text-white px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            The RecruiterAI Workflow
          </h2>
          <p className="text-xl opacity-80 font-medium">
            Standardized automation for every hiring stage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Flow 1: Screening */}
          <div className="flex flex-col items-center">
            <span className={categoryBubble}>Screening</span>
            <div className={containerBase}>
              <div className={`${stepBase} ${whiteStep}`}>New Application</div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className={`${stepBase} ${purpleStep}`}>
                AI Resume Screening
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className={`${stepBase} ${whiteStep}`}>
                Auto-send Questions
              </div>
              <div className="w-px h-6 bg-white/20"></div>

              <div className="relative w-20 h-20 border-[1.5px] border-black rotate-45 flex items-center justify-center bg-white/10 shadow-lg">
                <span className="-rotate-45 text-[10px] font-black text-center">
                  Score <br /> &gt; 75%?
                </span>
              </div>

              <div className="flex justify-between w-full px-2 mt-4 mb-2 text-[10px] font-black opacity-60">
                <span>YES</span>
                <span>NO</span>
              </div>

              <div className={`${stepBase} ${greenStep}`}>Auto-schedule</div>
            </div>
          </div>

          {/* Flow 2: Interviews */}
          <div className="flex flex-col items-center">
            <span className={categoryBubble}>Interviews</span>
            <div className={containerBase}>
              <div className={`${stepBase} ${whiteStep}`}>
                Candidate Accepts
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className={`${stepBase} ${purpleStep}`}>
                Round 1: AI Video
              </div>
              <div className="w-px h-6 bg-white/20"></div>

              <div className="w-20 h-20 border-[1.5px] border-black rotate-45 flex items-center justify-center bg-white/10 shadow-lg">
                <span className="-rotate-45 text-[10px] font-black text-center">
                  Score <br /> &gt; 80%?
                </span>
              </div>

              <div className="w-px h-6 bg-white/20 mt-4"></div>
              <div className={`${stepBase} ${whiteStep}`}>
                Round 2: Manager Sync
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className={`${stepBase} ${greenStep} bg-[#22C55E]`}>
                Send Offer
              </div>
            </div>
          </div>

          {/* Flow 3: Offer */}
          <div className="flex flex-col items-center">
            <span className={categoryBubble}>Offer</span>
            <div className={containerBase}>
              <div className={`${stepBase} ${whiteStep}`}>Reference Check</div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className={`${stepBase} ${whiteStep}`}>Final Approval</div>
              <div className="w-px h-6 bg-white/20"></div>

              <div className="w-20 h-20 border-[1.5px] border-blackrotate-45 flex items-center justify-center bg-white/10 shadow-lg">
                <span className="-rotate-45 text-[10px] font-black text-center">
                  Accepted?
                </span>
              </div>

              <div className="w-px h-6 bg-white/20 mt-4"></div>
              <div className={`${stepBase} ${purpleStep}`}>AI Onboarding</div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className={`${stepBase} ${whiteStep}`}>
                Hired & Sync to HRIS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flowcharts;
