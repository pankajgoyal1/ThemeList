import React from 'react';
import './ThemeDetail.css';
class ThemeDetail extends React.Component{
	constructor(props){
		super(props);
		this.state={
		}
	}
	render(){
		const {themes} = this.props;
		console.log(themes.books);
		return(
			<div>
				<a href="/" className="back"> Back To Home </a>
				<div className="all_cards" >
					{
						themes.books.map((book,i)=>{
							if(book._id)
							return(
								<div className="card" key={book._id}>
									<img className="card_image" src={book.imageURL} alt="" />
									<p className="book_name">{book.productName}</p>
									<p className="book_author"> By-{book.authorName}</p>
								</div>
								);
							else{
								return(
									<div className="empty">No Boooks Available</div>
									);
							}
							
						})
								
						
					}
				
				</div>
			</div>
			);
	}
}
export default ThemeDetail;