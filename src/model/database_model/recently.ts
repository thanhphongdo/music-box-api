import { ParseObjectBase } from '../../parse';
import { PlayListInterface, TrackInterface } from '../interfaces';
import { User } from './user';

export class RecentlyPlayed extends ParseObjectBase {
	constructor() {
		super(RecentlyPlayed.name);
	}

	get itemId(): string {
		return this.get('itemId');
	}

	set itemId(value: string) {
		this.set('itemId', value);
	}

	get playedAt(): Date {
		return this.get('playedAt');
	}

	set playedAt(value: Date) {
		this.set('playedAt', value);
	}

	get type(): number {
		return this.get('type');
	}

	set type(value: number) {
		this.set('type', value);
	}

	get detailInfo(): {} {
		return this.get('detailInfo');
	}

	set detailInfo(value: {}) {
		this.set('detailInfo', value);
	}

	get user(): User {
		return new User(this.get('user').toJSON());
	}

	set user(value: User) {
		this.set('user', value);
	}
}