import React from 'react'
import ImageGram from './image'

const GetWidthsFromArrayAndEls = props => {

	function shuffle(a) {
	    for (let i = a.length; i; i--) {
	        let j = Math.floor(Math.random() * i);
	        [a[i - 1], a[j]] = [a[j], a[i - 1]];
	    }
	    return a
	}

	let items = props.items,
		nodes = [[],[],[],[]],
		index = 0,
		withLarge = [
			['col-xs-6 sh', 'col-xs-6 sh', 'col-xs-6 sh', 'col-xs-6 sh', 'col-xs-12 dh'],
			['col-xs-6 sh', 'col-xs-6 sh', 'col-xs-12 dh', 'col-xs-6 sh', 'col-xs-6 sh'],
			['col-xs-12 dh', 'col-xs-6 sh', 'col-xs-6 sh', 'col-xs-6 sh', 'col-xs-6 sh']
		],
		onlySmall = ['col-xs-12 sh', 'col-xs-12 sh', 'col-xs-12 sh', 'col-xs-12 sh'],
		xindex = 0,
		classes,
		finalNodes = [],
		numbers = Array.apply({},Array(props.items.length)).map((x,i)=>i+1)

	let randomIndex = props => {
		return numbers[Math.floor(Math.random()*numbers.length)]
	}

	shuffle(items)

	items.slice(0,4).forEach( item => {
		nodes[0].push(
			<div key={index} className={"np rel " + onlySmall[xindex]}>
				<ImageGram index={randomIndex()} parent={props.parent} data={item} />
			</div>
		)
		xindex++
		index++
	})

	classes = withLarge[Math.floor(Math.random()*withLarge.length)]
	xindex = 0
	items.slice(4,9).forEach( item => {
		nodes[1].push(
			<div key={index} className={"np rel " + classes[xindex]}>
				<ImageGram index={randomIndex()} parent={props.parent} data={item} />
			</div>
		)
		xindex++
		index++
	})

	xindex = 0
	items.slice(9,13).forEach( item => {
		nodes[2].push(
			<div key={index} className={"np rel " + onlySmall[xindex]}>
				<ImageGram index={randomIndex()} parent={props.parent} data={item} />
			</div>
		)
		xindex++
		index++
	})

	classes = withLarge[Math.floor(Math.random()*withLarge.length)]
	xindex = 0
	items.slice(13,18).forEach( item => {
		nodes[3].push(
			<div key={index} className={"np rel " + classes[xindex]}>
				<ImageGram index={randomIndex()} parent={props.parent} data={item} />
			</div>
		)
		xindex++
		index++
	})

	finalNodes.push(
		<div className="col-xs-2 np hide-mobile">
			{nodes[0]}
		</div>
	)

	finalNodes.push(
		<div className="col-xs-6 col-sm-4 np">
			{nodes[1]}	
		</div>
	)

	finalNodes.push(
		<div className="col-xs-2 np hide-mobile">
			{nodes[2]}
		</div>
	)

	finalNodes.push(
		<div className="col-xs-6 col-sm-4 np">
			{nodes[3]}
		</div>
	)

	shuffle(finalNodes)

	return (
		<div>
			{finalNodes}
		</div>
	)
}

export default props => {
	return GetWidthsFromArrayAndEls({items:props.data, parent:props.parent})
}