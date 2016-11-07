import React from 'react'
import Paper from '../shared/paper'
import {Link} from 'react-router'
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back'
import NextIcon from 'material-ui/svg-icons/navigation/arrow-forward'
import IconButton from 'material-ui/IconButton'

const FeaturedClient = props => {
	return (
		<Link to={"/category/blog/" + props.data.post_name} className="no-link blog-margin">
			<Paper data={{initial:0, range:1}}>
				<div className="blog-post container-fluid np">
					<div className="show-mobile show-tablet">
						<img src={props.data.post_image} alt={props.data.post_image}/>
					</div>
					<div className="col-sm-12 np show-mobile show-tablet">
						<div className="inner">
							<div className="blog-title">
								{props.data.post_title}
							</div>
							<div className="blog-date">
								{formateDate(props.data.post_date)}
							</div>
							<div className="blog-description">
								{props.data.social_description}
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 np show-desktop">
						<div className="inner">
							<div className="blog-title">
								{props.data.post_title}
							</div>
							<div className="blog-date">
								{formateDate(props.data.post_date)}
							</div>
							<div className="blog-description">
								{props.data.social_description}
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 np blog-image-container show-desktop">
						<div className="blog-image" style={{backgroundImage: 'url(' + props.data.post_image + ')'}} />
					</div>
				</div>
			</Paper>
		</Link>
	)
}	

const formateDate = (dateString) => {
  let date = new Date(dateString);
  let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + (date.getYear() - 100 + 2000);
}

const initClass = props => {
	let page = 0
	return {
		data:props.data,
		page:parseInt((props.parent.location.query.page) ? props.parent.location.query.page : 0),
		size:10,
		parent:props.parent
	}
}

export default class extends React.Component{
	constructor(props){
		super(props)
		this.state = initClass(props)
	}
	componentWillMount(){
		scrollTo(document.body, 0)
	}
	previousPage(){
		this.changePage(-1)
	}
	nextPage(){
		this.changePage(1)
	}
	changePage(num){
		console.log(this.state.parent)
		let currPath = this.state.parent.location.pathname
		let currPage = '?page=' + (this.state.page + num)
		this.state.parent.history.push(currPath + currPage)
		this.setState({
			page:(this.state.page + num)
		})
	}
	render(){
		return(
			<div className="container np">
				<div className="col-xs-12 np">
					<div className="category-container-blog">
						<div className="max-width">
							{
								this.state.data.slice(this.state.page * this.state.size, (this.state.page + 1) * this.state.size).map( (item, i) => {
									return(
										<div key={i}>
											<FeaturedClient key={i} data={item} />
										</div>
									)
								})
							}
							<div style={{padding:'25px 0'}}>
								<div className="col-xs-6 np">
									{
										this.state.page 
											? 
											<IconButton onClick={() => {this.previousPage()}} className="custom-btn">
												<BackIcon style={{height:'48px', width:'48px'}} />
											</IconButton>
											:
											<span />
									}
								</div>
								<div className="col-xs-6 np" style={{textAlign:'right'}}>
									{
										(this.state.page + 1) * this.state.size < this.state.data.length 
											?
											<IconButton onClick={() => {this.nextPage()}} className="custom-btn">
												<NextIcon style={{height:'48px', width:'48px'}} />
											</IconButton>
											:
											<span />
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}