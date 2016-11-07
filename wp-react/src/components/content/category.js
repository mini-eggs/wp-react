import React from 'react'
import Helmet from '../shared/helmet'
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
      return cat
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

const getImageFromCategory = props => {
  if(props.category.toLowerCase()  === 'testimonials') 
    return 'http://evanjones.xyz/ssg/wp-content/uploads/2016/11/15.jpg'
  else if(props.category.toLowerCase()  === 'featured clients') 
    return 'http://evanjones.xyz/ssg/wp-content/uploads/2016/11/14.jpg'
  else (props.category.toLowerCase()  === 'blog') 
    return 'http://evanjones.xyz/ssg/wp-content/uploads/2016/11/13.jpg'
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
    scrollTo(document.body, 0)
  }
  render(){
    return (
      <div>
        <div className="content">
          <Helmet title={"See Spark Go | " + this.state.category.name} />
          <div id="title-background" className="title" style={{backgroundImage: 'url(' + getImageFromCategory({category:this.state.category.name}) + ')', backgroundColor:'#F6921E'}}></div>
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