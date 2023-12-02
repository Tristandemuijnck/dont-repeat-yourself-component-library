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
			contactpersoons {
				id
				email
			}
			tags {
				id
				titel
			}
		}
	`;

	const data = await hygraphHP.request(query);
	// console.log(data);
	return data;
}

export const actions = {
	'create-werkvorm': async ({ request }) => {
		const formData = await request.formData();

		const werkvormName = formData.get('werkvormName')?.toString();
		const werkvormShortDesc = formData.get('werkvormShortDesc')?.toString();
		const werkvormDesc = formData.get('werkvormDesc')?.toString();
		const werkvormOpleiding = formData.get('werkvormOpleiding')?.toString();
		const werkvormStudiejaar = formData.get('werkvormStudiejaar')?.toString();
		const werkvormContactpersoon = formData.get('werkvormContactpersoon')?.toString();
		const thumbnailName = formData.get('thumbnailName')?.toString();
		const thumbnailHandle = formData.get('thumbnailHandle')?.toString();
		const videoName = formData.get('videoName')?.toString();
		const videoHandle = formData.get('videoHandle')?.toString();
		const materialenName = formData.get('materialenName')?.toString();
		const materialenHandle = formData.get('materialenHandle')?.toString();

		console.log('Alle data:', formData);
		console.log(formData.get('werkvormThumbnail'));

		const mutation = gql`
			mutation createWerkvorm(
				$werkvormName: String!
				$werkvormShortDesc: String
				$werkvormDesc: String!
				$werkvormOpleiding: ID
				$werkvormStudiejaar: Int
				$werkvormContactpersoon: ID
				$thumbnailName: String!
				$thumbnailHandle: String!
				$videoName: String!
				$videoHandle: String!
				$materialenName: String!
				$materialenHandle: String!
			) {
				createWerkvorm(
					data: {
						title: $werkvormName
						korteBeschrijving: $werkvormShortDesc
						beschrijving: $werkvormDesc
						opleiding: { connect: { id: $werkvormOpleiding } }
						studiejaar: $werkvormStudiejaar
						contactpersonen: { connect: { id: $werkvormContactpersoon } }
						thumbnail: {
							create: { fileName: $thumbnailName, handle: $thumbnailHandle }
						}
						video: { create: { fileName: $videoName, handle: $videoHandle } }
						materialen: {
							create: { fileName: $materialenName, handle: $materialenHandle }
						}
					}
				) {
					id
				}
			}
		`;
	}
};
