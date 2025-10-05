import { useState } from 'react'
import './Count.scoped.scss'
import '@/pages/Layout.scss'

const Count = () => {
	const [num, setNum] = useState(0)

	const randomize = async () => {
		const rnd = await window.api.getRandomNum()
		setNum(rnd)
	}

	return (
		<div>
			<button onClick={() => randomize()}>Click me: {num}</button>
		</div>
	)
}

export default Count
