import {DELETE_ARTICLE} from '../constants';
import {CHANGE_DATE_RANGE} from '../constants';
import {CHANGE_SELECT} from '../constants';

export function deleteArticle(id) {
	return {
		type: DELETE_ARTICLE,
		payload: { id }
	}
}

export function changeDateRange(dateRange) {
	return{
		type: CHANGE_DATE_RANGE,
		payload: {dateRange}
	}
}

export function changeSelected(selected) {
	return {
		type: CHANGE_SELECT,
		payload: {selected}
	}
}