import { hygraph } from '$lib/Utils/hygraph';
import { gql } from 'graphql-request';
import { responseInit } from '$lib/Utils/responseInit';

export async function POST({ request }) {
	const requestData = await request.formData();
	console.log(requestData);

	const errors = [];

	const mutation = gql`
		mutation createWerkvorm($werkvormName: String!, $werkvormShortDesc: String, $werkvormDesc: String!, $werkvormOpleiding: ID, $werkvormStudiejaar: Int, $werkvormContactpersoon: ID, $thumbnailName: String!, $thumbnailHandle: String!, $videoName: String!, $videoHandle: String!, $materialenName: String!, $materialenHandle: String!) {
			createWerkvorm(
				data: {
					title: $werkvormName
					korteBeschrijving: $werkvormShortDesc
					beschrijving: $werkvormDesc
					opleiding: { connect: { id: $werkvormOpleiding } }
					studiejaar: $werkvormStudiejaar
					contactpersonen: { connect: { id: $werkvormContactpersoon } }
					thumbnail: { create: { fileName: $thumbnailName, handle: $thumbnailHandle } }
					video: { create: { fileName: $videoName, handle: $videoHandle } }
					materialen: { create: { fileName: $materialenName, handle: $materialenHandle } }
				}
			){
                id
            }
		}
	`;

    const publication = gql`
        mutation publishWerkvorm($id: ID!) {
            publishWerkvorm(where: { id: $id }, to: PUBLISHED) {
                id
            }
        }
    `

    const data = await hygraph
        .request(mutation, {...requestData})
        .then((data) => {
            return (
                hygraph.request(publication, {id: data.createWerkvorm.id})
                .catch((error) => {
                    errors.push({field: 'Hygraph', message: error})
                })
            )
        })
        .catch((error) => {
            errors.push({ field: 'HyGraph', message: error})
        })

        // Check error length
        if (errors.length > 0) {
            return new Response(
                JSON.stringify({
                    errors: errors,
                }),
                { status: 400}
            )
        }

    //     return new Response(
    //         JSON.stringify({
    //             data: data && data.publishFact,
    //         }),
    //         responseInit
    //     )
    return new Response(
        JSON.stringify({
            data: data && data.publishWerkvorm,
        }),
        responseInit
    )
}
