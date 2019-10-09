import React from 'react';
import cls from './style.module.scss';
import Users from './User';
import Preloader from '../Preloader/';
import Paginations from '../Paginations';

class FindUser extends React.PureComponent {
	componentDidMount() {
		this.props.getUserThunkCreator(this.props.CurrentPage, this.props.PageSize);
	}

	render() {
		let pagesCount = Math.ceil(this.props.TotalUserCount / this.props.PageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<div className={cls.user_page}>
					<p className={cls.had}>Users</p>
					<div className={cls.users_list}>
						{this.props.FindUserData.map(el => (
							<Users
								key={el.id}
								id={el.id}
								photoUrl={el.photos.small}
								name={el.name}
								status={el.status}
								location={el.location}
								followed={el.followed}
								followThunkCreator={this.props.followThunkCreator}
								unfollowThunkCreator={this.props.unfollowThunkCreator}
								isFollowProgress={this.props.isFollowProgress}
							/>
						))}
					</div>
					<Paginations
						pageList={pages}
						currentPage={this.props.CurrentPage}
						getUser={this.props.getUserThunkCreator}
						PageSize={this.props.PageSize}
						pageCount={this.props.TotalUserCount}
					/>
					<button className={cls.show}> Show More</button>
				</div>
			</>
		);
	}
}

export default FindUser;
