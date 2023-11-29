import { gql } from 'graphql-request';
import { hygraph, hygraphHP } from '$lib/Utils/hygraph';
export let data;

export async function load() {
	let query = gql`
		query Assets {
			werkvormen {
				beschrijving
				korteBeschrijving
				link
				studiejaar
				contactpersonen {
					email
				}
				opleiding {
					titel
					faculteit {
						titel
					}
				}
				title
			}
			tags {
				id
				titel
			}
		}
	`;
	const data = await hygraphHP.request(query);

	return data;
}
