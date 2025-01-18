"use client";
import Generate from "../components/generate";
import { useEffect, useState } from "react";
import data from "@/app/data/low.json"
import { ProgressProvider } from "../context/progress";
import ProgressBar from "../components/progressbar";
import { calculateTotalTasks } from "../utils/util";

const Low = () => {
    const [month, setMonth] = useState<number>(0);
    const [week, setWeek] = useState<number>(0);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const m = parseInt(params.get('m') || '1');
        const w = parseInt(params.get('w') || '0');
        setMonth(m);
        setWeek(w);
    }, []);

    if (!month) {
        return <div className="flex flex-col min-h-screen items-center justify-center">
            <svg className="h-12 w-12 animation-spin" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M13 2h-2v6h2V2zm0 14h-2v6h2v-6zm9-5v2h-6v-2h6zM8 13v-2H2v2h6zm7-6h2v2h-2V7zm4-2h-2v2h2V5zM9 7H7v2h2V7zM5 5h2v2H5V5zm10 12h2v2h2v-2h-2v-2h-2v2zm-8 0v-2h2v2H7v2H5v-2h2z" fill="currentColor" /> </svg>
        </div>
    }

    return <ProgressProvider roadmapId="low">
     <ProgressBar total={calculateTotalTasks(data)}/>
     <Generate learningPlan={data} defaultMonth={month} defaultWeek={week} />;
    </ProgressProvider>;
};

export default Low;


