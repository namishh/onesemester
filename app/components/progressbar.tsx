import { useProgress } from "../context/progress";

export default function ProgressBar({ total }: { total: number }) {
	const { progress } = useProgress();
	const completedTasks = progress.filter(task => task.completed).length;
	const progressPercentage = total > 0 ? (completedTasks / total) * 100 : 0;

	return (
		<div className="fixed w-screen z-[100] h-2 md:h-3 overflow-hidden">
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
					animation: 'pan 1s linear infinite'
				}}
				className="h-full transition-width"
			></div>
			
			<style jsx global>{`
				@keyframes pan {
					from { background-position: 0 0; }
					to { background-position: -28.28px 0; }
				}
			`}</style>
		</div>
	);
}