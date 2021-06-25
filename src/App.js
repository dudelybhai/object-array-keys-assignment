import CanadianCalendar from "./classComponent"
import EuropeanCalendar from "./functionalComponent"

function App() {
	return (
		<div className='h-screen w-full flex justify-center items-center'>
			<div className='border flex justify-center ' style={{ height: "800px", width: "800px" }}>
				<div style={{ width: "400px", borderRight: "1px solid black" }}>
					<EuropeanCalendar />
				</div>
				<div style={{ width: "400px" }}>
					<CanadianCalendar />
				</div>
			</div>
		</div>
	)
}

export default App
