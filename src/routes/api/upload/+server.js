import { hygraph } from "$lib/Utils/hygraph";
import { gql } from "graphql-request";
import { responseInit } from '$lib/Utils/responseInit'

export async function POST({ request }){
    const requestData = await request.json()
    const errors = []

    const mutation = gql`
        mutation createWerkvorm(){
            createWerkvorm(
                data: {
                    
                }
            )
        }
    `
}