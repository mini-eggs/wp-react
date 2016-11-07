import React from 'react'
import Divider from 'material-ui/Divider'
import Paper from '../shared/paper'
import RightArrow from 'material-ui/svg-icons/navigation/chevron-right'

const FeaturedClient = props => {
	return (
		<a href={props.data.social_link} target="_blank">
			<div className="featured-client">
				<div className="col-xs-12 col-sm-6 np">
					<div className="fc-inner">
						<Paper data={{initial:0, range:1}}>
							<div className="fc-image" style={{backgroundImage:'url(' + props.data.post_image + ')'}}>
								<div className="fc-content">
									<div className="fc-title">
										{props.data.post_title}
									</div>
									<div className="fc-link">
										<RightArrow style={{height:'48px', width:'48px'}} />
									</div>
								</div>
							</div>
						</Paper>
					</div>
				</div>
			</div>
		</a>
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
				<div className="col-xs-12 np general-margin">
					<div className="">
						<div className="max-width">
							{
								this.state.data.map( (item, i) => {
									return(
										<div key={i} className="fc">
											<FeaturedClient key={i} data={item} />
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