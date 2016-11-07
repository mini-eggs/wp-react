import React from 'react'
import BaseComponent from './baseComponent'
import ShareBtn from './share'

const GetButtons = props => {
	return (
		<div className="buttons">
			{ props.data.actions.split(',').map((action) => { if(action === 'share'){ return (
			<ShareBtn /> ); }else{ return (
			<span /> ) } }) }
		</div>
	)
}

const GetTitles = props => {
	return (
		<div className="thing-title preview-text">
			<div className="overlay-title">
				<span>{props.data.overlay_title}</span>
			</div>
			<div className="divider" />
			<div className="overlay-description">
				<span>{props.data.overlay_description}</span>
			</div>
		</div>
	)
}

const GetContainer = props => {
	return (
		<div className="body">
			<div className="col-xs-12 np">
				<div className="max-width">
					{props.children}
				</div>
			</div>
		</div>
	)
}

class mainContent extends BaseComponent{
	render(){
		return (
			<GetContainer>
				<GetButtons data={this.state} />
				<GetTitles data={this.state} />
				<div className="thing-body" dangerouslySetInnerHTML={{__html:this.state.post_content}} />
			</GetContainer>
		)
	}
}

export default mainContent
