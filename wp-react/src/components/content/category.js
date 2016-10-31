import React from 'react'
import {Card, CardActions, CardMedia, CardText} from 'material-ui/Card'
import Helmet from '../shared/helmet'
import Paper from '../shared/paper'
import ShareBtn from '../shared/share'
import Zodiac from './zodiac'
import './main.css'
import Testimonials from './testimonials'
import FeaturedClients from './featured-clients'
import Blog from './blog'

const getPath = () => {
  let path = document.createElement("a")
  path.href = window.location.href
  let url = path.pathname
  path.remove()
  return url.replace('/category/','')
}

const getCategoryFromPath = (path, categories) => {
  let theCat
  categories.map((cat) => {
  	if(cat.slug === path)
  		theCat = cat
    return cat
  })
  return theCat
}

const getPostsFromCategory = props => {
	let posts = []
	props.posts.map( post => {
		post.post_categories.map( cat => {
			if(cat.category_id === props.category.category_id)
				posts.push(post)
		})
		return post
	})
	return posts
}

const getColorFromCategory = props => {
  if(props.category.name.toLowerCase() === 'featured clients')
    return '#a93d0f'
  if(props.category.name.toLowerCase() === 'testimonials')
    return '#2a445d'
  if(props.category.name.toLowerCase() === 'blog')
    return '#837195'
  else
    return '#000'
}

const initializeClass = props => {
  let path = getPath()
  let category = getCategoryFromPath(path, props.data.categories)
  let color = getColorFromCategory({category:category})
  let posts = getPostsFromCategory({category:category, posts:props.data.posts})
  let state = {
    posts:posts,
    data:props.data,
    category:category,
    parent:props,
    color:color
  }
  return state
}

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = initializeClass(props)
  }
  componentWillReceiveProps(props){
    this.setState(initializeClass(props))
  }
  componentDidMount(){
    this.zodiac()
  }
  zodiac(){
    Zodiac({container:'title-background', color:this.state.color})
  }
  render(){
    return (
      <div>
        <div className="content">
          <Helmet title={"See Spark Go | " + this.state.category.name} />
          <canvas id="title-background" className="title" style={{backgroundColor: this.state.color}}></canvas>
          <div className="title abs" style={{backgroundColor: 'transparent'}}>
            <h1 className="">{this.state.category.name}</h1>
          </div>
          <div className="">
            {
              (this.state.category.name.toLowerCase() === 'testimonials' ? <Testimonials data={this.state.posts} /> : <span />)
            }
            {
              (this.state.category.name.toLowerCase() === 'featured clients' ? <FeaturedClients data={this.state.posts} /> : <span />)
            }
            {
              (this.state.category.name.toLowerCase() === 'blog' ? <Blog parent={this.state.parent} data={this.state.posts} /> : <span />)
            }
          </div>
        </div>
      </div>
    )
  }
}