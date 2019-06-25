import React from 'react';
import ThemeDetail from '../ThemeDetail/ThemeDetail';
import './ThemeList.css';
class ThemeList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			themes:[],
			filteredThemes:[],
			themeList:true,
			key:null,
			filter:false
		}
	}
	componentDidMount(){
	fetch('https://newprod.zypher.co/admin/themes/getAllThemes')
    .then(response=>response.json())
    .then(data=>this.setState({themes:data.themes,filteredThemes:data.themes}))
	}
	onThemeDetail = (i)=>{
		console.log(i);
		this.setState({themeList:false,key:i});
	}

	onFilter = (e)=>{
		//console.log(e.target.checked);
		this.setState({filter:e.target.checked},this.update);
		//console.log(this.state.filter);
		
	}

	update(){
		if(this.state.filter === true)
		{
			var b=this.state.themes;
			var a=b.filter((theme,i)=>{
				return theme.inHomePage;
			});
			this.setState({filteredThemes:a});
			
		}
		else{
			this.setState({filteredThemes:this.state.themes})
		}
	}
	render(){
		const {themeList,filteredThemes} = this.state;
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
						<div>
							<input className="filter" type="checkbox" onChange={this.onFilter} />
							<span className="filtername">InHomePage Filter</span>
						</div>
						<div className="all_theme_name">
						{
								filteredThemes.map((theme,i)=>{
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
					 :<ThemeDetail  themes={filteredThemes[this.state.key]} />
				}
			</div>
			);
	}
}
export default ThemeList;