import { gql } from 'graphql-request';
import { hygraph, hygraphHP } from '$lib/Utils/hygraph';

export async function load() {
	let query = gql`
		query MyQuery {
			faculteits {
				titel
				id
			}
			opleidings {
				id
				titel
			}
		}
	`;

	const data = await hygraphHP.request(query);
	console.log(data);
	return data;
}
