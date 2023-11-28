import { gql } from 'graphql-request';
import { hygraph, hygraphHP } from '$lib/Utils/hygraph';

export async function load() {
	let query = gql`
		query Tags {
			tags {
				titel
			}
		}
	`;
	const data = await hygraphHP.request(query);

	return data;
}
