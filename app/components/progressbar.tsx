import { useProgress } from "../context/progress";

export default function ProgressBar({ total }: { total: number }) {
	const { progress } = useProgress();
	const completedTasks = progress.filter(task => task.completed).length;
	const progressPercentage = total > 0 ? (completedTasks / total) * 100 : 0;

	return (
		<div className="fixed w-screen z-[10] h-2 md:h-3">
			<div
				style={{
					width: `${progressPercentage}%`,
					background: `
				repeating-linear-gradient(
				45deg,
					#10b981, 
					#10b981 10px,
					#059669 10px, 
					#059669 20px
				)
			`,
			backgroundSize: '28.28px 28.28px',
		}}

				className="h-full transition-width"
			></div>
		</div>
	);
}