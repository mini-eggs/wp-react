import React from 'react'
import Divider from 'material-ui/Divider'

const Testimonial = props => {
	return (
		<div className="testimonial">
			<div className="test-image" style={{backgroundImage:'url(' + props.data.post_image + ')'}} />
			<div className="test-container">
				<div className="test-title">
					{props.data.post_title}
				</div>
				<div className="test-social-description">
					{props.data.social_description}
				</div>
				<div className="test-content">
					{props.data.post_content}
				</div>
			</div>
		</div>
	)
}

export default class extends React.Component{
	constructor(props){
		super(props)
		this.state={data:props.data}
	}
    componentDidMount(){
	  scrollTo(document.body, 0)
    }
	render(){
		return(
			<div className="container np">
				<div className="col-xs-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2 np">
					<div className="category-container">
						<div className="max-width">
							{
								this.state.data.map( (item, i) => {
									return(
										<div key={i}>
											<Testimonial key={i} data={item} />
											{
												(i < this.state.data.length - 1) ? <Divider /> : <span />
											}
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}