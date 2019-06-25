import React from 'react';
import ThemeDetail from '../ThemeDetail/ThemeDetail';
import './ThemeList.css';
class ThemeList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			themes:[],
			themeList:true,
			key:null
		}
	}
	componentDidMount(){
	fetch('https://newprod.zypher.co/admin/themes/getAllThemes')
    .then(response=>response.json())
    .then(data=>this.setState({themes:data.themes}))
	}
	onThemeDetail = (i)=>{
		console.log(i);
		this.setState({themeList:false,key:i});
	}
	render(){
		const {themes,themeList} = this.state;
		//console.log(themes[0]);
		return(
			<div className="theme_list">
				
				{
					themeList === true
					?<div>
						<div className="theme_name_header">
							<div className="serial">#</div>
							<div className="content">Name</div>
						</div>
						<div className="all_theme_name">
						{
								themes.map((theme,i)=>{
								return (
									<div className="theme_name" key={theme._id}>
										<div className="number">
										{i+1}
										</div>
										<div className="name"  onClick={()=>this.onThemeDetail(i)}>
										{theme.themeName}
										</div>
									</div>
									);
								})
						
							
						}
					 	</div>
					 </div>
					 :<ThemeDetail  themes={themes[this.state.key]} />
				}
			</div>
			);
	}
}
export default ThemeList;