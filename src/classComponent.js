import React from "react"
import { canadianData } from "./canadianData"
export default class CanadianCalendar extends React.Component {
	constructor() {
		super()
		this.state = {
			data: canadianData.weekDays,
			result: [],
		}
	}
	render() {
		const { data } = this.state
		console.log(this.state.result)
		return (
			<div>
				{data.map((item) => {
					return (
						<label className='flex  items-center mt-3'>
							<input
								onClick={() =>
									this.setState({
										result: this.state.result.concat({ selected: item.value }),
									})
								}
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
}
