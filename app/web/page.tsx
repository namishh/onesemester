"use client";
import Generate from "../components/generate";
import { useEffect, useState } from "react";

const Web = () => {
    const [learningPlan, setLearningPlan] = useState<LearningPlan | null>(null);
    const [month, setMonth] = useState<number>(1);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const m = parseInt(params.get('m') || '1');
        setMonth(m);

        const fetchData = async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_URL! + '/data/web.json');
            const data: LearningPlan = await response.json();
            setLearningPlan(data);
        };

        fetchData();
    }, []);

    if (!learningPlan) {
        return <div>Loading...</div>;
    }

    return <Generate learningPlan={learningPlan} defaultMonth={month} />;
};

export default Web;

