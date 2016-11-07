import React from 'react'
import {Link} from 'react-router'
import Snackbar from 'material-ui/Snackbar'

const GetBackground = props => {
	return (
		<div className="fill image-margin">
			<div id={props.image} className="fill background opac-0 tran" style={{backgroundImage:'url(' + props.image + ')'}}>{props.children}</div>
		</div>
	)
}

const hexToRgba = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return "rgba(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + ", 0.75)";
}

const getRandomBackgroundColor = props => {
	let colors = []
	let colorsSetOne = props.pages.map( page => page.background_color)
	let colorsSetTwo = props.posts.map( post => post.background_color)
	colorsSetOne.concat(colorsSetTwo).forEach( color => {
		if(color.length > 0)
			colors.push(color)
	})
	return colors[Math.floor(Math.random()*colors.length)];
}

const getRandomPage = props => {
	return props.pages[Math.floor(Math.random()*props.pages.length)]
}

class ImageGram extends React.Component{
	constructor(props){
		super(props)
		this.state={
			index:props.index,
			data:props.data,
			parent:props.parent,
			color:hexToRgba(getRandomBackgroundColor(props.parent)),
			randomPage:getRandomPage(props.parent),
			open:false
		}
	}
	componentDidMount(){
		setTimeout( e => {
			setTimeout( i => {
				document.getElementById(this.state.data.images.standard_resolution.url).style.opacity = 1
			}, this.state.index * 50)
		}, 150)
	}
	openSnack(){
		this.setState({open:true})
	}
	closeSnack(){
		this.setState({open:false})
	}
	render(){
		return (
			<div className="abs fill standard-margin">
				<GetBackground image={this.state.data.images.standard_resolution.url}>
					<Link
					to={/page/ + this.state.randomPage.post_name}
					onMouseEnter={ () => { this.openSnack() }}
					onMouseLeave={ () => { this.closeSnack() }}
					>
						<div className="abs fill show-on-hover">
							<div style={{backgroundColor:this.state.color}} className="abs fill shift-area instagram-go-to">
								<div className="instagram-center">
									<i className="material-icons">play_arrow</i>
								</div>
							</div>
						</div>
					</Link>
				</GetBackground>
				<Snackbar
		          open={this.state.open}
		          message={'Go to our ' + this.state.randomPage.post_title + ' page'}
		          autoHideDuration={4000}
		          onRequestClose={this.closeSnack}
		        />
			</div>
		)
	}
}

export default ImageGram