import { gql } from 'graphql-request';
import { hygraph, hygraphHP } from '$lib/Utils/hygraph';
import { HYGRAPH_ASSET_URL, HYGRAPH_KEY } from '$env/static/private';

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

async function uploadFile(fileData) {
    const response = await fetch(`${HYGRAPH_ASSET_URL}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${HYGRAPH_KEY}`
        },
        body: fileData
    });

    const data = await response.json();
    return data;
}

export const actions = {
	'create-werkvorm': async ({ request }) => {
		// TODO - Upload files to assets with /upload endpoint Hygraph

		// TODO - Use response from uploading assets to get ID of added file and add to formData object

		const formData = await request.formData();

		// Get all files from formData object
		const werkvormThumbnail = formData.get('werkvormThumbnail');
		const werkvormVideo = formData.get('werkvormVideo');
		const werkvormMaterialen = formData.get('werkvormMaterialen');

        console.log('werkvormThumbnail', werkvormThumbnail);

        const filesToUpload = new FormData();

		const files = [werkvormThumbnail, werkvormVideo, werkvormMaterialen];

        files.forEach(file => {
            filesToUpload.append('files', file);
            console.log(`Added ${file.name} to filesToUpload`);
        });

        const uploadData = await uploadFile(filesToUpload);
        console.log(uploadData);

		const werkvormName = formData.get('werkvormName')?.toString();
		const werkvormShortDesc = formData.get('werkvormShortDesc')?.toString();
		const werkvormDesc = formData.get('werkvormDesc')?.toString();
		const werkvormOpleiding = formData.get('werkvormOpleiding')?.toString();
		const werkvormStudiejaar = formData.get('werkvormStudiejaar')?.toString();
		const werkvormContactpersoon = formData.get('werkvormContactpersoon')?.toString();
		// const thumbnailName = formData.get('thumbnailName')?.toString();
		// const thumbnailHandle = formData.get('thumbnailHandle')?.toString();
		// const videoName = formData.get('videoName')?.toString();
		// const videoHandle = formData.get('videoHandle')?.toString();
		// const materialenName = formData.get('materialenName')?.toString();
		// const materialenHandle = formData.get('materialenHandle')?.toString();


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
