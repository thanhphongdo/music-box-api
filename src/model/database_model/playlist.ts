import { ParseObjectBase } from '../../parse';
import { PlayListInterface, TrackInterface } from '../interfaces';
import { User } from './user';

export class PlayList extends ParseObjectBase {
	constructor() {
		super(PlayList.name);
	}

	get title(): string {
		return this.get('title');
	}

	set title(value: string) {
		this.set('title', value);
	}

	get description(): string {
		return this.get('description');
	}

	set description(value: string) {
		this.set('description', value);
	}

	get duration(): number {
		return this.get('duration');
	}

	set duration(value: number) {
		this.set('duration', value);
	}

	get tracks(): Array<TrackInterface> {
		return this.get('tracks');
	}

	set tracks(value: Array<TrackInterface>) {
		this.set('tracks', value);
	}

	get user(): User {
		return new User(this.get('user').toJSON());
	}

	set user(value: User) {
		this.set('user', value);
	}
}