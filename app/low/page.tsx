"use client";
import Generate from "../components/generate";
import { useEffect, useState } from "react";
import data from "@/app/data/low.json"

const Low = () => {
    const [month, setMonth] = useState<number>(0);
    const [week, setWeek] = useState<number>(0);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const m = parseInt(params.get('m') || '1');
        const w  = parseInt(params.get('w') || '0');
        setMonth(m);
        setWeek(w);
    }, []);

    if (!month) {
        return <div>Loading...</div>;
    }

    return <Generate learningPlan={data} defaultMonth={month} defaultWeek={week} />;
};

export default Low;


