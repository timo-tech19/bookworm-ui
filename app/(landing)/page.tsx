import { Button } from "@/components/ui/button";
import { titleFont } from "@/lib/font";
import { cn } from "@/lib/utils";
import Image from "next/image";

function LandingPage() {
	return (
		<div className='min-h-full flex flex-col'>
			<div className='flex flex-col items-center justify-center  text-center gap-y-8 flex-1 pb-10'>
				<div className='max-w-3xl space-y-4'>
					<h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl'>
						Track Your Books, Summaries and Build A Reading Habit.
					</h1>
					<h3 className='leading-7 text-xl'>
						Take control of your life by reading consistently
					</h3>
					<Button size='lg' className='text-md'>
						Join Bookworm Free
					</Button>
					<div className='flex items-center justify-center'>
						<div className='relative w-[400px] h-[400px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]'>
							<Image
								src='/reading.svg'
								fill
								className='object-contain'
								alt='Reading'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-between p-6'>
				<h2
					className={cn(
						"text-2xl font-semibold tracking-tight",
						titleFont.className
					)}
				>
					Bookworm.io
				</h2>
				<div>Copyright &copy; 2024, TimoTech</div>
			</div>
		</div>
	);
}

export default LandingPage;
