import React from 'react'
import {Link} from 'react-router'
import './main.css'
import '../../styles/bootstrap.css'
import OrderedGrid from './order'
import Paper from '../shared/paper'
import Theme from '../shared/theme'
import LargeLogo from '../../../public/ssg_large_logo.png'
import Helmet from '../shared/helmet'
import BasicNavWrap from '../nav/'

const GetContainer = props => {
	return (
		<div className="instagram-home animated fadeIn">
			<div className="content">
				<div className="max-width">
             		<BasicNavWrap onlyShowMobile={true} title="" color={'#F6921E'} data={props.data} />
					<div className="center">
						<img className="instagram-ssg-logo" src={LargeLogo} />
					</div>
					<Paper data={{initial:1, range:0}}>
						<div className="instagram-border">
							<div className="container-fluid np">
								{props.children}
							</div>
						</div>
					</Paper>
					<div className="instagram-bottom" />
				</div>
			</div>
		</div>
	)
}

const setHeights = props => {
	let shNodes = document.querySelectorAll(props.el)
	let maxWidth = 0
	Array.from(shNodes).forEach(node => {
		if(node.clientWidth > maxWidth)
			maxWidth = node.clientWidth
	})
	Array.from(shNodes).forEach(node => {
		node.style.height = maxWidth + 'px'
	})
}

class InstaGram extends React.Component{
	constructor(props){
		super(props)
		this.state=props.route.data
	}
	componentDidMount(){
		setHeights({el:'.sh'})
		setHeights({el:'.dh'})
		window.onresize = event => {
			setHeights({el:'.sh'})
			setHeights({el:'.dh'})
		}
	}
  render(){
    return (
    	<Theme>
        	<Helmet title={ "See Spark Go | Athens, GA"} />
	    	<GetContainer data={this.state}>
	    		<OrderedGrid parent={this.state} data={this.state.instagram.data} />
	    	</GetContainer>
    	</Theme>
    );
  }
}

export default InstaGram







