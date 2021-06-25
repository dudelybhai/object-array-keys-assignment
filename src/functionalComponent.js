import React from "react"
import { europeanData } from "./europeanData"

const EuropeanCalendar = () => {
	const [result, setResult] = React.useState([])

	console.log(setResult)
	const data = europeanData.weekDays
	console.log(data)
	return (
		<div>
			{data.map((item) => {
				return (
					<label className='flex  items-center mt-3'>
						<input
							onClick={() => console.log(...result.concat({ selected: item.value }))}
							type='checkbox'
							class='form-checkbox h-5 w-5 text-gray-600'
						/>
						<span class='ml-2 text-gray-700'>{item.title}</span>
					</label>
				)
			})}
		</div>
	)
}

export default EuropeanCalendar
