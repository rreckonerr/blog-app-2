import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array'

export default Route.extend({
	model() {
		let firstPost = EmberObject.create({
			title: 'My First Post',
			postUrl: 'http://some.url.com/adasd1221',
			body: 'This is my first post'
		});

		return A([firstPost]);
	}
});
