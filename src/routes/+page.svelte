<script>

    
    import Nav from "$lib/organisms/nav.svelte"    
    import { page } from '$app/stores'
	import LoginOutButton from '../lib/organisms/LoginOutButton.svelte';

    export let data

    let loading = false

    const handleLogout = () => {
		loading = true
		return async ({ result }) => {
			await invalidate('supabase:auth')
			await applyAction(result)
			loading = false
		}
	}


    
    console.log(data)
</script>


<main>

    <Nav {data}></Nav>
    <div>
        {#each data.werkvormen as werkvorm}
        <h1>{werkvorm.title}</h1>
        <p>{werkvorm.korteBeschrijving}</p>
        {#each werkvorm.tags as tag}
        <p style="border-color: {tag.kleur.css};">{tag.titel}</p>
    {/each}
   
    {/each}
    
   
</div>

</main>

<style>
    main {
        display: flex;
		flex-direction: column;
		padding: 0 2rem;
		width: 100%;
    }
</style>