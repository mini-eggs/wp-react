import React from 'react'
import BaseComponent from './baseComponent'

class headerBackground extends BaseComponent{
	render(){
		return (
			<div>
				<div
					className="title"
					style={{backgroundImage: 'url(' + this.state.post_image + ')', backgroundColor:this.state.background_color}}
				/>
		        <div className="title abs">
		        	<h1 className="">{this.state.post_title}</h1>
		        </div>
			</div>
		)
	}
}

export default headerBackground
