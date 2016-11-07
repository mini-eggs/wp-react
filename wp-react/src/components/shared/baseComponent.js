import React from 'react'

const initializeState = props => {
	return props
}

class BaseComponent extends React.Component{
	constructor(props){
		super(props)
		this.state=initializeState(props.data)
    	scrollTo(document.body, 0)
	}
	componentWillReceiveProps(props){
		this.setState(initializeState(props.data))
    	scrollTo(document.body, 0)
	}
	render(){
		return (
			<span>Silence is bliss</span>
		)
	}
}

export default BaseComponent
