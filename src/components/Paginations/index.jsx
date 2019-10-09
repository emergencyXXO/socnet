import React, { useState } from 'react';
import cls from './style.module.scss';

const Paginations = props => {
	let onPageChange = pageNumber => props.getUser(pageNumber, props.PageSize);
	let portionSize = 5;
	let portionCount = Math.ceil(props.pageCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionNumber = portionNumber * portionSize;
	return (
		<div className={cls.pagination}>
			{portionCount > 1 && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber - 1);
					}}
				>
					Prev
				</button>
			)}

			{props.pageList
				.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
				.map(i => {
					return (
						<span
							key={i}
							className={(i === props.currentPage && cls.active).toString()}
							onClick={() => {
								onPageChange(i);
							}}
						>
							{i}
						</span>
					);
				})}
			{portionCount > portionNumber && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber + 1);
					}}
				>
					next
				</button>
			)}
		</div>
	);
};

export default Paginations;
