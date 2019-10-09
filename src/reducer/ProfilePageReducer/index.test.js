import ProfilePageReducer, { AddPostActionCreator, DeletePostActionCreator } from './index';

it('length of post should be incremented', () => {
	let state = {
		PostData: [
			{ id: 1, text: 'asdas', like: 10 },
			{ id: 2, text: 'asdasd', like: 10 },
			{ id: 3, text: 'asdasd', like: 10 },
			{ id: 4, text: 'Galasdia', like: 10 },
		],
	};
	let action = AddPostActionCreator('lola');

	let newState = ProfilePageReducer(state, action);

	expect(newState.PostData.length).toBe(5);
});

it('after delete length should be 3', () => {
	let state = {
		PostData: [
			{ id: 1, text: 'asdas', like: 10 },
			{ id: 2, text: 'asdasd', like: 10 },
			{ id: 3, text: 'asdasd', like: 10 },
			{ id: 4, text: 'Galasdia', like: 10 },
		],
	};
	let action = DeletePostActionCreator(1);

	let newState = ProfilePageReducer(state, action);

	expect(newState.PostData.length).toBe(3);
});
