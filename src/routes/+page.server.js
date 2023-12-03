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
				title
				contactpersonen {
					email
				}
				opleiding {
					titel
					faculteit {
						titel
					}
				}
				tags {
					... on Tag {
						id
						titel
						kleur {
							css
						}
					}
				}
			}
			tags {
				id
				titel
				kleur {
					hex
				}
			}
		}
	`;
	const data = await hygraphHP.request(query);

	return data;
}
