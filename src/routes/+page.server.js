import { gql } from 'graphql-request';
import { hygraph, hygraphHP } from '$lib/Utils/hygraph';
export let data;
export let tagData;

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
				}
				tags {
					
						titel
					}
				}
				title
			}
		}
	`;
	let tagQuery = gql`
		query tagquery {
			tags {
				titel
			}
		}
	`;
	const data = await hygraphHP.request(query);
	const tagData = await hygraphHP.request(tagQuery);

	return { data, tagData };
}
